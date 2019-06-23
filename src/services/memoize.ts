export function memoize<V extends { "toString": () => string }, T>(method: (args: V) => T) {
    const cache = new Map<string, T>();
    return (args: V) => {
        const key = args.toString();
        const found = cache.get(key);
        if (found) {
            return found;
        } else {
            const output = method(args);
            cache.set(key, output);
            return output;
        }
    }
}
