import { generateRandomPoints } from "./generate_random_points";

const tests = [
    {
        "expected": [[0, 0, 0, 255], [255, 255, 255, 255]],
        "first": [0, 0, 0, 255],
        "length": 2,
        "second": [255, 255, 255, 255],
        "third": 0,
    },
    {
        "expected": [[255, 255, 255, 255], [0, 0, 0, 255], [10, 100, 200, 255]],
        "first": [255, 255, 255, 255],
        "length": 3,
        "second": [0, 0, 0, 255],
        "third": [10, 100, 200, 255],
    },
    {
        "expected": [[0, 0, 0, 0]],
        "first": [0, 0, 0, 0],
        "length": 1,
        "second": [255, 255, 255, 255],
        "third": 0,
    },
];

describe("generateRandomPoints", () => {
    tests.forEach(({ first, second, third, length, expected }) => {
        it(`${length} should match ${expected}`, () => {
            const genPixel = jest.fn();
            genPixel.mockReturnValueOnce(first)
                .mockReturnValueOnce(second)
                .mockReturnValueOnce(third);
            expect(generateRandomPoints({ length, genPixel })).toEqual(expected);
        });
    });
});
