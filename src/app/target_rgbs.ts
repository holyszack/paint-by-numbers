import { combineLatest } from "rxjs";
import { map, share } from "rxjs/operators";
import { log } from "../services/operators/log";
import { sourcePaletteMap$ } from "./source_palette_maps";
import { sourceRgb$ } from "./source_rgbs";
import { targetPalette$ } from "./target_palettes";

export const targetRgbs$ = combineLatest(sourceRgb$, sourcePaletteMap$, targetPalette$).pipe(
    map(([sourceRgbs, sourcePaletteMap, targetPalette]) => sourceRgbs
        .map((sourceRgb) => targetPalette[sourcePaletteMap.get(sourceRgb.join()) || 0].concat(255))
    ),
    log("targetRgbs"),
    share(),
);
