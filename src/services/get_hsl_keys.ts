import { roundValuesDown } from "./array/round_values_down";
import { pipe } from "./pipe";
import { rgbToHsl } from "./rgb_to_hsl";
import { stringify } from "./array/stringify";

export function getHSLKeys(pixels: number[][]) {
    return pixels
        .map(pipe(
            rgbToHsl,
            roundValuesDown,
            stringify,
        ));
}
