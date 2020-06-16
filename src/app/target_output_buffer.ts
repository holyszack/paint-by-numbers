import { map, share } from "rxjs/operators";
import { log } from "../services/operators/log";
import { targetRgbs$ } from "./target_rgbs";

export const targetOutputBuffer$ = targetRgbs$.pipe(
    map((targetRgbs) => Buffer.from(targetRgbs.flat())),
    log("targetBuffer"),
    share(),
);
