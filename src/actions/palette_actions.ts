import { createAction } from "typesafe-actions";
import { Actions } from "../types/actions";

export const setPaletteSize = createAction(Actions.setPaletteSize, resolve =>
    (size: number) => resolve({ size }));
