import * as React from "react";

export type ImagePickerProps = {
    "onChange": (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ImagePicker = ({onChange}: ImagePickerProps) => (
    <div>
        <input
            type="file"
            // style={{ "display": "none" }}
            multiple={false}
            accept="image/png"
            onChange={onChange}
        >
        </input>
    </div>
);
