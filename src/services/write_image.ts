import { PNG } from "pngjs";

export const writeImage = (spec: {
    "width": number;
    "height": number;
    "data": Buffer;
}) => {
    const { height, width, data } = spec;
    const newPng = new PNG({ "filterType": -1, width, height });
    newPng.data = data;
    return newPng.pack();
};
export default writeImage;
