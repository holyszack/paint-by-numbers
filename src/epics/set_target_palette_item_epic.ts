import { Observable } from "rxjs";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { setTargetPalette, setTargetPaletteItem } from "../actions";
import { filter, withLatestFrom, map } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";

export function setTargetPaletteItemEpic(
    actions: Observable<Action>,
    states: Observable<AppState>,
): Observable<Action> {
    return actions.pipe(
        filter(isActionOf(setTargetPaletteItem)),
        withLatestFrom(states),
        map(([action, state]) => {
            const palette = [...state.target.palette];
            palette[action.payload.index] = action.payload.item;
            return setTargetPalette(palette);
        }),
    );
}