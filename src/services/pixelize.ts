import { RGB } from "../types/rgb";

export const pixelize = (sliceLength = 4, valueLength = 3) =>
    (img: RGB[], value: number, index: number) => {
        if (index % sliceLength === 0) {
            img.push([value] as any);
        } else if (index % sliceLength < valueLength) {
            img[img.length - 1].push(value);
        }
        return img;
    };
