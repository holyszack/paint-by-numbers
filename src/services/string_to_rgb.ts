import { RGB } from "../types/rgb";

export const stringToRgb = (input: string): RGB => input.split(",").map((i) => parseInt(i, 10)) as RGB;
