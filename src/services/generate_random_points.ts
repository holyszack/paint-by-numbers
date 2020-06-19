import { RGB } from "../types/rgb";
import { randomPointFactory } from "./random_point_factory";

export function generateRandomPoints({
    dimensions = [[0, 255], [0, 255], [0, 255]],
    length,
    genPixel = randomPointFactory,
}: {
    "dimensions"?: [[number, number], [number, number], [number, number]];
    "length": number;
    "genPixel"?: (input: {
        "dimensions"?: [[number, number], [number, number], [number, number]];
    }) => RGB;
}) {
    return Array.from({ length }).map(() => genPixel({ dimensions }));
};
