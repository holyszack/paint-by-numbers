import { Observable } from "rxjs";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { setSourcePaletteItem, setSourcePalette } from "../actions";
import { filter, withLatestFrom, map } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";

export function setSourcePaletteItemEpic(actions: Observable<Action>, states: Observable<AppState>): Observable<Action> {
    return actions.pipe(
        filter(isActionOf(setSourcePaletteItem)),
        withLatestFrom(states),
        map(([action, state]) => {
            const palette = [...state.source.palette];
            palette[action.payload.index] = action.payload.item;
            return setSourcePalette(palette);
        }),
    );
}