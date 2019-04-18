import { mapToObjectArray } from "./map_to_object_array";
import { WeightedRGB } from "../types/weighted_rgb";

export function getWeightedRgbsFromHistogram(histogram: Map<string, number>) {
    return mapToObjectArray(histogram)
        .map(({ key, value: weight }) => ({
            "value": key.split(",").map((a) => parseInt(a, 10)),
            weight,
        }) as WeightedRGB);
}
