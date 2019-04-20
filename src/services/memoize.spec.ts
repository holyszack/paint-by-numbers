import { memoize } from "./memoize";
// tslint:disable:max-line-length
// const tests = [
//     {
//         "expected": "",
//         "value": "",
//     },
// ];
// tslint:enable:max-line-length
describe("memoize [unit]", () => {
    // tests.forEach(({ expected, value }) => {
    // it(`${value} should equal ${expected}`, () => {
    //     expect(memoize(value)).toBe(expected);
    // });
    it("should take in a function, and return a function that passes the paramters to the first function", () => {
        const spy = jest.fn();
        const a = { "a": 1 };
        const b = 4;
        memoize(spy)(a, b);
        expect(spy).toHaveBeenCalledWith(a, b);
    })
    it("should return results of inner function", () => {
        const add = jest.fn((a, b) => a + b);
        const multiply = jest.fn((a, b) => a * b);
        const a = 1;
        const b = 4;
        expect(memoize(add)(a, b)).toBe(5);
        expect(memoize(multiply)(a, b)).toBe(4);
    })
    it("should only call inner function if parameters are new", () => {
        const spy = jest.fn((a, b) => a + b);
        const a = 1;
        const b = 4;
        const c = 6
        const memo = memoize(spy);
        memo(a, b);
        memo(b, c);
        memo(a, b);
        expect(spy).toBeCalledTimes(2);
        expect(spy).toHaveBeenLastCalledWith(b, c);
    })
    // });
});
