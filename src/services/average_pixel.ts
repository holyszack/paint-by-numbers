import { randomPointFactory } from "./random_point_factory";
import { RGB } from "../types/rgb";

export function averagePixel(pixels: RGB[]): RGB {
    return pixels.length
        ? pixels.reduce(
            (avg: number[], pixel) => avg.map((value, index) => value + pixel[index]),
            Array(4).fill(0) as RGB,
        ).map((value) => Math.floor(value / pixels.length)) as RGB
        : randomPointFactory({ "dimensions": [[0, 255], [0, 255], [0, 255]] });
};
