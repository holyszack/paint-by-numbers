import { RGB } from "../types/rgb";
import { weightedKMeans, WeightedKMeans } from "./weighted_k_means";

const tests = [
    {
        "checks": [
            { "input": [0, 0, 0], "output": [0, 0, 0] },
            { "input": [255, 255, 255], "output": [255, 255, 255] },
        ],
        "expected": [[0, 0, 0], [255, 255, 255]],
        "partitions": 2,
        "value": new Map([
            ["0,0,0", 3],
            ["255,255,255", 1],
        ]),
    },
    {
        "checks": [
            { "input": [0, 0, 0], "output": [25, 0, 0] },
            { "input": [100, 0, 0], "output": [25, 0, 0] },
            { "input": [255, 255, 255], "output": [255, 255, 255] },
        ],
        "expected": [[25, 0, 0], [255, 255, 255]],
        "partitions": 2,
        "value": new Map([
            ["0,0,0", 3],
            ["100,0,0", 1],
            ["255,255,255", 3],
        ]),
    },
] as Array<{
    "checks": Array<{ "input": [number, number, number]; "output": number[] }>;
    "expected": RGB[];
    "partitions": number;
    "value": Map<string, number>;
}>;

const { error } = console;
describe("weightedKMeans [unit]", () => {
    tests.forEach(({ checks, expected, partitions, value }) => {
        it(`${value} should equal ${expected}`, (done) => {
            const results: WeightedKMeans[] = [];
            weightedKMeans(2)(value).subscribe(
                (a) => { results.push(a); },
                (a) => { error(a); done(); },
                () => {
                    const sut = results[results.length - 1];
                    expect(sut).toEqual({
                        complete: true,
                        palette: expected,
                        paletteMap: expect.any(Function),
                        partitions,
                        progress: partitions,
                    });
                    checks.forEach(({ input, output }) => {
                        expect(sut.palette[sut.paletteMap(input)]).toEqual(output);
                    });
                    done();
                },
            );
        });
    });
});
