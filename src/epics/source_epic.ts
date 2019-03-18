import { switchMap, tap, filter, map } from "rxjs/operators";
import { merge } from "rxjs";
import { Epic } from "redux-observable";
import { AppState } from "../types/app_state";
import { Action } from "../types/action";
import * as Actions from "../actions";
import { of } from "rxjs";
import { isActionOf } from "typesafe-actions";
import { readFile } from "../services/read_file";
import { readImage } from "../services/read_image";

const log = tap(console.log);

export const sourceEpic: Epic<Action, Action, AppState> = (actions, state) => actions.pipe(
    filter(isActionOf(Actions.setSourceFile)),
    log,
    switchMap(({ payload }) =>
        merge(
            of(
                Actions.sendMessage(payload.file.name),
                Actions.setSourcePath(payload.file.name),
                Actions.setSourcePreviewUrl(URL.createObjectURL(payload.file)),
            ),
            readFile(payload.file).pipe(
                switchMap(readImage),
                map(Actions.setSourceContents),
            ),
        )
    )
);
