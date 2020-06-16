
import { combineLatest } from "rxjs";
import { share, switchMap } from "rxjs/operators";
import { createUrlFromImageContents } from "../services/create_url_from_image_contents";
import { log } from "../services/operators/log";
import { sourceImage$ } from "./source_images";
import { targetOutputBuffer$ } from "./target_output_buffer";

export const targetPreviewUrl$ = combineLatest(
    targetOutputBuffer$,
    sourceImage$,
).pipe(
    switchMap(([data, { height, width }]) => createUrlFromImageContents({ data, height, width })),
    log("targetUrl"),
    share(),
);
