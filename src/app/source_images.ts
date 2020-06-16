import { switchMap } from "rxjs/operators";
import { readFile } from "../services/read_file";
import { readImage } from "../services/read_image";
import { sourceFile$ } from "./source_files";

export const sourceImage$ = sourceFile$.pipe(
    switchMap(readFile),
    switchMap(readImage),
);
