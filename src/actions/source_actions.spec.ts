import { setSourcePath, setSourceContents } from "./source_actions";
import { PNG } from "pngjs";

describe("sourceActions [unit]", () => {
    it(`should equal`, () => {
        expect(setSourcePath("hey")).toEqual({"error": undefined, "meta": undefined, "payload": {"path": "hey"}, "type": "SET_SOURCE_PATH"});
    });
    it("should also", () => {
        const png = new PNG();
        expect(setSourceContents(png)).toEqual({"error": undefined, "meta": undefined, "payload": {data: null, height: 0, width: 0}, "type": "SET_SOURCE_CONTENTS"});
    });
});
