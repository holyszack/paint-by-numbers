import { ActionType } from 'typesafe-actions';
import * as Actions from "../actions";

export type Action = ActionType<typeof Actions>;
