import { AppState } from "../types/app_state";
import { initialState } from "./initial_state";
import { Action } from "../types/action";
import { getType } from "typesafe-actions";
import * as Actions from "../actions";
import { sourceReducer } from "./source_reducer";
import { targetReducer } from "./target_reducer";

export const rootReducer = (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
        case getType(Actions.sendMessage):
            return { ...state, messages: state.messages.concat(action.payload.message) }
        case getType(Actions.setIsBusy):
            return { ...state, busy: true };
        case getType(Actions.setIsNotBusy):
            return { ...state, busy: false };
        case getType(Actions.setPaletteSize):
            return { ...state, paletteSize: action.payload.size };
        default:
            return {
                ...state,
                source: sourceReducer(state.source, action),
                target: targetReducer(state.target, action),
            };
    }
}
