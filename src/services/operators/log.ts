import { tap } from "rxjs/operators";

const { "log": output } = console;

export const log = <T>(title: string) => tap<T>((value) => {
    output(title, value);
});

// export const log = tap(output);
