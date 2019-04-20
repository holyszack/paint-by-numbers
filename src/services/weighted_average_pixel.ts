import { randomPointFactory } from "./random_point_factory";
import { RGB } from "../types/rgb";
import { WeightedRGB } from "../types/weighted_rgb";

export function weightedAveragePixel(pixels: WeightedRGB[]): RGB {
    if (!pixels.length) {
        return randomPointFactory();
    }
    const { value, weight } = pixels.reduce(
        (avg, { value, weight }) => ({
            "value": avg.value.map((item, index) => item + value[index] * weight) as RGB,
            "weight": avg.weight + weight,
        }),
        { "value": [0, 0, 0], "weight": 0 },
    )
    return value.map((item) => Math.floor(item / (weight || 1))) as RGB;
};
