import { RGB } from "../types/rgb";

export function euclideanDistance(origin: RGB, target: RGB): number {
    return Math.sqrt(origin
        .map((value, index) => (target[index] - origin[index]) ** 2)
        .reduce((acc, value) => acc + value));
};
