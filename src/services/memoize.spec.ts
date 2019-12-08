import { memoize } from "./memoize";

describe("memoize [unit]", () => {
    it("should take in a function, and return a function that passes the paramters to the first function", () => {
        const spy = jest.fn(() => 1);
        const a = [0, 1, 2];
        const test = memoize(spy);
        test(a);
        expect(spy).toHaveBeenCalledWith(a);
    });
    it("should return results of inner function", () => {
        const square = jest.fn((a) => a * a);
        const cube = jest.fn((a) => a * a * a);
        const a = 2;
        const b = 4;
        expect(memoize(square)(b)).toBe(16);
        expect(memoize(cube)(a)).toBe(8);
    });
    it("should only call inner function if parameters are new", () => {
        const spy = jest.fn((a) => a.toString());
        const a = [1, 2];
        const b = 4;
        const memo = memoize(spy);
        memo(a);
        memo(b);
        memo(a);
        expect(spy).toBeCalledTimes(2);
        expect(spy).toHaveBeenLastCalledWith(b);
    });
});
