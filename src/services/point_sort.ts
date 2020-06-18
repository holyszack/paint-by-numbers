import { RGB } from "../types/rgb";

export const pointSort = (indices = [0, 2, 1]) => (first: RGB, second: RGB) => {
    return (first[indices[0]] - second[indices[0]])
        || (first[indices[1]] - second[indices[1]])
        || (first[indices[2]] - second[indices[2]]);
};
