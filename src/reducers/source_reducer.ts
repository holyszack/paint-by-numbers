import { getType } from "typesafe-actions";
import { Action } from "../types/action";
import { setSourcePath, setSourcePreviewUrl, setSourceContents, setSourcePalette, setSourcePaletteItem } from "../actions";
import { initialImage } from "./initial_image";
import { Image } from "../types/image";

export const sourceReducer = (state: Image = initialImage, action: Action): Image => {
    switch (action.type) {
        case getType(setSourcePath):
            return { ...state, path: action.payload.path };
        case getType(setSourcePreviewUrl):
            return { ...state, previewUrl: action.payload.url };
        case getType(setSourceContents):
            return { ...state, contents: action.payload.png };
        case getType(setSourcePalette):
            return { ...state, palette: action.payload.palette };
        case getType(setSourcePaletteItem):
            const palette = [...state.palette];
            palette[action.payload.index] = action.payload.item;
            return { ...state, palette };
        default:
            return state;
    }
}
