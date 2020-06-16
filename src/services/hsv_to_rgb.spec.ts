import { hsvToRgb } from "./hsv_to_rgb";

const tests = [
    {
        "expected": [128, 0, 0, 255],
        "value": [0, 100, 50, 255],
    },
    {
        "expected": [128, 128, 0, 255],
        "value": [60, 100, 50, 255],
    },
    {
        "expected": [0, 128, 0, 255],
        "value": [120, 100, 50, 255],
    },
    {
        "expected": [0, 128, 128, 255],
        "value": [180, 100, 50, 255],
    },
    {
        "expected": [0, 0, 128, 255],
        "value": [240, 100, 50, 255],
    },
    {
        "expected": [128, 0, 128, 255],
        "value": [300, 100, 50, 255],
    },
    {
        "expected": [255, 0, 0, 255],
        "value": [0, 100, 100, 255],
    },
    {
        "expected": [255, 255, 0, 255],
        "value": [60, 100, 100, 255],
    },
    {
        "expected": [0, 255, 0, 255],
        "value": [120, 100, 100, 255],
    },
    {
        "expected": [0, 255, 255, 255],
        "value": [180, 100, 100, 255],
    },
    {
        "expected": [0, 0, 255, 255],
        "value": [240, 100, 100, 255],
    },
    {
        "expected": [255, 0, 255, 255],
        "value": [300, 100, 100, 255],
    },
    {
        "expected": [255, 204, 130],
        "value": [35.5, 49, 100],
    },
];

describe("hsvToRgb", () => {
    tests.forEach(({ value, expected }) => {
        it(`${value} should equal ${expected}`, () => {
            expect(hsvToRgb(value)).toEqual(expected);
        });
    });
});
