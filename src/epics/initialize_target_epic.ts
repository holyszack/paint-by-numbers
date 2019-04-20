
import { Epic } from "redux-observable";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { filter, map, switchMap, concatMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { of } from "rxjs";
import { sendMessage, setSourcePalette, setSourceProgress, setSourceHistogram, setTargetPalette } from "../actions";
import { getWeightedRgbsFromHistogram } from "../services/get_weighted_rgbs_from_histogram";
import weightedKMeans from "../services/weighted_k_means";

export const initializeTargetEpic: Epic<Action, Action, AppState> = (actions, state) => actions.pipe(
    filter(isActionOf(setSourcePalette)),
    map(({ payload }) => payload.palette),
    switchMap((sourcePalette) => of(
        setTargetPalette(sourcePalette)
    ))
    // map(getWeightedRgbsFromHistogram),
    // switchMap(weightedKMeans(state.value.paletteSize)),
    // concatMap(({ progress, complete, partitions, palette }) => palette && complete
    //     ? of(
    //         setSourcePalette(palette),
    //         sendMessage(palette.toString()),
    //     )
    //     : of(
    //         setSourceProgress(progress * 100 / partitions),
    //     )
    // ),
);
