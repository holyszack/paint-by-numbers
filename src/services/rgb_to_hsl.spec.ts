import { rgbToHsl } from "./rgb_to_hsl";

const tests = [
    {
        "expected": [0, 100, 50, 255],
        "value": [255, 0, 0, 255],
    },
    {
        "expected": [60, 100, 50, 255],
        "value": [255, 255, 0, 255],
    },
    {
        "expected": [120, 100, 50, 255],
        "value": [0, 255, 0, 255],
    },
    {
        "expected": [180, 100, 50, 255],
        "value": [0, 255, 255, 255],
    },
    {
        "expected": [240, 100, 50, 255],
        "value": [0, 0, 255, 255],
    },
    {
        "expected": [300, 100, 50, 255],
        "value": [255, 0, 255, 255],
    },
    {
        "expected": [300, 100, 50],
        "value": [255, 0, 255],
    },
    // {
    //     'value': [223, 223, 159, 255],
    //     'expected': [60, 50, 75, 255],
    // }
];

describe("rgbToHsl", () => {
    tests.forEach(({ value, expected }) => {
        it(`${value} should equal ${expected}`, () => {
            expect(rgbToHsl(value)).toEqual(expected);
        });
    });
});
