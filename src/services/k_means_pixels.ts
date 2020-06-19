import { RGB } from "../types/rgb";
import { averagePixel } from "./average_pixel";
import { euclideanDistance } from "./euclidean_distance";
import { kMeansGeneric } from "./k_means_generic";
import { pointSort } from "./point_sort";
import { randomPointFactory } from "./random_point_factory";

export const kMeansPixels = (
    population: RGB[],
    partitions: number,
    dimensions = [[0, 255], [0, 255], [0, 255]] as [[number, number], [number, number], [number, number]],
) => {
    return kMeansGeneric({
        partitions,
        population,
        "distance": euclideanDistance,
        "generateGuess": () => randomPointFactory({ dimensions }),
        "reducer": averagePixel,
        "resultsUnchanged": (targets, palette) => {
            return [...targets].sort(pointSort()).toString() === [...palette].sort(pointSort()).toString();
        },
    });
};
