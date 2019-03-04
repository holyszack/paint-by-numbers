import { AppState } from "../types/app_state";
import { initialImage } from "./initial_image";

export const initialState: AppState = {
    "busy": true,
    "messages": [],
    "paletteSize": 24,
    "source": initialImage,
    "target": initialImage,
};
