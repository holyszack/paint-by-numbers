import { averagePixel } from "./average_pixel";
import { findClosestPixelId } from "./find_closest_pixel_id";
import { generateRandomPoints } from "./generate_random_points";
import { pointSort } from "./point_sort";
import { RGB } from "../types/rgb";

export const kMeans = (population: RGB[], partitions: number) => {

    let palette = generateRandomPoints({ "numberOfPoints": partitions })
        .sort(pointSort);
    let targets: RGB[];
    do {
        targets = palette;
        palette = population
            .reduce(
                (acc, point) => {
                    acc[findClosestPixelId(targets)(point)].push(point);
                    return acc;
                },
                Array(partitions).fill(0).map(() => []) as RGB[][]
            )
            .map(averagePixel)
            .sort(pointSort);

    } while (targets.toString() !== palette.toString());
    return targets;
};
export default kMeans;
