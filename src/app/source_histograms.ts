import { pipe } from "rxjs";
import { map } from "rxjs/operators";
import { getHistogram } from "../services/get_histogram";
import { getHSLKeys } from "../services/get_hsl_keys";
import { sourceRgb$ } from "./source_rgbs";

export const sourceHistogram$ = sourceRgb$.pipe(
    map(pipe(getHSLKeys, getHistogram)),
);
