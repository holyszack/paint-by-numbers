import { Store, applyMiddleware, createStore, compose } from "redux";
import { rootReducers } from "./reducers";
import { createEpicMiddleware } from "redux-observable";
import { rootEpics } from "./epics";
import { Action } from "./types/action";
import { AppState } from "./types/app_state";
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: Function;
    }
}
const epicMiddleware = createEpicMiddleware<Action, Action, AppState>();

export const store: Store = createStore(
    rootReducers,
    compose(
        applyMiddleware(epicMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

epicMiddleware.run(rootEpics);
