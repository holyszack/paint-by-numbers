import * as React from "react";
import { Segment } from "semantic-ui-react";

export type MessagesProps = {
    messages: string[];
}

export const Messages = ({ messages }: MessagesProps) => (
    <Segment>
        <ul>
            {messages.map((message) => (
                <li key={message}>{message}</li>
            ))}
        </ul>
    </Segment>
);
