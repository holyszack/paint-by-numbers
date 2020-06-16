import { map, share } from "rxjs/operators";
import { pngToRgbArray } from "../services/png_to_rgb_array";
import { sourceImage$ } from "./source_images";

export const sourceRgb$ = sourceImage$.pipe(
    map(pngToRgbArray),
    share(),
);
