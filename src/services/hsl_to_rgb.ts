export const hslToRgb = ([h, s, l, a]: number[]) => {
    const chroma = (100 - Math.abs(2 * l - 100)) * s;
    const hPrime = h / 60;
    const x = chroma * (1 - Math.abs(hPrime % 2 - 1));
    const m = l * 100 - chroma / 2;
    const [r, g, b] = hPrime < 1
        ? [chroma, x, 0]
        : hPrime < 2
            ? [x, chroma, 0]
            : hPrime < 3
                ? [0, chroma, x]
                : hPrime < 4
                    ? [0, x, chroma]
                    : hPrime < 5
                        ? [x, 0, chroma]
                        : hPrime < 6
                            ? [chroma, 0, x]
                            : [0, 0, 0];
    return [
        255 * (r + m) / 10000, 
        255 * (g + m) / 10000, 
        255 * (b + m) / 10000, 
        a,
    ];
};
