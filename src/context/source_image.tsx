import { createContext } from "react";
import { useSourceImage } from "../hooks/use_source_image";

export const SourceImage = createContext({} as ReturnType<typeof useSourceImage>);
