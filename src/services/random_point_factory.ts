import { RGB } from "../types/rgb";
import { getRandom } from "./get_random";

export function randomPointFactory({
    dimensions = [[0, 360], [0, 100], [0, 100]],
}: {
    "dimensions"?: [[number, number], [number, number], [number, number]];
} = {}) {
    return dimensions.map(getRandom) as RGB;
}

export default randomPointFactory;
