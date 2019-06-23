import { arrayKeyNormalizer } from "./array_key_normalizer";
import { mapCounter } from "../reducers/map_counter";
import { rgbToHsl } from "./rgb_to_hsl";
import { memoize } from "./memoize";

export function getHistogram(pixels: number[][]) {
    return pixels
        .map(rgbToHsl)
        .map(arrayKeyNormalizer)
        .reduce(mapCounter, new Map<string, number>());
}
