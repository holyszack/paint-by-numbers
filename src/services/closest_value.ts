export const closestValue = <T>(set: T[], test: (a: T, b: T) => number) => (item: T): number => {
    let minimumDistance: number = undefined as unknown as number;
    let minimumIndex = 0;
    set.map((value) => test(value, item))
        .forEach((distance, index) => {
            if (distance < minimumDistance || minimumDistance === undefined) {
                minimumIndex = index;
                minimumDistance = distance;
            }
        });
    return minimumIndex;
};
