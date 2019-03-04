import { combineEpics } from "redux-observable";
import { sourceEpic } from "./source_epic";

export const rootEpics = combineEpics(
    sourceEpic,
);
