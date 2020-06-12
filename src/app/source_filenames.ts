import { getProperty } from "../services/operators/get_property";
import { sourceFile$ } from "./source_files";

export const sourceFilename$ = sourceFile$.pipe(
    getProperty("name"),
);
