import { pipe } from "rxjs";
import { roundValuesDown } from "./array/round_values_down";
import { stringify } from "./array/stringify";
import { rgbToHsl } from "./rgb_to_hsl";

export function getHSLKeys(pixels: number[][]) {
    return pixels
        .map(pipe(
            rgbToHsl,
            roundValuesDown,
            stringify,
        ));
}
 