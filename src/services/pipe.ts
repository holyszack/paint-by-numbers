export const pipe = <T, U, V>(first: (input: T) => U, second: (input: U) => V) =>
    (input: T) => second(first(input));
