import { arrayKeyNormalizer } from "./array_key_normalizer";
import { mapCounter } from "../reducers/map_counter";
import { rgbToHsl } from "./rgb_to_hsl";
import { cachingTransformer } from "./caching_transformer";

export function getHistogram(pixels: number[][]) {
    return pixels
        .map(cachingTransformer<number[], string, number[]>({ "transformer": rgbToHsl, "normalizer": arrayKeyNormalizer }))
        .map(arrayKeyNormalizer)
        .reduce(mapCounter, new Map<string, number>());
}
