import { filter } from "rxjs/operators";

export const exists = <T>() => filter((input: T | undefined): input is T => input !== undefined);
