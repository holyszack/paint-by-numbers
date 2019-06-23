export const depixelize = (img: number[], value: number[], index: number) => {
    img.push(...value);
    return img;
};
