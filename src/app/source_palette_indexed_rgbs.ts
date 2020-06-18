import { combineLatest } from "rxjs";
import { map, share } from "rxjs/operators";
import { log } from "../services/operators/log";
import { sourcePaletteMap$ } from "./source_palette_maps";
import { sourceRgb$ } from "./source_rgbs";

export const sourcePaletteIndexedRgb$ = combineLatest(sourceRgb$, sourcePaletteMap$).pipe(
    map(([sourceRgbs, sourcePaletteMap]) => sourceRgbs
        .map((sourceRgb) => sourcePaletteMap.get(sourceRgb.join()) || 0)
    ),
    log("sourcePaletteIndexedRgbs"),
    share(),
);
