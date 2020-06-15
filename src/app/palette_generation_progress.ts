import { observableFactory } from "../services/observable_factory";

export const [paletteGenerationProgress$, setPaletteGenerationProgress] = observableFactory<number>();
