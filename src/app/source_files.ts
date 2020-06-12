import { observableFactory } from "../services/observable_factory";
import { exists } from "../services/operators/exists";

const [observable, setSourceFile] = observableFactory<File>();

export { setSourceFile };

export const sourceFile$ = observable.pipe(
    exists(),
);
