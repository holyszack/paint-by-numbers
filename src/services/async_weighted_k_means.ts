import { Observable } from "rxjs";
import { Palette } from "../types/palette";
import { RGB } from "../types/rgb";
import { WeightedRGB } from "../types/weighted_rgb";
import { batchArray } from "./batch_array";
import { closestValue } from "./closest_value";
import { dotReduce } from "./dot_reduce";
import { euclideanDistance } from "./euclidean_distance";
import { generateRandomPoints } from "./generate_random_points";
import { histogramToWeightedRgbs } from "./histogram_to_weighted_rgbs";
import { memoize } from "./memoize";
import { pointSort } from "./point_sort";
import { stopwatch } from "./stopwatch";
import { weightedAveragePixel } from "./weighted_average_pixel";

export type WeightedKMeans = {
    "progress": number;
    "partitions": number;
    "complete": boolean;
    "palette": RGB[];
}
const batchSize = 2500;

export function asyncWeightedKMeans(partitions: number) {
    return (histogram: Map<string, number>) => new Observable<WeightedKMeans>((subscriber) => {
        try {
            const population = histogramToWeightedRgbs(histogram);
            console.log(population.length);
            let palette = generateRandomPoints({ "length": partitions })
                .sort(pointSort());
            subscriber.next({ progress: 0, partitions, complete: false, palette });
            let targets: Palette = [];
            const populations = batchArray(batchSize)(population);
            const kMeanCycle = () => {
                const times = stopwatch();
                targets = palette;
                const paletteMap = memoize(closestValue(targets, euclideanDistance));
                const subPalettes = populations
                    .map((pop) => {
                        return new Promise<WeightedRGB[][]>((resolve, reject) => {
                            setTimeout(() => resolve(pop.reduce(
                                (acc, point) => {
                                    acc[paletteMap(point.value)].push(point);
                                    return acc;
                                },
                                Array.from({ "length": partitions }).map(() => []) as WeightedRGB[][]
                            )), 0);
                        });
                    });
                times.lap("subPalettes");
                Promise.all(subPalettes).then((palettes) => {
                    times.lap("subPalettes done");
                    const tempPalette = dotReduce<WeightedRGB[]>((a, b) => a.concat(b))(palettes);
                    times.lap("tempPalette");
                    const otherPalette = tempPalette
                        .map(weightedAveragePixel);
                    times.lap("otherPalette");
                    palette = otherPalette
                        .sort(pointSort());
                    times.lap("palette");
                    const progress = targets
                        .filter((target, index) => target.toString() === palette[index].toString())
                        .length;
                    times.lap("progress");
                    console.log(times.durations);
                    subscriber.next({ progress, partitions, complete: false, palette });
                    if (progress === partitions) {
                        subscriber.next({ progress: partitions, partitions, complete: true, palette });
                        subscriber.complete();
                    } else {
                        setTimeout(kMeanCycle, 0);
                    }
                });

            };
            kMeanCycle();
        } catch (e) {
            subscriber.error(e);
            subscriber.complete();
        }
    });
}
