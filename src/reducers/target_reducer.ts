import { getType } from "typesafe-actions";
import { Action } from "../types/action";
import { setTargetPreviewUrl, setTargetContents, setTargetPalette } from "../actions";
import { initialImage } from "./initial_image";
import { Image } from "../types/image";

export const targetReducer = (state: Image = initialImage, action: Action): Image => {
    switch (action.type) {
        case getType(setTargetPreviewUrl):
            return { ...state, previewUrl: action.payload.url };
        case getType(setTargetContents):
            return { ...state, contents: action.payload };
        case getType(setTargetPalette):
            return { ...state, palette: action.payload.palette };
        default:
            return state;
    }
}
