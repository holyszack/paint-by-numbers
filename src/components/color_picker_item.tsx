import { Card } from "@material-ui/core";
import React, { useState } from "react";
import { logger } from "../services/logger";
import { RGB } from "../types/rgb";

export const ColorPickerItem = ({
    "color": [r, g, b],
    onChange,
}: {
    "color": RGB;
    "onChange": (color: RGB) => void;
}) => {
    const numToHex = (input: number): string => input.toString(16).padStart(2, "0");
    const colorString = ([r, g, b]: RGB) => `#${numToHex(r)}${numToHex(g)}${numToHex(b)}`;
    const originalColor = colorString([r, g, b]);
    const [color, setColor] = useState(originalColor);

    const handleUpdate = (color: string) => {
        if (color !== originalColor) {
            try {
                const [, red, green, blue] = color.match(/#([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})/i) as string[];
                onChange([red, green, blue].map((item) => parseInt(item, 16)) as RGB);
            } catch (err) {
                logger("error", err);
            }
        }
    };

    return (
        <Card
            style={{
                "backgroundColor": `rgb(${r},${g},${b})`,
                "color": r + g + b < 384 ? "white" : "black",
                "marginTop": ".5em",
                "marginBottom": ".5em",
                "height": "44px",
            }}
        >
            <input
                type="color"
                onChange={(e) => setColor(e.currentTarget.value)}
                style={{ "width": "100%", "height": "100%", "padding": "0", "borderWidth": "0" }}
                onBlur={(e) => handleUpdate(e.currentTarget.value)}
                value={color}
            />
        </Card>
    );
};
