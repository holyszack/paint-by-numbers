import { Grid, Paper } from "@material-ui/core";
import React, { useContext } from "react";
import { DisplayMessages } from "./components/display_messages";
import { ImagePicker } from "./components/image_picker";
import { ImagePreview } from "./components/image_preview";
import { Messages } from "./context/messages";
import { SourceImage } from "./context/source_image";

export const App = () => {
    const { messages } = useContext(Messages);
    const { setSourceImage, previewUrl } = useContext(SourceImage);
    const source = {
        "palette": [],
        previewUrl,
        "progress": undefined,
    };
    return (
        <Paper>
            <ImagePicker setImage={setSourceImage} />
            <Grid container={true}>
                <Grid item={true} xs={12} sm={6}>
                    <ImagePreview {...source} name="source" />
                </Grid>
                {/* <Grid item={true} xs={12} sm={6}>
                    <ImagePreview {...target} name="target" />
                </Grid> */}
            </Grid>
            <DisplayMessages messages={messages} />
        </Paper >
    );
};
