import { euclideanDistance } from "./euclidean_distance";
import { RGB } from "../types/rgb";
// tslint:disable:max-line-length
const tests = [
    {
        "expected": 0,
        "origin": [0,0,0],
        "target": [0,0,0],
    },
    {
        "expected": 0,
        "origin": [255,255,255],
        "target": [255,255,255],
    },
    {
        "expected": 441.6729559300637,
        "origin": [0,0,0],
        "target": [255,255,255],
    },
    {
        "expected": 441.6729559300637,
        "origin": [255,255,255],
        "target": [0,0,0],
    },
] as Array<{"expected": number, "origin": RGB, "target": RGB}>;
// tslint:enable:max-line-length
describe("euclideanDistance [unit]", () => {
    tests.forEach(({ expected, origin, target }) => {
        it(`${origin} -> ${target} should equal ${expected}`, () => {
            expect(euclideanDistance(origin, target)).toBe(expected);
        });
    });
});
