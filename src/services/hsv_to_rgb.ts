export const hsvToRgb = ([h, s, v, ...a]: number[]) => {
    const hue = h;
    const sat = s / 100;
    const val = v / 100;
    const chroma = val * sat;
    const hPrime = hue / 60;
    const x = chroma * (1 - Math.abs(hPrime % 2 - 1));
    const m = val - chroma;
    const [r, g, b] = hPrime <= 1
        ? [chroma, x, 0]
        : hPrime <= 2
            ? [x, chroma, 0]
            : hPrime <= 3
                ? [0, chroma, x]
                : hPrime <= 4
                    ? [0, x, chroma]
                    : hPrime <= 5
                        ? [x, 0, chroma]
                        : hPrime <= 6
                            ? [chroma, 0, x]
                            : [0, 0, 0];
    return [
        Math.round(255 * (r + m)),
        Math.round(255 * (g + m)),
        Math.round(255 * (b + m)),
        ...a,
    ];
};
