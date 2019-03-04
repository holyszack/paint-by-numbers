import { getType } from "typesafe-actions";
import { Action } from "../types/action";
import { setTargetPreviewUrl, setTargetContents, setTargetPalette, setTargetPaletteItem } from "../actions";
import { initialImage } from "./initial_image";
import { Image } from "../types/image";

export const targetReducer = (state: Image = initialImage, action: Action): Image => {
    switch (action.type) {
        case getType(setTargetPreviewUrl):
            return { ...state, previewUrl: action.payload.url };
        case getType(setTargetContents):
            return { ...state, contents: action.payload.png };
        case getType(setTargetPalette):
            return { ...state, palette: action.payload.palette };
        case getType(setTargetPaletteItem):
            const palette = [...state.palette];
            palette[action.payload.index] = action.payload.item;
            return { ...state, palette };
        default:
            return state;
    }
}
