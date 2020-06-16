import { merge } from "rxjs";
import { share } from "rxjs/operators";
import { observableFactory } from "../services/observable_factory";
import { exists } from "../services/operators/exists";
import { log } from "../services/operators/log";
import { RGB } from "../types/rgb";
import { sourcePalette$ } from "./source_palettes";

const [directPalette$, setTargetPalette] = observableFactory<RGB[]>();

export { setTargetPalette };

export const targetPalette$ = merge(directPalette$.pipe(exists()), sourcePalette$).pipe(
    log("targetPalette"),
    share(),
);
