import { Observable, combineLatest } from "rxjs";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { setTargetContents, setTargetPalette, setSourceContents, setSourcePixels, setSourcePaletteMap, setSourcePalette } from "../actions";
import { isActionOf } from "typesafe-actions";
import { filter, map } from "rxjs/operators";
import { generateImageFromPalette } from "../services/generate_image_from_palette";

export function setTargetContentsEpic(actions: Observable<Action>, states: Observable<AppState>): Observable<Action> {
    return combineLatest([
        actions.pipe(filter(isActionOf(setSourcePalette))),
        actions.pipe(filter(isActionOf(setTargetPalette))),
        actions.pipe(filter(isActionOf(setSourceContents))),
        actions.pipe(filter(isActionOf(setSourcePaletteMap))),
        actions.pipe(filter(isActionOf(setSourcePixels))),
    ]).pipe(
        map(([
            {payload: {palette: sourcePalette}}, 
            {payload: {palette: targetPalette}}, 
            {payload: { width, height}}, 
            {payload: {paletteMap}},
            {payload: {pixels}}, 
        ]) =>
            setTargetContents({ "data": generateImageFromPalette(sourcePalette, targetPalette, pixels, paletteMap),  height, width })),
    );
}
