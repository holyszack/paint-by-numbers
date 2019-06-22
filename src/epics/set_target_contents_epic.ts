import { Observable, combineLatest } from "rxjs";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { setTargetContents, setTargetPalette, setSourceHistogram, setSourceContents } from "../actions";
import { isActionOf } from "typesafe-actions";
import { filter, map } from "rxjs/operators";
import { generateImageFromPalette } from "../services/generate_image_from_palette";

export function setTargetContentsEpic(actions: Observable<Action>, states: Observable<AppState>): Observable<Action> {
    return combineLatest([
        actions.pipe(filter(isActionOf(setTargetPalette))),
        actions.pipe(filter(isActionOf(setSourceContents))),
        actions.pipe(filter(isActionOf(setSourceHistogram))),
    ]).pipe(
        map(([{payload: {palette}}, {payload: {data, width, height}}, {payload: {histogram}}]) =>
            setTargetContents({ "data": generateImageFromPalette(palette, data, histogram),  height, width })),
    );
}
