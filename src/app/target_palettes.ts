import { merge } from "rxjs";
import { map, share } from "rxjs/operators";
import { hsvToRgb } from "../services/hsv_to_rgb";
import { observableFactory } from "../services/observable_factory";
import { exists } from "../services/operators/exists";
import { log } from "../services/operators/log";
import { rgbToHsv } from "../services/rgb_to_hsv";
import { RGB } from "../types/rgb";
import { sourcePalette$ } from "./source_palettes";

const [directPalette$, setTargetPalette] = observableFactory<RGB[]>();

export { setTargetPalette };

export const targetPalette$ = merge(
    directPalette$.pipe(exists()),
    sourcePalette$.pipe(
        map((sourcePalette) => sourcePalette
            .map(rgbToHsv)
            .map(hsvToRgb) as RGB[]
        ),
    ),
).pipe(
    log("targetPalette"),
    share(),
);
