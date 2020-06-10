import { Paper } from "@material-ui/core";
import * as React from "react";

export type ImagePickerProps = {
    "onChange": (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ImagePicker = ({ onChange }: ImagePickerProps) => (
    <Paper>
        <input
            type="file"
            // style={{ "display": "none" }}
            multiple={false}
            accept="image/png"
            onChange={onChange}
        >
        </input>
    </Paper>
);
