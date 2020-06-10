import { Card, LinearProgress, Paper } from "@material-ui/core";
import * as React from "react";
import imagePlaceholder from "../images/placeholder.png";
import { Palette } from "../types/palette";
import { Image } from "./image";

export type ImagePreviewProps = {
    name: string;
    palette: Palette;
    previewUrl?: string;
    progress?: number;
};

export function ImagePreview({ name, palette, previewUrl, progress }: ImagePreviewProps) {
    return (
        <Paper>
            <Image alt={name} src={previewUrl || imagePlaceholder} />
            {typeof progress === "number"
                ? <LinearProgress variant="determinate" value={progress} />
                : undefined
            }
            {palette
                ? <Paper>
                    {palette.map((item) => (
                        <Card
                            key={`source-${item}`}
                            style={{
                                "backgroundColor": `hsl(${item[0]},${item[1]}%,${item[2]}%)`,
                                "color": item[2] < 50 ? "white" : "black",
                            }}
                        >
                            <Paper style={{ "float": "left" }}>{item[0]}</Paper>
                            <Paper>{item[1]}%</Paper>
                            <Paper style={{ "float": "right" }}>{item[2]}%</Paper>
                        </Card>
                    ))}
                </Paper>
                : undefined}
        </Paper>
    );
}
