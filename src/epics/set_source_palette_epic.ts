
import { Epic } from "redux-observable";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { filter, map } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { setSourcePalette, setTargetPalette } from "../actions";


export const setSourcePaletteEpic: Epic<Action, Action, AppState> = (actions) => actions.pipe(
    filter(isActionOf(setSourcePalette)),
    map(({ payload }) => payload.palette),
    map(setTargetPalette)
);
