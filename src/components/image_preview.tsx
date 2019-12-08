import { Segment, Progress, Image } from "semantic-ui-react";
import * as React from "react";
import imagePlaceholder from "../images/placeholder.png";
import { Palette } from "../types/palette";

export type ImagePreviewProps = {
    palette: Palette;
    previewUrl?: string;
    progress?: number;
};

export function ImagePreview({ palette, previewUrl, progress }: ImagePreviewProps) {
    return (
        <Segment>
            <Image src={previewUrl || imagePlaceholder} fluid centered />
            {typeof progress === "number"
                ? <Progress percent={progress} indicating />
                : undefined
            }
            {palette
                ? <Segment.Group>
                    {palette.map((item) => (
                        <Segment.Group
                            horizontal
                            compact
                            key={`source-${item}`}
                            style={{
                                "backgroundColor": `hsl(${item[0]},${item[1]}%,${item[2]}%)`,
                                "color": item[2] < 50 ? "white" : "black",
                            }}
                        >
                            <Segment floated="left" compact>{item[0]}</Segment>
                            <Segment compact>{item[1]}%</Segment>
                            <Segment floated="right" compact>{item[2]}%</Segment>
                        </Segment.Group>
                    ))}
                </Segment.Group>
                : undefined}
        </Segment>
    );
}
