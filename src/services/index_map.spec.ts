import { pipe } from "rxjs";
import { RGB } from "../types/rgb";
import { roundValuesDown } from "./array/round_values_down";
import { stringify } from "./array/stringify";
import { findClosestPixelId } from "./find_closest_pixel_id";
import { indexMap } from "./index_map";
import { rgbToHsv } from "./rgb_to_hsv";

describe("indexMap [unit]", () => {
    it("should return map", () => {
        const image = [[0, 0, 0], [255, 255, 255], [0, 0, 0], [100, 100, 100]] as RGB[];
        const palette = [[0, 0, 0], [0, 0, 100]] as RGB[];
        const expected = new Map([["0,0,0", 0], ["255,255,255", 1], ["100,100,100", 0]]);
        const params = {
            "ranker": findClosestPixelId,
            "transformer": rgbToHsv as any,
            "normalizer": pipe(roundValuesDown, stringify),
        };
        expect(indexMap(params)({ source: image, target: palette })).toEqual(expected);
    });
});
