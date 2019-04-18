import { switchMap, tap, filter, map } from "rxjs/operators";
import { merge, Observable } from "rxjs";
import { Action } from "../types/action";
import {
    sendMessage,
    setSourceContents,
    setSourceFile,
    setSourcePath,
    setSourcePreviewUrl,
} from "../actions";
import { of } from "rxjs";
import { isActionOf } from "typesafe-actions";
import { readFile } from "../services/read_file";
import { readImage } from "../services/read_image";
import { createObjectUrl } from "../services/create_object_url";

// const log = tap(console.log);

export function sourceEpic(actions: Observable<Action>): Observable<Action> {
    return actions.pipe(
        filter(isActionOf(setSourceFile)),
        filter(({payload}) => Boolean(payload.file)),
        // log,
        switchMap(({ payload }) =>
            merge(
                of(
                    sendMessage(payload.file.name),
                    setSourcePath(payload.file.name),
                    setSourcePreviewUrl(createObjectUrl(payload.file)),
                ),
                readFile(payload.file).pipe(
                    // log,
                    switchMap(readImage),
                    map((png) => setSourceContents(png)),
                ),
            )
        )
    );
}
