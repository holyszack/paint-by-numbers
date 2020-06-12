import { Paper } from "@material-ui/core";
import * as React from "react";
import { message$ } from "../app/messages";
import { useObservable } from "../services/hooks/use_observable";

export const DisplayMessages = () => {
    const messages = useObservable(message$);
    return (
        <Paper>
            <ul>
                {messages && messages.map((message, index) => (
                    <li key={index + message}>{message}</li>
                ))}
            </ul>
        </Paper>
    );
};
