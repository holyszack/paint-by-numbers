
import { Epic } from "redux-observable";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { filter, map, switchMap, withLatestFrom, tap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import * as Actions from "../actions";
import { of, from, merge } from "rxjs";
import { sendMessage, setSourcePalette } from "../actions";
import { getWeightedRgbsFromHistogram } from "./get_weighted_rgbs_from_histogram";
import weightedKMeans from "../services/weighted_k_means";

export const paletteEpic: Epic<Action, Action, AppState> = (actions, state) => actions.pipe(
    filter(isActionOf(Actions.setSourceHistogram)),
    map(({ payload }) => payload.histogram),
    map(getWeightedRgbsFromHistogram),
    // map((a) => a),
    map(weightedKMeans(state.value.paletteSize)),
    switchMap((palette) => of(
        setSourcePalette(palette),
        sendMessage(palette.toString()),
    )),
);
