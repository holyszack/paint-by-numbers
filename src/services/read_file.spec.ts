import { readFile } from "./read_file";
import fs from "fs";

// tslint:disable:max-line-length
const tests = [
    {
        "expected": "",
        "value": new Blob([Uint8Array.from(fs.readFileSync("./coverage/test.png"))]),
    },
];
// tslint:enable:max-line-length
describe("readFile [unit]", () => {
    tests.forEach(({ expected, value }) => {
        it(`${value} should equal ${expected}`, (done) => {
            const results: Buffer[] = [];
            readFile(value).subscribe(
                (a) => results.push(a),
                (e) => { console.error(e); done(); },
                () => {
                    expect(results).toMatchSnapshot();
                    done();
                },
            );
        });
    });
});
