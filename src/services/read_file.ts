import { Observable, Subscriber } from "rxjs";

export const readFile = (file: File | Blob): Observable<Buffer> => Observable.create((obs: Subscriber<Buffer>) => {
    if (!(file instanceof File) && !(file instanceof Blob)) {
        obs.error(new Error('`blob` must be an instance of File or Blob.'));
        return;
    }

    const reader = new FileReader();

    reader.onerror = (err) => obs.error(err);
    reader.onabort = (err) => obs.error(err);
    reader.onload = () => reader.result instanceof ArrayBuffer
        ? obs.next(Buffer.from(reader.result))
        : obs.error("No Data Found");
    reader.onloadend = () => obs.complete();

    return reader.readAsArrayBuffer(file);
});
