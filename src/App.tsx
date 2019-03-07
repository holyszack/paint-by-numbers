import React from 'react';
import './App.css';
import { ImagePicker } from "./components/image_picker";
import { Messages } from "./components/messages";
import { AppState } from "./types/app_state";
// import { log } from "./services/log";
import { Image } from "semantic-ui-react";
import { AppActions } from "./App.connect";
import { pipe } from "./services/pipe";
import { getFirstFile } from "./services/get_first_file";

export const App = ({
    setSourceFile,
    source,
    target,
    messages,
}: AppState & AppActions) => {
    return (
        <div className="App">
            <ImagePicker onChange={pipe(getFirstFile, setSourceFile)} />
            <Image.Group>
                <Image src={source.previewUrl} />
                <Image src={target.previewUrl} />
            </Image.Group>
            <Messages messages={messages} />
        </div>
    );
};

export default App;
