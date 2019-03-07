import { App as AppComponent } from "./App";
import { AppState } from "./types/app_state";
import { Dispatch, bindActionCreators, AnyAction } from "redux";
import { connect } from "react-redux";
import * as Actions from "./actions";

export type AppActions = {
    [K in keyof typeof Actions]: typeof Actions[K];
}

const mapStateToProps = (state: AppState) => state;

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators(Actions, dispatch);

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;
