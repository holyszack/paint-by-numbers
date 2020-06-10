import React from "react";

export function Image({ alt, src }: { "alt": string; "src": string }) {
    return (
        <img src={src} alt={alt} style={{ "maxWidth": "100%" }} />
    );
}
