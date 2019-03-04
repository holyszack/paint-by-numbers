import { createAction } from "typesafe-actions";
import { Actions } from "../types/actions";

export const sendMessage = createAction(Actions.sendMessage, resolve =>
    (message: string) => resolve({ message }));
