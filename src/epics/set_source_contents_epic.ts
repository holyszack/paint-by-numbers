
import { Epic } from "redux-observable";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { filter, map, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { pixelize } from "../services/pixelize";
import { setSourceHistogram, setSourcePixels, setSourceContents } from "../actions";
import { merge, of } from "rxjs";
import { rgbToHsl } from "../services/rgb_to_hsl";
import { arrayKeyNormalizer } from "../services/array_key_normalizer";
import { mapCounter } from "../reducers/map_counter";

export const setSourceContentsEpic: Epic<Action, Action, AppState> = (actions) => actions.pipe(
    filter(isActionOf(setSourceContents)),
    map(({ payload }) => payload.data.reduce(pixelize(), [])),
    map((pixels) => pixels.map(rgbToHsl)),
    switchMap((pixels) => merge(
        of(setSourcePixels(pixels)),
        of(pixels).pipe(
            map((pixels) => pixels
                .map(arrayKeyNormalizer)
                .reduce(mapCounter, new Map<string, number>())
            ),
            map(setSourceHistogram),
        ),
    )),
);
