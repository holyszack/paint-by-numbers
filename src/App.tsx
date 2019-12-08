import React from 'react';
import './App.css';
import { ImagePicker } from "./components/image_picker";
import { Messages } from "./components/messages";
import { AppState } from "./types/app_state";
// import { log } from "./services/log";
import { Segment, Grid } from "semantic-ui-react";
import { AppActions } from "./App.connect";
import { pipe } from "./services/pipe";
import { getFirstFile } from "./services/get_first_file";
import 'semantic-ui-css/semantic.min.css';
import { ImagePreview } from "./components/image_preview";

export const App = ({
    setSourceFile,
    source,
    target,
    messages,
}: AppState & AppActions) => {
    return (
        <Segment.Group className="App">
            <ImagePicker onChange={pipe(getFirstFile, setSourceFile)} />
            <Grid columns={2} stackable>
                <Grid.Column>
                    <ImagePreview {...source} />
                </Grid.Column>
                <Grid.Column>
                    <ImagePreview {...target} />
                </Grid.Column>
            </Grid>
            <Messages messages={messages} />
        </Segment.Group>
    );
};

export default App;
