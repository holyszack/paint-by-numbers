import { createAction } from "typesafe-actions";
import { Actions } from "../types/actions";
import { Palette } from "../types/palette";
import { RGB } from "../types/rgb";
import { PNG } from "pngjs";

export const setSourcePath = createAction(Actions.setSourcePath, resolve =>
    (path: string) => resolve({ path }));
export const setSourcePalette = createAction(Actions.setSourcePalette, resolve =>
    (palette: Palette) => resolve({ palette }));
export const setSourcePreviewUrl = createAction(Actions.setSourcePreviewUrl, resolve =>
    (url: string) => resolve({ url }));
export const setSourcePaletteItem = createAction(Actions.setSourcePaletteItem, resolve =>
    (index: number, item: RGB) => resolve({ index, item }));
export const setSourceContents = createAction(Actions.setSourceContents, resolve =>
    (png: PNG) => resolve({ png }));
