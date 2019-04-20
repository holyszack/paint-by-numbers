import { indexMap } from "./index_map";
import {rgbToHsl} from "./rgb_to_hsl";
import {arrayKeyNormalizer} from "./array_key_normalizer";
import findClosestPixelId from "./find_closest_pixel_id";
import { RGB } from "../types/rgb";

describe("indexMap [unit]", () => {
    it("should return map", () => {
        const image = [[0, 0, 0], [255, 255, 255], [0, 0, 0], [100, 100, 100]] as RGB[];
        const palette = [[0, 0, 0], [0, 0, 100]] as RGB[];
        const expected = new Map([["0,0,0", 0], ["255,255,255", 1], ["100,100,100", 0]])
        const params = {
            "ranker": findClosestPixelId,
            "transformer": rgbToHsl as any,
            "normalizer": arrayKeyNormalizer,
        };
        expect(indexMap(params)({source: image, target: palette})).toEqual(expected);
    });
});
