import { map, switchMap } from "rxjs/operators";
import { pngToRgbArray } from "../services/png_to_rgb_array";
import { readFile } from "../services/read_file";
import { readImage } from "../services/read_image";
import { sourceFile$ } from "./source_files";

export const sourceRgb$ = sourceFile$.pipe(
    switchMap(readFile),
    switchMap(readImage),
    map(pngToRgbArray),
);
