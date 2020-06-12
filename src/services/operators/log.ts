import { tap } from "rxjs/operators";
import { logger } from "../logger";

export const log = <T>(title: string) => tap<T>((value) => {
    logger(title, value);
});
