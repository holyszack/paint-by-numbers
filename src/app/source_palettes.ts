import { merge } from "rxjs";
import { tap } from "rxjs/operators";
import { observableFactory } from "../services/observable_factory";
import { RGB } from "../types/rgb";
import { sendMessage } from "./messages";
import { sourcePaletteGenerator$ } from "./source_palette_generator";

const [directPalette$, setSourcePalette] = observableFactory<RGB[]>();

export { setSourcePalette };

export const sourcePalette$ = merge(directPalette$, sourcePaletteGenerator$).pipe(
    tap(sendMessage),
);
