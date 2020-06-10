import { arrayKeyNormalizer } from "./array_key_normalizer";
import { rgbToHsl } from "./rgb_to_hsl";

export function getHistogram(pixels: number[][]) {
    return pixels
        .map(rgbToHsl)
        .map(arrayKeyNormalizer);
}
