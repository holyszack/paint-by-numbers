import { PNG } from "pngjs";
import { Palette } from "./palette";

export type Image = {
    "contents"?: PNG,
    "palette": Palette,
    "path": string,
    "previewUrl"?: string,
};
