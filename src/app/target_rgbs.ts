import { combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { sourcePaletteMap$ } from "./source_palette_maps";
import { sourceRgb$ } from "./source_rgbs";
import { targetPalette$ } from "./target_palettes";
import { exists } from "../services/operators/exists";
import { log } from "../services/operators/log";

export const targetRgbs$ = combineLatest(sourceRgb$, sourcePaletteMap$, targetPalette$.pipe(exists())).pipe(
    map(([sourceRgbs, sourcePaletteMap, targetPalette]) => sourceRgbs
        .map((sourceRgb) => targetPalette[sourcePaletteMap.get(sourceRgb.join()) || 0].concat(255))
    ),
    log("targetRgbs"),
);
