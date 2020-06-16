import { LinearProgress, Paper } from "@material-ui/core";
import * as React from "react";
import imagePlaceholder from "../images/placeholder.png";
import { Palette } from "../types/palette";
import { ColorPickerItem } from "./color_picker_item";
import { Image } from "./image";
import { RGB } from "../types/rgb";

export type ImagePreviewProps = {
    name?: string;
    palette?: Palette;
    previewUrl?: string;
    progress?: number;
    updatePalette: (input: Palette) => void;
};

export function ImagePreview({
    name = "",
    palette = [],
    previewUrl = imagePlaceholder,
    progress,
    updatePalette,
}: ImagePreviewProps) {
    const handleUpdate = (targetIndex: number) => (color: RGB) => {
        updatePalette(palette.map(
            (value, index) => index === targetIndex ? color : value)
        );
    };
    return (
        <Paper>
            <Image alt={name} src={previewUrl} />
            {typeof progress === "number"
                && <LinearProgress variant="determinate" value={progress} />
            }
            {palette && <Paper>
                {palette.map((value, index) => (
                    <ColorPickerItem color={value} key={`source-${value}`} onChange={handleUpdate(index)} />
                ))}
            </Paper>}
            {palette && <textarea
                style={{ "height": "2000px", "width": "300px" }}
                value={JSON.stringify(palette, null, "\t")}
                onChange={(e) => {
                    try {
                        updatePalette(JSON.parse(e.currentTarget.value));
                    } catch (err) {
                        console.error(err);
                    }
                }}
            />}
        </Paper>
    );
}
