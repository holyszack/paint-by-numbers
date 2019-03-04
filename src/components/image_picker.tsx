import * as React from "react";
import { Input, InputOnChangeData } from "semantic-ui-react";

export type ImagePickerProps = {
    "onChange": (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;
};

export const ImagePicker = ({onChange}: ImagePickerProps) => (
    <div>
        <Input
            type="file"
            // style={{ "display": "none" }}
            multiple={false}
            accept="image/png"
            onChange={onChange}
        >
        </Input>
    </div>
);
