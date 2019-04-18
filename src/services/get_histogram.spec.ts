import { getHistogram } from "./get_histogram";
// tslint:disable:max-line-length
const tests = [
    {
        "expected": new Map([["0,0,0", 2], ["0,0,100", 1], ["0,100,50", 1], ["120,100,50", 1], ["240,100,50", 1]]),
        "value": [[0, 0, 0], [0, 0, 0], [255, 255, 255], [255, 0, 0], [0, 255, 0], [0, 0, 255]],
    },
];
// tslint:enable:max-line-length
describe("getHistogram [unit]", () => {
    tests.forEach(({ expected, value }) => {
        it(`${value} should equal ${expected}`, () => {
            expect(getHistogram(value)).toEqual(expected);
        });
    });
});
