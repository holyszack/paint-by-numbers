import { sourceFile$ } from "./source_files";
import { map } from "rxjs/operators";

export const sourceFilename$ = sourceFile$.pipe(
    map((file) => file?.name),
);
