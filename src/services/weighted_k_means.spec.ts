import { weightedKMeans } from "./weighted_k_means";
import { WeightedRGB } from "../types/weighted_rgb";
import { RGB } from "../types/rgb";
// tslint:disable:max-line-length
const tests = [
    {
        "expected": [[0, 0, 0], [255, 255, 255]],
        "partitions": 2,
        "value": [
            { "value": [0, 0, 0], "weight": 3 },
            { "value": [255, 255, 255], "weight": 1 },
        ],
    },
] as Array<{
    "expected": RGB[],
    "partitions": number,
    "value": WeightedRGB[],
}>;
// tslint:enable:max-line-length
describe("weightedKMeans [unit]", () => {
    tests.forEach(({ expected, partitions, value }) => {
        it(`${value} should equal ${expected}`, () => {
            expect(weightedKMeans(partitions)(value)).toEqual(expected);
        });
    });
});
