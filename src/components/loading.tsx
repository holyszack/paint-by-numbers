import { Backdrop, CircularProgress } from "@material-ui/core";
import React from "react";

export function Loading({ loading }: { loading: boolean }) {
    return (
        <Backdrop open={loading} style={{ "zIndex": 1600 }}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
