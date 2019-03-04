import { switchMap, tap } from "rxjs/operators";
import { Epic, ofType } from "redux-observable";
import { AppState } from "../types/app_state";
import { Action } from "../types/action";
import * as Actions from "../actions";
import { of } from "rxjs";

const log = tap(console.log);

export const sourceEpic: Epic<Action, Action, AppState> = (actions, state) => actions.pipe(
    log,
    ofType(Actions.setSourcePath),
    log,
    switchMap(({ payload }) => of(Actions.sendMessage(payload.path)))
);
