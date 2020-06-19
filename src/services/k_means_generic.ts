import { closestValue } from "./closest_value";
import { memoize } from "./memoize";

export const kMeansGeneric = <T>({
    distance,
    generateGuess,
    partitions,
    population,
    reducer,
    resultsUnchanged,
}: {
    "distance": (a: T, b: T) => number;
    "generateGuess": () => T;
    "partitions": number;
    "population": T[];
    "reducer": (input: T[]) => T;
    "resultsUnchanged": (previous: T[], current: T[]) => boolean;
}) => {
    let guesses = Array.from({ "length": partitions }).map(() => generateGuess());
    let results: T[];
    do {
        results = guesses;
        const closestResult = memoize(closestValue(results, distance));
        const newResults = population
            .reduce(
                (acc, item) => {
                    acc[closestResult(item)].push(item);
                    return acc;
                },
                Array.from({ "length": partitions }).map(() => []) as T[][]
            )
            .filter((items) => items.length)
            .map(reducer);
        guesses = newResults
            .concat(Array.from({ "length": partitions - newResults.length }).map(() => generateGuess()));
    } while (!resultsUnchanged(guesses, results));
    return results;
};
