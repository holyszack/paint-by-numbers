export const textInput = (update: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
        update(e.target.value);
