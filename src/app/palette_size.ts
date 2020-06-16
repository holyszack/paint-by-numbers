import { observableFactory } from "../services/observable_factory";

export const [paletteSize$, setPaletteSize] = observableFactory(24);
