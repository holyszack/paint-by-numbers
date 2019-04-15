import { createAction } from "typesafe-actions";
import { Actions } from "../types/actions";
import { Palette } from "../types/palette";
import { RGB } from "../types/rgb";
import { PNG } from "pngjs";

export const setTargetPalette = createAction(Actions.setTargetPalette, resolve =>
    (palette: Palette) => resolve({ palette }));
export const setTargetPreviewUrl = createAction(Actions.setTargetPreviewUrl, resolve =>
    (url: string) => resolve({ url }));
export const setTargetPaletteItem = createAction(Actions.setTargetPaletteItem, resolve =>
    (index: number, item: RGB) => resolve({ index, item }));
export const setTargetContents = createAction(Actions.setTargetContents, resolve =>
    ({ data, height, width }: PNG) => resolve({ data, height, width }));
