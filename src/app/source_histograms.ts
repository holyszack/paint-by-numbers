import { sourceRgb$ } from "./source_rgbs";
import { map } from "rxjs/operators";
import { getHistogram } from "../services/get_histogram";

export const sourceHistogram$ = sourceRgb$.pipe(
    map(getHistogram),
    map((hsls) => hsls.reduce((histogram, pixel) => {
        histogram.set(pixel, (histogram.get(pixel) || 0) + 1);
        return histogram;
    },
        new Map<string, number>(),
    )),
);
