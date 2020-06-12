import { map } from "rxjs/operators";
import { createObjectUrl } from "../services/create_object_url";
import { sourceFile$ } from "./source_files";

export const sourcePreviewUrl$ = sourceFile$.pipe(
    map(createObjectUrl),
);
