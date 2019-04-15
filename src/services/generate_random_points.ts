import { randomPointFactory } from "./random_point_factory";
import { RGB } from "../types/rgb";

export function generateRandomPoints({
    numberOfPoints,
    genPixel = randomPointFactory,
}: {
    numberOfPoints: number,
    genPixel?: () => RGB,
}) {
    return Array(numberOfPoints).fill(0).map((value) => genPixel());
};
export default generateRandomPoints;
