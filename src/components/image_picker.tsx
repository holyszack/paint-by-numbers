import { Paper } from "@material-ui/core";
import * as React from "react";
import { getFirstFile } from "../services/input/get_first_file";

export type ImagePickerProps = {
    "setImage": (imgage: File) => void;
};

export const ImagePicker = ({ setImage }: ImagePickerProps) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(getFirstFile(event));
    };
    return (
        <Paper>
            <input
                type="file"
                multiple={false}
                accept="image/png"
                onChange={onChange}
            >
            </input>
        </Paper>
    );
};
