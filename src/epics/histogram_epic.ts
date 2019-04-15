
import { rgbToHsl } from "../services/rgb_to_hsl";
import { Epic } from "redux-observable";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { filter, map, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import * as Actions from "../actions";
import { of } from "rxjs";
import { pixelize } from "../services/pixelize";
import { mapCounter } from "../reducers/map_counter";
import { setSourceHistogram } from "../actions/source_actions";
import { cachingTransformer } from "../services/caching_transformer";
import { arrayKeyNormalizer } from "../services/array_key_normalizer";

export const histogramEpic: Epic<Action, Action, AppState> = (actions, state) => actions.pipe(
    filter(isActionOf(Actions.setSourceContents)),
    map(({ payload }) => payload.data.reduce(pixelize(), [])),
    map((pixels: number[][]) => pixels
        .map(cachingTransformer<number[], string, number[]>({ "transformer": rgbToHsl, "normalizer": arrayKeyNormalizer }))
        .map(arrayKeyNormalizer)
        .reduce(mapCounter, new Map<string, number>())
    ),
    switchMap((histogram) => of(setSourceHistogram(histogram))),
);
