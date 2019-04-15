import { sourceEpic } from "./source_epic";
import { setSourceFile, sendMessage, setSourcePath, setSourcePreviewUrl, setSourceContents } from "../actions";
import { from, Observable } from "rxjs";
import { createObjectUrl } from "../services/create_object_url";
import { Action } from "../types/action";
import fs from "fs";
import { fsToPng } from "../services/fs_to_png";
import { PNG } from "pngjs";

const blob = new Blob([Uint8Array.from(fs.readFileSync("./coverage/test.png"))]);
// @ts-ignore
blob.name = "hey";
jest.mock("../services/create_object_url");

const { log, error } = console;
describe("sourceEpic", () => {
    let png: PNG;
    const tests: Array<{
        "actions": Observable<Action>,
        "expected": (png: PNG) => Action[],
        "title": string;
        "url": string;
    }> = [
            {
                "actions": from([
                    setSourceFile(blob as File),
                ]),
                "expected": (png) => [
                    sendMessage("hey"),
                    setSourcePath("hey"),
                    setSourcePreviewUrl("something"),
                    setSourceContents(png),
                ],
                "title": "should",
                "url": "something",
            },
        ];
    beforeAll(async () => {
        png = await fsToPng({ "filename": "/Users/zholyszko/Documents/apps/holyszack/paint-by-numbers/coverage/test.png" });
    });
    it("", () => expect(true).toBe(true));
    tests.forEach(({ actions, expected, title, url }) => {
        it(title, (done) => {
            (createObjectUrl as jest.Mock).mockImplementation(() => url);
            const results: Action[] = [];
            sourceEpic(actions).subscribe(
                (a) => { results.push(a); },
                (a) => { error(a); done(); },
                () => {
                    expect(results).toEqual(expected(png));
                    done();
                },
            );
        });
    });
});
