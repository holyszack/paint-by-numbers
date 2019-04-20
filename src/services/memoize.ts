export function memoize<T>(method: (...args: any) => T) {
    const cache = new Map();
    return (...args: any) => {
        const key = args.toString();
        const found = cache.get(key);
        if (typeof found === "undefined") {
            const output = method(...args);
            cache.set(key, output);
            return output;
        } else {
            return found;
        }
    }
}
