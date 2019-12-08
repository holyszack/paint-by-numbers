import pointSort from "./point_sort";
import { RGB } from "../types/rgb";

const tests = [
    { "expected": -1, "first": [0, 0, 0], "second": [1, 0, 0] },
    { "expected": 1, "first": [1, 0, 0], "second": [0, 0, 0] },
    { "expected": 0, "first": [1, 0, 0], "second": [1, 0, 0] },
    { "expected": 1, "first": [1, 0, 0], "second": [0, 1, 0] },
    { "expected": 1, "first": [1, 0, 0], "second": [0, 255, 255] },
] as Array<{ "expected": number; "first": RGB; "second": RGB }>;

describe("pointSort", () => {
    tests.forEach(({ first, second, expected }) => {
        it("should", () => {
            const results = pointSort(first, second);
            const normalizedResult = results / Math.abs(results || 1);
            expect(normalizedResult).toBe(expected);
        });
    });
});
