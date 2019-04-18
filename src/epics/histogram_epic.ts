
import { Epic } from "redux-observable";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { filter, map, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import * as Actions from "../actions";
import { of } from "rxjs";
import { pixelize } from "../services/pixelize";
import { setSourceHistogram } from "../actions/source_actions";
import { getHistogram } from "../services/get_histogram";

export const histogramEpic: Epic<Action, Action, AppState> = (actions, state) => actions.pipe(
    filter(isActionOf(Actions.setSourceContents)),
    map(({ payload }) => payload.data.reduce(pixelize(), [])),
    map(getHistogram),
    switchMap((histogram) => of(setSourceHistogram(histogram))),
);
