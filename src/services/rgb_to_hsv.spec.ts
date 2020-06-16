import { rgbToHsv } from "./rgb_to_hsv";

const tests = [
    {
        "expected": [0, 100, 50, 255],
        "value": [127.5, 0, 0, 255],
    },
    {
        "expected": [60, 100, 100, 255],
        "value": [255, 255, 0, 255],
    },
    {
        "expected": [120, 100, 100, 255],
        "value": [0, 255, 0, 255],
    },
    {
        "expected": [180, 100, 100, 255],
        "value": [0, 255, 255, 255],
    },
    {
        "expected": [240, 100, 100, 255],
        "value": [0, 0, 255, 255],
    },
    {
        "expected": [300, 100, 100, 255],
        "value": [255, 0, 255, 255],
    },
    {
        "expected": [300, 100, 100],
        "value": [255, 0, 255],
    },
    {
        "expected": [36, 49, 100],
        "value": [255, 204, 130],
    },
    {
        "expected": [0, 100, 50, 255],
        "value": [128, 0, 0, 255],
    },
    {
        "expected": [60, 100, 50, 255],
        "value": [128, 128, 0, 255],
    },
    {
        "expected": [120, 100, 50, 255],
        "value": [0, 128, 0, 255],
    },
    {
        "expected": [180, 100, 50, 255],
        "value": [0, 128, 128, 255],
    },
    {
        "expected": [240, 100, 50, 255],
        "value": [0, 0, 128, 255],
    },
    {
        "expected": [300, 100, 50, 255],
        "value": [128, 0, 128, 255],
    },
    {
        "expected": [0, 100, 100, 255],
        "value": [255, 0, 0, 255],
    },
    {
        "expected": [60, 100, 100, 255],
        "value": [255, 255, 0, 255],
    },
    {
        "expected": [120, 100, 100, 255],
        "value": [0, 255, 0, 255],
    },
    {
        "expected": [180, 100, 100, 255],
        "value": [0, 255, 255, 255],
    },
    {
        "expected": [240, 100, 100, 255],
        "value": [0, 0, 255, 255],
    },
    {
        "expected": [300, 100, 100, 255],
        "value": [255, 0, 255, 255],
    },
];

describe("rgbToHsv", () => {
    tests.forEach(({ value, expected }) => {
        it(`${value} should equal ${expected}`, () => {
            expect(rgbToHsv(value)).toEqual(expected);
        });
    });
});
