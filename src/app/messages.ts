import { scan } from "rxjs/operators";
import { observableFactory } from "../services/observable_factory";
import { exists } from "../services/operators/exists";
import { log } from "../services/operators/log";

const [messageStream$, setMessage] = observableFactory<string>();

export const message$ = messageStream$.pipe(
    log("message: "),
    exists(),
    scan((messages, message) => messages.concat(message), [] as string[]),
);

export const sendMessage = (input: any) => {
    if (typeof input === "string") {
        setMessage(input);
    } else {
        setMessage(JSON.stringify(input));
    }
};
