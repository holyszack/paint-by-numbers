
import { switchMap, withLatestFrom, map } from "rxjs/operators";
import { createUrlFromImageContents } from "../services/create_url_from_image_contents";
import { sourceImage$ } from "./source_images";
import { targetRgbs$ } from "./target_rgbs";
import { log } from "../services/operators/log";

export const targetPreviewUrl$ = targetRgbs$.pipe(
    map((targetRgbs) => Buffer.from(targetRgbs.flat())),
    log("targetBuffer"),
    withLatestFrom(sourceImage$),
    switchMap(([data, { height, width }]) =>
        createUrlFromImageContents({ data, height, width })
    ),
);
