export function dotReduce<T>(reducer: (a: T, b: T) => T) {
    return (sources: T[][]): T[] =>
        sources.reduce((output: T[], input: T[]) =>
            output.map((item, index) =>
                reducer(item, input[index])
            )
        );
}
