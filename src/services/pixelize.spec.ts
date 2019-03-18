import { pixelize } from "./pixelize";
const tests = [
    // {
    //     "expected": [[255, 255, 255, 255], [255, 0, 0, 255], [0, 255, 0, 255], [0, 0, 255, 255], [0, 0, 0, 255]],
    //     "value": [255, 255, 255, 255, 255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 0, 0, 255],
    // },
    {
        "expected": [[255, 255, 255], [255, 0, 0], [0, 255, 0], [0, 0, 255], [0, 0, 0]],
        "value": [255, 255, 255, 255, 255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 0, 0, 255],
    },
];
describe("pixelize", () => {
    tests.forEach(({ value, expected }) => {
        it(`${value} should equal ${expected}`, () => {
            expect(value.reduce(pixelize, [])).toEqual(expected);
        });
    });
});
