import { combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { closestValue } from "../services/closest_value";
import { euclideanDistance } from "../services/euclidean_distance";
import { exists } from "../services/operators/exists";
import { sourceHistogram$ } from "./source_histograms";
import { sourcePalette$ } from "./source_palettes";
import { RGB } from "../types/rgb";

export const sourcePaletteMap$ = combineLatest(sourcePalette$.pipe(exists()), sourceHistogram$).pipe(
    map(([sourcePalette, sourceHistogram]) => {
        const sourcePaletteMap = new Map<string, number>();
        const closestPixel = closestValue(sourcePalette, euclideanDistance);
        Array.from(sourceHistogram.keys()).forEach((color) => {
            sourcePaletteMap.set(color, closestPixel(color.split(",").map((i) => parseInt(i, 10)) as RGB));
        });
        return sourcePaletteMap;
    }),
);
