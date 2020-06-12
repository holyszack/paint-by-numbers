import { map } from "rxjs/operators";

export const getProperty = <T, K extends keyof T>(property: K) => map((value: T) => value[property]);
