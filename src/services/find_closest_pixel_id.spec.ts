import { findClosestPixelId } from "./find_closest_pixel_id";
import { RGB } from "../types/rgb";

const tests = [
    {
        "expectedId": 0,
        "pixels": [[0, 0, 0], [233, 0, 0]],
        "target": [0, 10, 50],
    },
    {
        "expectedId": 0,
        "pixels": [[0, 0, 0], [255, 255, 255]],
        "target": [0, 0, 0],
    },
    {
        "expectedId": 1,
        "pixels": [[0, 0, 0], [255, 255, 255]],
        "target": [255, 255, 255],
    },
    {
        "expectedId": 1,
        "pixels": [[0, 0, 0], [233, 0, 0]],
        "target": [233, 10, 100],
    },
] as Array<{ "expectedId": number; "pixels": RGB[]; "target": RGB }>;

describe("findClosestPixelId", () => {
    tests.forEach(({ expectedId, pixels, target }) => {
        it(`${target} should match [${expectedId}]`, () => {
            expect(findClosestPixelId(pixels)(target)).toEqual(expectedId);
        });
    });
});
