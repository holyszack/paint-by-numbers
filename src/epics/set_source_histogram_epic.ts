
import { Epic } from "redux-observable";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { filter, map, switchMap, concatMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { of } from "rxjs";
import { sendMessage, setSourcePalette, setSourceProgress, setSourceHistogram, setSourcePaletteMap } from "../actions";
import { getWeightedRgbsFromHistogram } from "../services/get_weighted_rgbs_from_histogram";
import weightedKMeans from "../services/weighted_k_means";

export const setSourceHistogramEpic: Epic<Action, Action, AppState> = (actions, state) => actions.pipe(
    filter(isActionOf(setSourceHistogram)),
    map(({ payload }) => payload.histogram),
    map(getWeightedRgbsFromHistogram),
    switchMap(weightedKMeans(state.value.paletteSize)),
    concatMap(({ progress, complete, partitions, palette, paletteMap }) => palette && complete
        ? of(
            setSourcePaletteMap((color: [number, number, number]) => palette[paletteMap(color)]),
            setSourcePalette(palette),
            sendMessage(palette.toString()),
        )
        : of(
            setSourceProgress(progress * 100 / partitions),
        )
    ),
);
