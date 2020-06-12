import { merge, Subject, from } from "rxjs";

export const observableFactory = <T>(initialValue?: T) => {
    const observable = new Subject<T>();
    const update = observable.next.bind(observable);
    return [merge(observable, from([initialValue])), update] as const;
};
