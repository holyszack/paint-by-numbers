export function stopwatch(name?: string) {
    let last = Date.now();
    const durations: string[] = [];
    return {
        last, durations, lap: (title?: string) => {
            const newTime = Date.now();
            durations.push(`${title} ${newTime - last}`);
            last = newTime;
        }
    };
};
