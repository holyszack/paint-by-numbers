export function indexMap<T, K, I, V>({ ranker, transformer, normalizer }: {
    "ranker": (a: T[]) => (b: I) => V;
    "transformer": (a: T) => I;
    "normalizer": (a: T) => K;
}) {
    return ({ source, target }: { source: T[]; target: T[] }) => {
        const cache = new Map<K, V>();
        const rank= ranker(target);
        source
            .map((item) => {
                const key = normalizer(item);
                const found = cache.get(key);
                if (found) {
                    return found;
                } else {
                    const value = rank(transformer(item));
                    cache.set(key, value);
                    return value;
                }
            });
        return cache;
    };
}
