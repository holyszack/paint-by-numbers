import { mapToObjectArray } from "./map_to_object_array";
// tslint:disable:max-line-length
const tests = [
    {
        "expected": [
            {"key": "0,0,0", "value": 2},
            {"key": "0,0,100", "value": 1},
            {"key": "0,100,50", "value": 1},
            {"key": "120,100,50", "value": 1},
            {"key": "240,100,50", "value": 1},
        ],
        "value": new Map([["0,0,0", 2], ["0,0,100", 1], ["0,100,50", 1], ["120,100,50", 1], ["240,100,50", 1]]),
    },
];
// tslint:enable:max-line-length
describe("mapToObjectArray [unit]", () => {
    tests.forEach(({ expected, value }) => {
        it(`${value} should equal ${expected}`, () => {
            expect(mapToObjectArray(value)).toEqual(expected);
        });
    });
});
