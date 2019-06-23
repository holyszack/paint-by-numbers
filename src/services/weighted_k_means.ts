import { findClosestPixelId } from "./find_closest_pixel_id";
import { generateRandomPoints } from "./generate_random_points";
import { pointSort } from "./point_sort";
import { WeightedRGB } from "../types/weighted_rgb";
import { Palette } from "../types/palette";
import { weightedAveragePixel } from "./weighted_average_pixel";
import { Observable } from "rxjs";
import { RGB } from "../types/rgb";
import { memoize } from "./memoize";

export type WeightedKMeans = {
    "progress": number;
    "partitions": number;
    "complete": boolean;
    "palette": RGB[];
    "paletteMap": (args: [number, number, number]) => number;
}

export function weightedKMeans(partitions: number) {
    return (population: WeightedRGB[]) => new Observable<WeightedKMeans>((subscriber) => {
        try {

            let palette = generateRandomPoints({ "numberOfPoints": partitions })
                .sort(pointSort);
            subscriber.next({ progress: 0, partitions, complete: false, palette, paletteMap: () => -1 });
            let targets: Palette = [];
            const kMeanCycle = () => {
                targets = palette;
                const paletteMap = memoize(findClosestPixelId(targets));
                palette = population
                    .reduce(
                        (acc, point) => {
                            acc[paletteMap(point.value)].push(point);
                            return acc;
                        },
                        Array(partitions).fill(0).map(() => []) as WeightedRGB[][]
                    )
                    .map(weightedAveragePixel)
                    .sort(pointSort);

                const progress = targets.filter((target, index) => target.toString() === palette[index].toString()).length;
                const complete = progress === partitions;
                subscriber.next({ progress, partitions, complete, palette, paletteMap });
                if (complete) {
                    subscriber.complete();
                } else {
                    setTimeout(kMeanCycle, 0);
                }
            }
            kMeanCycle();
        } catch (e) {
            subscriber.error(e);
            subscriber.complete();
        }
    });
}
export default weightedKMeans;
