import blobStream from "blob-stream";
import { writeImage } from "./write_image";
import { Observable } from "rxjs";

export function createUrlFromImageContents(contents: {
    "data": Buffer;
    "height": number;
    "width": number;
}): Observable<string> {
    return new Observable((subscriber) => {
        const stream = blobStream();
        writeImage(contents)
            .pipe(stream)
            .on("finish", () => {
                const newImageUrl = stream.toBlobURL();
                subscriber.next(newImageUrl);
                subscriber.complete();
            })
            .on("error", (err) => {
                subscriber.error(err);
            });
    });
}
