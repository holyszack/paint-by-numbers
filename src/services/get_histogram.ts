export const getHistogram = <T>(input: T[]): Map<T, number> => input.reduce(
    (histogram, value) => {
        histogram.set(value, (histogram.get(value) || 0) + 1);
        return histogram;
    },
    new Map<T, number>(),
);
