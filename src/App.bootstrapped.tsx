import React, { Component } from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import {App as ConnectedApp} from "./App.connect";

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedApp />
            </Provider>
        );
    }
}

export default App;
