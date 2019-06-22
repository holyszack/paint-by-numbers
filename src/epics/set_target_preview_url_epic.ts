import { Observable } from "rxjs";
import { Action } from "../types/action";
import { AppState } from "../types/app_state";
import { setTargetContents, setTargetPreviewUrl } from "../actions";
import { isActionOf } from "typesafe-actions";
import { filter, map, switchMap } from "rxjs/operators";
import { generateImageFromPalette } from "../services/generate_image_from_palette";
import { createUrlFromImageContents } from "../services/create_url_from_image_contents";

export function setTargetPreviewUrlEpic(actions: Observable<Action>, states: Observable<AppState>): Observable<Action> {
    return actions.pipe(
        filter(isActionOf(setTargetContents)),
        map(({ payload }) => payload),
        switchMap(createUrlFromImageContents),
        map(setTargetPreviewUrl),
    );
}
