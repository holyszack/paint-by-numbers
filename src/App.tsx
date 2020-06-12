import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { sourceFilename$ } from "./app/source_filenames";
import { setSourceFile } from "./app/source_files";
import { sourcePallete$ } from "./app/source_palletes";
import { sourcePreviewUrl$ } from "./app/source_preview_urls";
import { DisplayMessages } from "./components/display_messages";
import { ImagePicker } from "./components/image_picker";
import { ImagePreview } from "./components/image_preview";
import { useObservable } from "./services/hooks/use_observable";

export const App = () => {
    const source = {
        "name": useObservable(sourceFilename$),
        "palette": useObservable(sourcePallete$),
        "previewUrl": useObservable(sourcePreviewUrl$),
        "progress": undefined,
    };
    return (
        <Paper>
            <ImagePicker setImage={setSourceFile} />
            <Grid container={true}>
                <Grid item={true} xs={12} sm={6}>
                    <ImagePreview {...source} name="source" />
                </Grid>
                {/* <Grid item={true} xs={12} sm={6}>
                    <ImagePreview {...target} name="target" />
                </Grid> */}
            </Grid>
            <DisplayMessages />
        </Paper >
    );
};
