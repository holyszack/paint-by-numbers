export function cachingTransformer<T, K, V>({
    cache = new Map<K | T, V | T>(),
    transformer = (a) => a,
    normalizer = (a) => a,
}: {
    "cache"?: {
        "get": (key: K | T) => V | T | undefined,
        "set": (key: K | T, value: V | T) => void;
    },
    "transformer"?: (a: T) => V | T,
    "normalizer"?: (a: T) => K | T,
}) {
    return (item: T) => {
        const key = normalizer(item);
        const found = cache.get(key);
        if (found) {
            return found;
        } else {
            const value = transformer(item);
            cache.set(key, value);
            return value;
        }
    };
}
