import { useCallback, useEffect, useState } from "react";
import { createObjectUrl } from "../services/create_object_url";
import { useMessages } from "./use_messages";

export function useSourceImage(sendMessage: ReturnType<typeof useMessages>["sendMessage"]) {
    const [imageFile, setImageFile] = useState(undefined as unknown as File);

    useEffect(() => {
        if (imageFile) {
            sendMessage(imageFile.name);
        }
    }, [imageFile, sendMessage]);

    const setSourceImage = useCallback((file: File) => {
        if (file) {
            setImageFile(file);
        }
    }, []);

    const filename = imageFile && imageFile.name;
    const previewUrl = imageFile && createObjectUrl(imageFile);

    return {
        filename,
        imageFile,
        previewUrl,
        setSourceImage,
    };
}
