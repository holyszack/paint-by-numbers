import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { paletteGenerationProgress$ } from "./app/palette_generation_progress";
import { sourceFilename$ } from "./app/source_filenames";
import { setSourceFile } from "./app/source_files";
import { setSourcePalette, sourcePalette$ } from "./app/source_palettes";
import { sourcePreviewUrl$ } from "./app/source_preview_urls";
import { setTargetPalette, targetPalette$ } from "./app/target_palettes";
import { targetPreviewUrl$ } from "./app/target_preview_urls";
import { DisplayMessages } from "./components/display_messages";
import { ImagePicker } from "./components/image_picker";
import { ImagePreview } from "./components/image_preview";
import { PaletteSizePicker } from "./components/palette_size_picker";
import { useObservable } from "./services/hooks/use_observable";

export const App = () => {
    const source = {
        "name": useObservable(sourceFilename$),
        "palette": useObservable(sourcePalette$),
        "previewUrl": useObservable(sourcePreviewUrl$),
        "progress": useObservable(paletteGenerationProgress$),
        "updatePalette": setSourcePalette,
    };
    const target = {
        "name": useObservable(sourceFilename$),
        "palette": useObservable(targetPalette$),
        "previewUrl": useObservable(targetPreviewUrl$),
        // "progress": useObservable(paletteGenerationProgress$),
        "updatePalette": setTargetPalette,
    };
    return (
        <Paper>
            <ImagePicker setImage={setSourceFile} />
            <PaletteSizePicker />
            <Grid container={true}>
                <Grid item={true} xs={12} sm={6}>
                    <ImagePreview {...source} name="source" />
                </Grid>
                <Grid item={true} xs={12} sm={6}>
                    <ImagePreview {...target} name="target" />
                </Grid>
            </Grid>
            <DisplayMessages />
        </Paper >
    );
};
