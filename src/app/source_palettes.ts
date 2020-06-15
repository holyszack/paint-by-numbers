import { combineLatest, generate, iif, of } from "rxjs";
import { last, switchMap, tap } from "rxjs/operators";
import { RGB } from "../types/rgb";
import { sendMessage } from "./messages";
import { paletteSize$ } from "./palette_size";
import { sourceHistogram$ } from "./source_histograms";

export const sourcePalette$ = combineLatest(paletteSize$, sourceHistogram$).pipe(
    switchMap(([paletteSize, histogram]) => iif(
        () => histogram.size <= paletteSize,
        of(Array.from(histogram)
            .map(([key]) =>
                key.split(",")
                    .map((item) => parseInt(item, 10))
            ) as RGB[]),
        generate({
            "initialState": Array.from({ "length": paletteSize }).map((_, index) => [index, index, index] as RGB),
            "condition": (state) => state[0][0] < 3,
            "iterate": (state) => {
                state[0][0] = state[0][0] + 1;
                return state;
            },
        }).pipe(
            last(),
        ),
    )),
    tap(sendMessage),
);
