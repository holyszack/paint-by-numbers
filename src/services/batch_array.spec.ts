import { batchArray } from "./batch_array";

describe("batchArray [unit]", () => {
    it("should return an array of arrays of length batchSize", () => {
        const batchSize = 3;
        const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const expected = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10]];
        expect(batchArray(batchSize)(values)).toEqual(expected);
    });
    it("should return an array of arrays of length batchSize", () => {
        const batchSize = 4;
        const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const expected = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10]];
        expect(batchArray(batchSize)(values)).toEqual(expected);
    });
});
