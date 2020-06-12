import { sourceRgb$ } from "./source_rgbs";
import { map } from "rxjs/operators";
import { getHSLKeys } from "../services/get_hsl_keys";
import { getHistogram } from "../services/get_histogram";
import { pipe } from "../services/pipe";

export const sourceHistogram$ = sourceRgb$.pipe(
    map(pipe(getHSLKeys, getHistogram)),
);
