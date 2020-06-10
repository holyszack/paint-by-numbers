import { createContext } from "react";
import { useMessages } from "../hooks/use_messages";

export const Messages = createContext({
    "messages": [],
    "sendMessage": () => undefined,
} as ReturnType<typeof useMessages>);
