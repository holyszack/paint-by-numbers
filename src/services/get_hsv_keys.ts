import { pipe } from "rxjs";
import { roundValuesDown } from "./array/round_values_down";
import { stringify } from "./array/stringify";
import { rgbToHsv } from "./rgb_to_hsv";

export function getHSVKeys(pixels: number[][]) {
    return pixels
        .map(pipe(
            rgbToHsv,
            roundValuesDown,
            stringify,
        ));
}
