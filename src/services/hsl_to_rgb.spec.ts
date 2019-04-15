import { hslToRgb } from "./hsl_to_rgb";

const tests = [
    {
        "expected": [255, 0, 0, 255],
        "value": [0, 100, 50, 255],
    },
    {
        "expected": [255, 255, 0, 255],
        "value": [60, 100, 50, 255],
    },
    {
        "expected": [0, 255, 0, 255],
        "value": [120, 100, 50, 255],
    },
    {
        "expected": [0, 255, 255, 255],
        "value": [180, 100, 50, 255],
    },
    {
        "expected": [0, 0, 255, 255],
        "value": [240, 100, 50, 255],
    },
    {
        "expected": [255, 0, 255, 255],
        "value": [300, 100, 50, 255],
    },
    // {
    //     'expected': [223, 223, 159, 255],
    //     'value': [60, 50, 75, 255],
    // }
];

describe("hslToRgb", () => {
    tests.forEach(({ value, expected }) => {
        it(`${value} should equal ${expected}`, () => {
            expect(hslToRgb(value)).toEqual(expected);
        });
    });
});
