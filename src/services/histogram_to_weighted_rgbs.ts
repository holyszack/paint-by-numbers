import { WeightedRGB } from "../types/weighted_rgb";
import { stringToRgb } from "./string_to_rgb";

export const histogramToWeightedRgbs = (histogram: Map<string, number>): WeightedRGB[] => {
    return Array.from(histogram.entries())
        .map(([key, value]) => ({ "value": stringToRgb(key), "weight": value }));
};
