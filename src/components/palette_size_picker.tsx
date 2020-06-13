import { Slider } from "@material-ui/core";
import React from "react";
import { paletteSize$, setPaletteSize } from "../app/palette_size";
import { useObservable } from "../services/hooks/use_observable";

export const PaletteSizePicker = () => {
    const paletteSize = useObservable(paletteSize$) || 0;
    return (
        <Slider
            aria-labelledby="discrete-slider-always"
            getAriaValueText={String}
            marks={true}
            max={64}
            min={2}
            onChange={(_, value) => setPaletteSize(typeof value === "number" ? value : value[0])}
            step={1}
            value={paletteSize}
            valueLabelDisplay="on"
        />
    );
};
