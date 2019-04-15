export function mapCounter<T>(map: Map<T, number>, item: T) {
    return map.set(item, (map.get(item) || 0) + 1);
};
