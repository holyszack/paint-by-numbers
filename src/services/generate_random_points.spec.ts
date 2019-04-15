import generateRandomPoints from "./generate_random_points";

const tests = [
    {
        "expected": [[0, 0, 0, 255], [255, 255, 255, 255]],
        "first": [0, 0, 0, 255],
        "numberOfPoints": 2,
        "second": [255, 255, 255, 255],
        "third": 0,
    },
    {
        "expected": [[255, 255, 255, 255], [0, 0, 0, 255], [10, 100, 200, 255]],
        "first": [255, 255, 255, 255],
        "numberOfPoints": 3,
        "second": [0, 0, 0, 255],
        "third": [10, 100, 200, 255],
    },
    {
        "expected": [[0, 0, 0, 0]],
        "first": [0, 0, 0, 0],
        "numberOfPoints": 1,
        "second": [255, 255, 255, 255],
        "third": 0,
    },
];

describe("generateRandomPoints", () => {
    tests.forEach(({ first, second, third, numberOfPoints, expected }) => {
        it(`${numberOfPoints} should match ${expected}`, () => {
            const genPixel = jest.fn();
            genPixel.mockReturnValueOnce(first)
                .mockReturnValueOnce(second)
                .mockReturnValueOnce(third);
            expect(generateRandomPoints({numberOfPoints, genPixel})).toEqual(expected);
        });
    });
});
