import { PNG } from "pngjs";
import { Palette } from "./palette";
import { Image } from "./image";

export type AppState = {
    "busy": boolean,
    "messages": string[],
    "paletteSize": number,
    "source": Image,
    "target": Image,
};
