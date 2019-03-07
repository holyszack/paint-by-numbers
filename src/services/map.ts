export const map = <T, U>(method: (input: T) => U) => (input: T) => method(input);
