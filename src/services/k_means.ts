import { RGB } from "../types/rgb";
import { averagePixel } from "./average_pixel";
import { closestValue } from "./closest_value";
import { euclideanDistance } from "./euclidean_distance";
import { generateRandomPoints } from "./generate_random_points";
import { pointSort } from "./point_sort";
import { memoize } from "./memoize";

export const kMeans = (population: RGB[], partitions: number) => {
    let palette = generateRandomPoints({ "length": partitions })
        .sort(pointSort);
    let targets: RGB[];
    do {
        targets = palette;
        const closestPixel = memoize(closestValue(targets, euclideanDistance));
        const newPalette = population
            .reduce(
                (acc, point) => {
                    acc[closestPixel(point)].push(point);
                    return acc;
                },
                Array.from({ "length": partitions }).map(() => []) as RGB[][]
            )
            .filter((pixels) => pixels.length)
            .map(averagePixel);
        palette = newPalette
            .concat(generateRandomPoints({ "length": partitions - newPalette.length }))
            .sort(pointSort);

    } while (targets.toString() !== palette.toString());
    return targets;
};
