export function batchArray(batchSize: number) {
    return <T>(source: T[]): T[][] => {
        const output =[];
        for(let i = 0; i < source.length; i += batchSize) {
            output.push(source.slice(i, i + batchSize));
        }
        return output;
    };
}
