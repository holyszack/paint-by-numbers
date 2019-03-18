export const pixelize = (img: number[][], value: number, index: number) => {
    if (index % 4 === 0) {
        img.push([value]);
    } else if (index % 4 !== 3) {
        img[img.length - 1].push(value);
    }
    return img;
};
