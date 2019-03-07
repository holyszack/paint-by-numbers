export const getFirstFile = <T>(event: React.ChangeEvent<HTMLInputElement>): File => {
    if (!event.currentTarget.files) {
        throw Error("No File Selected");
    }
    return event.currentTarget.files[0];
}
