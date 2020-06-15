import { LinearProgress, Paper } from "@material-ui/core";
import * as React from "react";
import imagePlaceholder from "../images/placeholder.png";
import { Palette } from "../types/palette";
import { ColorPickerItem } from "./color_picker_item";
import { Image } from "./image";

export type ImagePreviewProps = {
    name?: string;
    palette?: Palette;
    previewUrl?: string;
    progress?: number;
};

export function ImagePreview({ name = "", palette = [], previewUrl = imagePlaceholder, progress }: ImagePreviewProps) {
    return (
        <Paper>
            <Image alt={name} src={previewUrl} />
            {typeof progress === "number"
                && <LinearProgress variant="determinate" value={progress} />
            }
            {palette && <Paper>
                {palette.map(ColorPickerItem)}
            </Paper>}
        </Paper>
    );
}
