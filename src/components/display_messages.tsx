import { Paper } from "@material-ui/core";
import * as React from "react";

export type MessagesProps = {
    messages: string[];
}

export const DisplayMessages = ({ messages }: MessagesProps) => (
    <Paper>
        <ul>
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}
        </ul>
    </Paper>
);
