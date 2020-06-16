import { hsvToRgb } from "./hsv_to_rgb";
import { depixelize } from "./depixelize";

export function generateImageFromPalette(
    sourcePalette: [number, number, number][],
    targetPalette: [number, number, number][],
    pixels: number[][],
    paletteMap: (color: [number, number, number]) => [number, number, number],
) {
    const rgbPalette = targetPalette
        .map((pixel) => hsvToRgb([...pixel, 255]));
    const pixelConverter = (color: [number, number, number]) => rgbPalette[sourcePalette.indexOf(paletteMap(color))];

    return Buffer.from((pixels as [number, number, number][])
        .map(pixelConverter)
        .reduce(depixelize, []));
}
