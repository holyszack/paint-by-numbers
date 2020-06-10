import { PNG } from "pngjs";
import { Observable, Subscriber } from "rxjs";

export const readImage = (data: string | Buffer): Observable<PNG> => Observable.create((obs: Subscriber<PNG>) => {
    const png = new PNG({ "filterType": -1 });

    if (!(typeof data === "string") && !(data instanceof Buffer)) {
        obs.error(new Error("`data` must be an instance of string or Buffer."));
        return;
    }
    return png.parse(data, (err, results) => {
        if (err) {
            obs.error(err);
        } else {
            obs.next(results);
        }
        obs.complete();
    });
});
