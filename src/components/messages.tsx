import * as React from "react";

export type MessagesProps = {
    messages: string[];
}

export const Messages = ({messages}: MessagesProps) => (
    <ul>
        {messages.map((message) => (
            <li key={message}>{message}</li>
        ))}
    </ul>
);
