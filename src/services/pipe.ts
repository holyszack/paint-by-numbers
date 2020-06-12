const noop = <T, U>(input: T) => input as unknown as U;

export function pipe<T, U, V>(
    first: (input: T) => U,
    second: (input: U) => V,
): (input: T) => V
export function pipe<T, U, V, W>(
    first: (input: T) => U,
    second: (input: U) => V,
    third: (input: V) => W,
): (input: T) => W
export function pipe<T, U, V, W, X>(
    first: (input: T) => U,
    second: (input: U) => V,
    third: (input: V) => W,
    forth: (input: W) => X,
): (input: T) => X
export function pipe<T, U, V, W, X, Y>(
    first: (input: T) => U,
    second: (input: U) => V,
    third: (input: V) => W,
    forth: (input: W) => X,
    fifth: (input: X) => Y,
): (input: T) => Y
export function pipe<T, U, V, W, X, Y, Z>(
    first: (input: T) => U,
    second: (input: U) => V,
    third: (input: V) => W,
    forth: (input: W) => X,
    fifth: (input: X) => Y,
    sixth: (input: Y) => Z,
): (input: T) => Z
export function pipe<T>(
    first = noop,
    second = noop,
    third = noop,
    forth = noop,
    fifth = noop,
    sixth = noop,
) {
    return (input: T) => sixth(fifth(forth(third(second(first(input))))));
} 
