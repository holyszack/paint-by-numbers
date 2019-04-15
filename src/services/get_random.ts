export function getRandom([min, max]: [number, number]) {
    return Math.round(Math.random() * (max - min)) + min;
}
