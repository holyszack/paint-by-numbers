import { Card, Tooltip } from "@material-ui/core";
import React from "react";
import { ChromePicker } from "react-color";
import { RGB } from "../types/rgb";

export const ColorPickerItem = ([r, g, b]: RGB) => (
    <Tooltip
        key={`source-${r},${g},${b}`}
        interactive={true}
        placement="bottom"
        arrow={true}
        title={<ChromePicker color={{ r, g, b }} />}
    >
        <Card
            style={{
                "backgroundColor": `rgb(${r},${g},${b})`,
                "color": r + g + b < 384 ? "white" : "black",
                "marginTop": ".5em",
                "marginBottom": ".5em",
                "height": "44px",
            }}
        >
        </Card>
    </Tooltip>
);
