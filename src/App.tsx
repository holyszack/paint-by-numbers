import React, { Component } from 'react';
import './App.css';
import { ImagePicker } from "./components/image_picker";
import { Messages } from "./components/messages";
import { AppState } from "./types/app_state";
import { log } from "./services/log";
import { setSourcePath } from "./actions";
import { InputOnChangeData } from "semantic-ui-react";

export const App = (props: AppState & { setSourcePath: typeof setSourcePath }) => {
    log(props);
    const temp = (method: (path: string) => void) =>
        (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) =>
            method(data.value);
    return (
        <div className="App">
            <ImagePicker onChange={temp(props.setSourcePath)} />
            <Messages messages={props.messages} />
        </div>
    );
};

export default App;
