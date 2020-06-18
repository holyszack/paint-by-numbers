import { combineLatest } from "rxjs";
import { map, share } from "rxjs/operators";
import { log } from "../services/operators/log";
import { sourcePaletteIndexedRgb$ } from "./source_palette_indexed_rgbs";
import { targetPalette$ } from "./target_palettes";

export const targetRgbs$ = combineLatest(sourcePaletteIndexedRgb$, targetPalette$).pipe(
    map(([sourcePaletteIndexedRgbs, targetPalette]) => sourcePaletteIndexedRgbs
        .map((sourcePaletteIndexedRgb) => targetPalette[sourcePaletteIndexedRgb].concat(255))
    ),
    log("targetRgbs"),
    share(),
);
