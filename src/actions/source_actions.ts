import { createAction } from "typesafe-actions";
import { Actions } from "../types/actions";
import { Palette } from "../types/palette";
import { RGB } from "../types/rgb";
import { PNG } from "pngjs";

export const setSourceFile = createAction(Actions.setSourceFile, resolve =>
    (file: File) => resolve({ file }));
export const setSourcePath = createAction(Actions.setSourcePath, resolve =>
    (path: string) => resolve({ path }));
export const setSourcePalette = createAction(Actions.setSourcePalette, resolve =>
    (palette: Palette) => resolve({ palette }));
export const setSourcePreviewUrl = createAction(Actions.setSourcePreviewUrl, resolve =>
    (url: string) => resolve({ url }));
export const setSourcePaletteItem = createAction(Actions.setSourcePaletteItem, resolve =>
    (index: number, item: RGB) => resolve({ index, item }));
export const setSourceContents = createAction(Actions.setSourceContents, resolve =>
    ({ data, height, width }: PNG) => resolve({ data, height, width }));
export const setSourceHistogram = createAction(Actions.setSourceHistogram, resolve =>
    (histogram: Map<string, number>) => resolve({ histogram }));
export const setSourceProgress = createAction(Actions.setSourceProgress, resolve =>
    (percent: number) => resolve({ percent }));
