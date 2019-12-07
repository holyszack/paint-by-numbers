import { cachingTransformer } from "./caching_transformer";
import { rgbToHsl } from "./rgb_to_hsl";
import { arrayKeyNormalizer } from "./array_key_normalizer";
// tslint:disable:max-line-length
const tests = [
    {
        "expected": [[0, 0, 0], [0, 0, 0], [0, 0, 100]],
        "normalize": arrayKeyNormalizer,
        "sets": [[0, 0, 0], [0, 0, 100]],
        "transform": rgbToHsl,
        "values": [[0, 0, 0], [0, 0, 0], [255, 255, 255]],
    },
];
// tslint:enable:max-line-length
describe("cachingTransformer [unit]", () => {
    tests.forEach(({ expected, normalize, sets, transform, values }) => {
        it(`${values} should equal ${expected}`, () => {
            const store = new Map();
            const get = jest.fn((key) => store.get(key));
            const set = jest.fn((k, v) => store.set(k, v));
            const cache = { get, set } as any;
            const transformer = jest.fn(transform);
            const normalizer = jest.fn(normalize);
            const results = values
                .map(cachingTransformer<number[], string, number[]>({ cache, normalizer, transformer }));
            expect(results).toEqual(expected);
            expect(set).toBeCalledTimes(sets.length);
            expect(transformer).toHaveBeenCalledTimes(sets.length);
        });
    });
});
