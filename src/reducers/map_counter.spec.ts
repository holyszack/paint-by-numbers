import { mapCounter } from "./map_counter";
// tslint:disable:max-line-length
const tests = [
    {
        "expected": new Map([["0,0,0", 2], ["255,255,255", 1]]),
        "value": ["0,0,0", "0,0,0", "255,255,255"],
    },
];
// tslint:enable:max-line-length
describe("getHistogram [unit]", () => {
    tests.forEach(({ expected, value }) => {
        it(`${value} should equal ${expected}`, () => {
            expect(value.reduce(mapCounter, new Map())).toEqual(expected);
        });
    });
});
