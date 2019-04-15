
import { Epic } from "redux-observable";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { filter, map, switchMap, take } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import * as Actions from "../actions";
import { of, from, merge } from "rxjs";
import { sendMessage } from "../actions";

export const paletteEpic: Epic<Action, Action, AppState> = (actions, state) => actions.pipe(
    filter(isActionOf(Actions.setSourceHistogram)),
    map(({ payload }) => payload.histogram),
    switchMap((histogram) => merge(
        from(histogram.entries()).pipe(
            map((item) => sendMessage(item.toString())),
            take(10),
        ),
        of(sendMessage(`done: ${Date.now()}`)),
    )),
);
