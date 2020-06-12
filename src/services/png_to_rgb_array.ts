import { PNG } from "pngjs";
import { RGB } from "../types/rgb";
import { pixelize } from "./pixelize";

export const pngToRgbArray = (png: PNG): RGB[] => png.data.reduce(pixelize(), []);
