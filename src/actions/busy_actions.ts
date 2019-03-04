import { createAction } from "typesafe-actions";
import { Actions } from "../types/actions";

export const setIsBusy = createAction(Actions.setIsBusy, resolve =>
    () => resolve());
export const setIsNotBusy = createAction(Actions.setIsNotBusy, resolve =>
    () => resolve());
