
import { rgbToHsl } from "../services/rgb_to_hsl";
import { Epic } from "redux-observable";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { filter, map, merge, mergeMap, bufferCount, concatAll, switchMap, reduce } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import * as Actions from "../actions";
import { of, from } from "rxjs";
import { concatToArray } from "../reducers/concatToArray";
import { pixelize } from "../services/pixelize";

export const paletteEpic: Epic<Action, Action, AppState> = (actions, state) => actions.pipe(
    filter(isActionOf(Actions.setSourceContents)),
    map(({payload}) => payload.png.data.reduce(pixelize, [])),
    switchMap((pixels) => of(Actions.sendMessage(JSON.stringify(pixels.slice(0, 10)))))
);
