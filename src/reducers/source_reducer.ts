import { getType } from "typesafe-actions";
import { Action } from "../types/action";
import {
    setSourcePath,
    setSourcePreviewUrl,
    setSourceHistogram,
    setSourceContents,
    setSourcePalette,
    setSourceProgress,
} from "../actions";
import { initialImage } from "./initial_image";
import { Image } from "../types/image";

export const sourceReducer = (state: Image = initialImage, action: Action): Image => {
    switch (action.type) {
        case getType(setSourcePath):
            return { ...state, "path": action.payload.path };
        case getType(setSourcePreviewUrl):
            return { ...state, "previewUrl": action.payload.url };
        case getType(setSourceContents):
            return { ...state, "contents": action.payload };
        case getType(setSourceHistogram):
            return { ...state, "histogram": action.payload.histogram };
        case getType(setSourcePalette):
            return {
                ...state,
                "palette": action.payload.palette,
                "progress": undefined,
            };
        case getType(setSourceProgress):
            return action.payload.percent > (state.progress || -1)
                ? { ...state, progress: action.payload.percent }
                : state;
        default:
            return state;
    }
};
