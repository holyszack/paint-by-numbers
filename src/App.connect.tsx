import {App as AppComponent} from "./App";
import { AppState } from "./types/app_state";
import { Dispatch, bindActionCreators, AnyAction } from "redux";
import { connect } from "react-redux";
import { setSourcePath } from "./actions";

const mapStateToProps = (state: AppState) => state;

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
    setSourcePath
  }, dispatch);

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;
