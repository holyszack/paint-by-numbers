import { euclideanDistance } from "./euclidean_distance";
import { RGB } from "../types/rgb";

export function findClosestPixelId(pixels: RGB[]) {
    return (target: RGB): number => pixels
        .map((item) => euclideanDistance(item, target))
        .reduce(
            (bestMatch, distance, index) => ((bestMatch.value === -1) || (bestMatch.distance > distance))
                ? { distance, "value": index }
                : bestMatch,
            { "distance": 10000000, "value": -1 }
        ).value;
};
export default findClosestPixelId;
