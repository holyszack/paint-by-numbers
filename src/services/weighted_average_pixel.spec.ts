import { weightedAveragePixel } from "./weighted_average_pixel";
import { WeightedRGB } from "../types/weighted_rgb";
import { RGB } from "../types/rgb";
// tslint:disable:max-line-length
const tests = [
    {
        "expected": [0, 0, 0],
        "value": [
            { "value": [0, 0, 0], "weight": 5 },
        ],
    },
    {
        "expected": [50, 25, 100],
        "value": [
            { "value": [0, 0, 0], "weight": 5 },
            { "value": [100, 50, 200], "weight": 5 },
        ],
    },
] as Array<{ "value": WeightedRGB[]; "expected": RGB }>;
// tslint:enable:max-line-length
describe("weightedAveragePixel [unit]", () => {
    tests.forEach(({ expected, value }) => {
        it(`${value} should equal ${expected}`, () => {
            expect(weightedAveragePixel(value)).toEqual(expected);
        });
    });
});
