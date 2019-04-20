export function stopwatch() {
    let last = Date.now();
    const durations: number[] = [];
    return {
        last, durations, lap: () => {
            const newTime = Date.now();
            durations.push(newTime - last);
            last = newTime;
        }
    }
};
