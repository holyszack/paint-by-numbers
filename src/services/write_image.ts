import { PNG } from "pngjs";

export const writeImage = (spec: {
    "data": Buffer;
    "height": number;
    "width": number;
}) => {
    const { data, height, width } = spec;
    const newPng = new PNG({ "filterType": -1, width, height });
    newPng.data = data;
    return newPng.pack();
};
