import * as React from "react";
import { Segment } from "semantic-ui-react";

export type ImagePickerProps = {
    "onChange": (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ImagePicker = ({ onChange }: ImagePickerProps) => (
    <Segment>
        <input
            type="file"
            // style={{ "display": "none" }}
            multiple={false}
            accept="image/png"
            onChange={onChange}
        >
        </input>
    </Segment>
);
