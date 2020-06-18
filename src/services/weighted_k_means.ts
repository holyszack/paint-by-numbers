import { Observable } from "rxjs";
import { Palette } from "../types/palette";
import { RGB } from "../types/rgb";
import { WeightedRGB } from "../types/weighted_rgb";
import { closestValue } from "./closest_value";
import { euclideanDistance } from "./euclidean_distance";
import { generateRandomPoints } from "./generate_random_points";
import { histogramToWeightedRgbs } from "./histogram_to_weighted_rgbs";
import { memoize } from "./memoize";
import { pointSort } from "./point_sort";
import { weightedAveragePixel } from "./weighted_average_pixel";

export type WeightedKMeans = {
    "progress": number;
    "partitions": number;
    "complete": boolean;
    "palette": RGB[];
    "paletteMap": (args: [number, number, number]) => number;
}

export function weightedKMeans(partitions: number) {
    return (histogram: Map<string, number>) => new Observable<WeightedKMeans>((subscriber) => {
        try {
            const population = histogramToWeightedRgbs(histogram);
            let palette = generateRandomPoints({ "length": partitions })
                .sort(pointSort());
            subscriber.next({ progress: 0, partitions, complete: false, palette, paletteMap: () => -1 });
            let targets: Palette = [];
            const kMeanCycle = () => {
                targets = palette;
                const paletteMap = memoize(closestValue(targets, euclideanDistance));
                const newPalette = population
                    .reduce(
                        (acc, point) => {
                            acc[paletteMap(point.value)].push(point);
                            return acc;
                        },
                        Array.from({ "length": partitions }).map(() => [] as WeightedRGB[]),
                    )
                    .filter((item) => item.length)
                    .map(weightedAveragePixel);
                palette = newPalette
                    .concat(generateRandomPoints({ "length": partitions - newPalette.length }))
                    .sort(pointSort());

                const progress = targets
                    .filter((target, index) => target.toString() === palette[index].toString())
                    .length;
                const complete = progress === partitions;
                subscriber.next({ progress, partitions, complete, palette, paletteMap });
                if (complete) {
                    subscriber.complete();
                } else {
                    setTimeout(kMeanCycle, 0);
                }
            };
            kMeanCycle();
        } catch (e) {
            subscriber.error(e);
            subscriber.complete();
        }
    });
}
