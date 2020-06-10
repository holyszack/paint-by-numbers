import React from "react";
import { Messages } from "../context/messages";
import { useMessages } from "../hooks/use_messages";
import { useSourceImage } from "../hooks/use_source_image";
import { SourceImage } from "../context/source_image";

export function WithContext({ children }: Parameters<React.FC>[0]) {
    const messages = useMessages();
    const sourceImage = useSourceImage(messages.sendMessage);
    return (
        <Messages.Provider value={messages}>
            <SourceImage.Provider value={sourceImage}>
                {children}
            </SourceImage.Provider>
        </Messages.Provider>
    );
} 
