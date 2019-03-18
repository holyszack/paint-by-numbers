import { combineEpics } from "redux-observable";
import { sourceEpic } from "./source_epic";
import { paletteEpic } from "./palette_epic";

export const rootEpics = combineEpics(
    sourceEpic,
    paletteEpic,
);
