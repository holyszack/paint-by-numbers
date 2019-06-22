import { combineEpics } from "redux-observable";
import { setSourceContentsEpic } from "./set_source_contents_epic";
import { setSourceFileEpic } from "./set_source_file_epic";
import { setSourceHistogramEpic } from "./set_source_histogram_epic";
import { setSourcePaletteEpic } from "./set_source_palette_epic";
import { setSourcePaletteItemEpic } from "./set_source_palette_item_epic";
import { setTargetContentsEpic } from "./set_target_contents_epic";
import { setTargetPaletteItemEpic } from "./set_target_palette_item_epic";
import { setTargetPreviewUrlEpic } from "./set_target_preview_url_epic";

export const rootEpics = combineEpics(
    setSourceContentsEpic,
    setSourceFileEpic,
    setSourceHistogramEpic,
    setSourcePaletteEpic,
    setSourcePaletteItemEpic,
    setTargetContentsEpic,
    setTargetPaletteItemEpic,
    setTargetPreviewUrlEpic,
);
