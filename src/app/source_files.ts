import { filter } from "rxjs/operators";
import { observableFactory } from "../services/observable_factory";

const [observable, setSourceFile] = observableFactory<File>();

export { setSourceFile };

export const sourceFile$ = observable.pipe(
    filter((file): file is File => file !== undefined),
);
