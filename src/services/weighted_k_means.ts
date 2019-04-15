import { findClosestPixelId } from "./find_closest_pixel_id";
import { generateRandomPoints } from "./generate_random_points";
import { pointSort } from "./point_sort";
import { WeightedRGB } from "../types/weighted_rgb";
import { Palette } from "../types/palette";
import { weightedAveragePixel } from "./weighted_average_pixel";

export const weightedKMeans = (partitions: number) => (population: WeightedRGB[]) => {

    let palette = generateRandomPoints({ "numberOfPoints": partitions })
        .sort(pointSort);
    let targets: Palette = [];
    const { log } = console;
    for (let i = 0; i < 10; i++) {
        // do {
        targets = palette;
        palette = population
            .reduce(
                (acc, point) => {
                    acc[findClosestPixelId(targets)(point.value)].push(point);
                    return acc;
                },
                Array(partitions).fill(0).map(() => []) as WeightedRGB[][]
            )
            .map(weightedAveragePixel)
            .sort(pointSort);
        log(`%c PALETTE: ${i}`, `font-size: 30px`);
        palette.forEach((pixel) => {
            log(`%c ${pixel}`, `color:hsl(${pixel[0]}, ${pixel[1]}%, ${pixel[2]}%)`);
        });
    }
    // } while (targets.toString() !== palette.toString());
    
    return palette;
};
export default weightedKMeans;
