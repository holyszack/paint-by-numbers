import { map } from "rxjs/operators";
import { stringify } from "../services/array/stringify";
import { getHistogram } from "../services/get_histogram";
import { sourceRgb$ } from "./source_rgbs";

export const sourceHistogram$ = sourceRgb$.pipe(
    map((input) => input.map(stringify)),
    map(getHistogram),
);
