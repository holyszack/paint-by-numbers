const {log: write} = console;

export const log = (input: object) => {
    write(JSON.stringify(input, null, "\t"));
    return input;
};
export default log;
