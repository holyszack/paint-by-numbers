import { findClosestPixelId } from "./find_closest_pixel_id";
import { generateRandomPoints } from "./generate_random_points";
import { pointSort } from "./point_sort";
import { WeightedRGB } from "../types/weighted_rgb";
import { Palette } from "../types/palette";
import { weightedAveragePixel } from "./weighted_average_pixel";
import { Observable } from "rxjs";
import { RGB } from "../types/rgb";
import { batchArray } from "./batch_array";
import { dotReduce } from "./dot_reduce";
import { stopwatch } from "./stopwatch";

export type WeightedKMeans = {
    "progress": number;
    "partitions": number;
    "complete": boolean;
    "palette"?: RGB[];
}
const batchSize = 2500;

export function asyncWeightedKMeans(partitions: number) {
    return (population: WeightedRGB[]) => new Observable<WeightedKMeans>((subscriber) => {
        try {
            console.log(population.length);
            subscriber.next({ progress: 0, partitions, complete: false });
            let palette = generateRandomPoints({ "numberOfPoints": partitions })
                .sort(pointSort);
            let targets: Palette = [];
            let populations = batchArray(batchSize)(population);
            const kMeanCycle = () => {
                const times = stopwatch();
                targets = palette;
                const subPalettes = populations
                    .map((pop) => {
                        return new Promise<WeightedRGB[][]>((resolve, reject) => {
                            setTimeout(() => resolve(pop.reduce(
                                (acc, point) => {
                                    acc[findClosestPixelId(targets)(point.value)].push(point);
                                    return acc;
                                },
                                Array(partitions).fill(0).map(() => []) as WeightedRGB[][]
                            )), 0);
                        });
                    });
                times.lap();
                Promise.all(subPalettes).then((palettes) => {
                    times.lap();
                    const tempPalette = dotReduce<WeightedRGB[]>((a, b) => a.concat(b))(palettes)
                    times.lap();
                    const otherPalette = tempPalette
                        .map(weightedAveragePixel)
                    times.lap();
                    palette = otherPalette
                        .sort(pointSort);
                    times.lap();
                    const progress = targets.filter((target, index) => target.toString() === palette[index].toString()).length;
                    times.lap();
                    console.log(times.durations);
                    subscriber.next({ progress, partitions, complete: false });
                    if (progress === partitions) {
                        subscriber.next({ progress: partitions, partitions, complete: true, palette });
                        subscriber.complete();
                    } else {
                        setTimeout(kMeanCycle, 0);
                    }
                })

            }
            kMeanCycle();
        } catch (e) {
            subscriber.error(e);
            subscriber.complete();
        }
    });
}
export default asyncWeightedKMeans;
