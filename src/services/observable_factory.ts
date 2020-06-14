import { BehaviorSubject } from "rxjs";

export function observableFactory<T>(initialValue: T): readonly [BehaviorSubject<T>, (value: T) => void];
export function observableFactory<T>(): readonly [BehaviorSubject<T | undefined>, (value: T) => void];
export function observableFactory<T>(initialValue?: T) {
    const observable = new BehaviorSubject(initialValue);
    const update = observable.next.bind(observable);
    return [observable, update] as const;
};
