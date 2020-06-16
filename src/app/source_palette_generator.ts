import { combineLatest, iif, of } from "rxjs";
import { last, map, switchMap, tap } from "rxjs/operators";
import { asyncWeightedKMeans } from "../services/async_weighted_k_means";
import { RGB } from "../types/rgb";
import { setPaletteGenerationProgress } from "./palette_generation_progress";
import { paletteSize$ } from "./palette_size";
import { sourceHistogram$ } from "./source_histograms";

export const sourcePaletteGenerator$ = combineLatest(paletteSize$, sourceHistogram$).pipe(
    switchMap(([paletteSize, histogram]) => iif(
        () => histogram.size <= paletteSize,
        of(Array.from(histogram)
            .map(([key]) =>
                key.split(",")
                    .map((item) => parseInt(item, 10))
            ) as RGB[]),
        asyncWeightedKMeans(paletteSize)(histogram).pipe(
            tap((palette) => setPaletteGenerationProgress(100 * (palette.progress / paletteSize))),
            last(),
            tap(() => setPaletteGenerationProgress(undefined as unknown as number)),
            map(({ palette }) => palette),
        ),
    )),
);
