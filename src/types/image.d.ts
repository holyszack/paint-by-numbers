import { PNG } from "pngjs";
import { Palette } from "./palette";

export type Image = {
    "contents"?: {
        "data": Buffer,
        "height": number,
        "width": number,
    },
    "histogram"?: Map<string, number>,
    "palette": Palette,
    "path": string,
    "previewUrl"?: string,
};
