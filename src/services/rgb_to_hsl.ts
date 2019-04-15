export const rgbToHsl = ([r, g, b, ...a]: number[]) => {
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const chroma = max - min;
    const hue = chroma === 0
        ? 0
        : max === r
            ? 60 * (((g - b) / chroma) % 6)
            : max === g
                ? 60 * (((b - r) / chroma) + 2)
                : max === b
                    ? 60 * (((r - g) / chroma) + 4)
                    : -1;
    const saturation = max === 0 ? 0 : 100 * chroma / max;
    const lightness = 50 * (max + min) / 255;
    const positiveHue = hue < 0 ? hue + 360 : hue;
    return [positiveHue, saturation, lightness, ...a];
};
