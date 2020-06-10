import { createContext } from "react";
import { useMessages } from "../hooks/use_messages";

export const Messages = createContext({} as ReturnType<typeof useMessages>);
