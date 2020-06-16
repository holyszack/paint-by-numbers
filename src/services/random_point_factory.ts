import { RGB } from "../types/rgb";
import { getRandom } from "./get_random";

export function randomPointFactory({
    dimensions = [[0, 255], [0, 255], [0, 255]],
}: {
    "dimensions"?: [[number, number], [number, number], [number, number]];
} = {}) {
    return dimensions.map(getRandom) as RGB;
}
