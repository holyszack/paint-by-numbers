import { getWeightedRgbsFromHistogram } from "./get_weighted_rgbs_from_histogram";
// tslint:disable:max-line-length
const tests = [
    {
        "expected": [
            {"value": [0,0,0], "weight": 2},
            {"value": [0,0,100], "weight": 1},
            {"value": [0,100,50], "weight": 1},
            {"value": [120,100,50], "weight": 1},
            {"value": [240,100,50], "weight": 1},
        ],
        "value": new Map([["0,0,0", 2], ["0,0,100", 1], ["0,100,50", 1], ["120,100,50", 1], ["240,100,50", 1]]),
    },
];
// tslint:enable:max-line-length
describe("getWeightedRgbsFromHistogram [unit]", () => {
    tests.forEach(({ expected, value }) => {
        it(`${value} should equal ${expected}`, () => {
            expect(getWeightedRgbsFromHistogram(value)).toEqual(expected);
        });
    });
});
