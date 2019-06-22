import { combineEpics } from "redux-observable";
import { setSourceFileEpic } from "./set_source_file_epic";
import { setSourceContentsEpic } from "./set_source_contents_epic";
import { setSourceHistogramEpic } from "./set_source_histogram_epic";

export const rootEpics = combineEpics(
    setSourceContentsEpic,
    setSourceHistogramEpic,
    setSourceFileEpic,
);
