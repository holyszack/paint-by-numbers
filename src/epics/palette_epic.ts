
import { Epic } from "redux-observable";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { filter, map, switchMap, withLatestFrom, tap, mergeMap, switchMapTo, concatMap, debounce, debounceTime } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { of, from, merge } from "rxjs";
import { sendMessage, setSourcePalette, setSourceProgress, setSourceHistogram } from "../actions";
import { getWeightedRgbsFromHistogram } from "../services/get_weighted_rgbs_from_histogram";
import weightedKMeans from "../services/weighted_k_means";

export const paletteEpic: Epic<Action, Action, AppState> = (actions, state) => actions.pipe(
    filter(isActionOf(setSourceHistogram)),
    map(({ payload }) => payload.histogram),
    map(getWeightedRgbsFromHistogram),
    // map((a) => a),
    switchMap(weightedKMeans(state.value.paletteSize)),
    concatMap(({ progress, complete, partitions, palette }) => palette && complete
        ? of(
            setSourcePalette(palette),
            sendMessage(palette.toString()),
        )
        : of(
            setSourceProgress(progress * 100 / partitions),
        )
    ),
);
