import { pointSort } from "./point_sort";
import { RGB } from "../types/rgb";

const tests = [
    { "expected": -1, "first": [0, 0, 0], "second": [1, 0, 0], "sortOrder": undefined },
    { "expected": 1, "first": [1, 0, 0], "second": [0, 0, 0], "sortOrder": undefined },
    { "expected": 0, "first": [1, 0, 0], "second": [1, 0, 0], "sortOrder": undefined },
    { "expected": 1, "first": [1, 0, 0], "second": [0, 1, 0], "sortOrder": undefined },
    { "expected": 1, "first": [1, 0, 0], "second": [0, 255, 255], "sortOrder": undefined },
] as Array<{ "expected": number; "first": RGB; "second": RGB; "sortOrder": number[] | undefined }>;

describe("pointSort", () => {
    tests.forEach(({ first, second, expected, sortOrder }) => {
        it("should", () => {
            const results = pointSort(sortOrder)(first, second);
            const normalizedResult = results / Math.abs(results || 1);
            expect(normalizedResult).toBe(expected);
        });
    });
});
