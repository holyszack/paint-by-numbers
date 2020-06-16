import { merge } from "rxjs";
import { observableFactory } from "../services/observable_factory";
import { exists } from "../services/operators/exists";
import { log } from "../services/operators/log";
import { RGB } from "../types/rgb";
import { sourcePaletteGenerator$ } from "./source_palette_generator";

const [directPalette$, setSourcePalette] = observableFactory<RGB[]>();

export { setSourcePalette };

export const sourcePalette$ = merge(directPalette$.pipe(exists()), sourcePaletteGenerator$).pipe(
    log("sourcePalette"),
);
