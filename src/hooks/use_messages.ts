import { useState, useCallback } from "react";

export function useMessages() {
    const [messages, setMessages] = useState([] as string[]);

    const sendMessage = useCallback((message: string) => {
        const { log } = console;
        log(message);
        setMessages(m => [...m, message]);
    }, []);

    return {
        messages,
        sendMessage,
    };
}
