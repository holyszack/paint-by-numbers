export function mapToObjectArray<K, V>(map: Map<K, V>) {
    const results: Array<{key: K, value: V}> = [];
    map.forEach((value, key) => results.push({key, value}));
    return results;
}
