import { combineLatest } from "rxjs";
import { map, tap } from "rxjs/operators";
import { RGB } from "../types/rgb";
import { sendMessage } from "./messages";
import { paletteSize$ } from "./palette_size";
import { sourceHistogram$ } from "./source_histograms";

export const sourcePalette$ = combineLatest(paletteSize$, sourceHistogram$).pipe(
    tap(sendMessage),
    map(([paletteSize, histogram]) => Array.from(histogram)
        .map(([key]) =>
            key.split(",")
                .map((item) => parseInt(item, 10))
        ) as RGB[]),
    tap(sendMessage),
);
