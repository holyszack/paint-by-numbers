import { dotReduce } from "./dot_reduce";

describe("dotReduce [unit]", () => {
    it("should reduce an array of arrays of equal size to a single array", () => {
        const sum = (a: number, b: number) => a + b;
        const values = [[1, 2, 3], [4, 4, 4], [0, 12, 25], [100, 200, 300]];
        const expected = [105, 218, 332];
        expect(dotReduce(sum)(values)).toEqual(expected);
    });
    it("should reduce an array of arrays of arrays of equal size to a single array", () => {
        const concat = (a: number[], b: number[]) => a.concat(b);
        const values = [[[1,2,3], [2,3,4]], [[4],[36]]];
        const expected = [[1,2,3,4],[2,3,4,36]];
        expect(dotReduce(concat)(values)).toEqual(expected);
    });
});
