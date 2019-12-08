import * as fs from "fs";
import * as path from "path";
import { PNG } from "pngjs";

export const fsToPng = (spec: {
    "filename": string;
}) => {
    return new Promise<PNG>((resolve, reject) => {
        const { filename } = spec;
        const png = new PNG({ "filterType": -1 });
        const src = fs.createReadStream(path.resolve(filename));
        png.on("parsed", () => {
            return resolve(png);
        });
        png.on("error", (err) => {
            return reject(err);
        });
        src.pipe(png);
    });
};
export default fsToPng;
