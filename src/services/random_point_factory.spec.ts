import randomPointFactory from "./random_point_factory";
import { RGB } from "../types/rgb";

const tests = [
    {
        "dimensions": [[0, 100], [0, 200], [0, 1]],
        "expected": [0, 0, 0],
        "first": 0,
        "second": 0,
        "third": 0,
    },
    {
        "dimensions": [[0, 255], [0, 255], [0, 255]],
        "expected": [26, 77, 242],
        "first": .1,
        "second": .3,
        "third": .95,
    },
    {
        "dimensions": [[0, 255], [0, 255], [0, 255]],
        "expected": [255, 255, 255],
        "first": 1,
        "second": 1,
        "third": 1,
    },
    {
        "dimensions": [[0, 100], [0, 200], [0, 400]],
        "expected": [100, 100, 100],
        "first": 1,
        "second": 0.5,
        "third": 0.25,
    },
    {
        "dimensions": [[0, 100], [0, 100], [0, 100]],
        "expected": [100, 50, 25],
        "first": 1,
        "second": 0.5,
        "third": 0.25,
    },
] as Array<{
    "dimensions": [[number, number],[number, number],[number, number]];
    "expected": RGB;
    "first": number; "second": number; "third": number;
}>;

describe("randomPointFactory", () => {
    tests.forEach(({ first, second, third, dimensions, expected }) => {
        it(`[${first}, ${second}, ${third}] of ${dimensions} should match ${expected}`, () => {
            const random = jest.fn();
            random.mockReturnValueOnce(first)
                .mockReturnValueOnce(second)
                .mockReturnValueOnce(third);
            const mockMath = Object.create(global.Math);
            mockMath.random = random;
            global.Math = mockMath;
            expect(randomPointFactory({dimensions})).toEqual(expected);
        });
    });
});
