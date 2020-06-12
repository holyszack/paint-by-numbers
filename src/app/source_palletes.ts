import { sourceHistogram$ } from "./source_histograms";
import { map, tap } from "rxjs/operators";
import { RGB } from "../types/rgb";
import { sendMessage } from "./messages";

export const sourcePallete$ = sourceHistogram$.pipe(
    map((histogram) => Array.from(histogram)
        .map(([key]) =>
            key.split(",")
                .map((item) => parseInt(item, 10))
        ) as RGB[]),
    tap(sendMessage),
);
