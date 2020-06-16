import { RGB } from "../types/rgb";
import { randomPointFactory } from "./random_point_factory";

export function generateRandomPoints({
    length,
    genPixel = randomPointFactory,
}: {
    length: number;
    genPixel?: () => RGB;
}) {
    return Array.from({ length }).map(() => genPixel());
};
