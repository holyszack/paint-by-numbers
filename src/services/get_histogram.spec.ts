import { getHistogram } from "./get_histogram";

const tests = [
    {
        "expected": new Map([["0,0,0", 2], ["0,0,255", 1], ["0,255,0", 1], ["255,0,0", 1], ["255,255,255", 1]]),
        "value": ["0,0,0", "0,0,0", "255,255,255", "255,0,0", "0,255,0", "0,0,255"],
    },
];

describe("getHistogram [unit]", () => {
    tests.forEach(({ expected, value }) => {
        it(`${value} should equal ${expected}`, () => {
            expect(getHistogram(value)).toEqual(expected);
        });
    });
});
