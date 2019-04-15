import { RGB } from "../types/rgb";

export function pointSort(first: RGB, second: RGB) {
    return (first[0] - second[0])
        || (first[1] - second[1])
        || (first[2] - second[2]);
};
export default pointSort;
