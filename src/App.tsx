import React from 'react';
import './App.css';
import { ImagePicker } from "./components/image_picker";
import { Messages } from "./components/messages";
import { AppState } from "./types/app_state";
// import { log } from "./services/log";
import { Image, Progress, Segment, Grid, Placeholder } from "semantic-ui-react";
import { AppActions } from "./App.connect";
import { pipe } from "./services/pipe";
import { getFirstFile } from "./services/get_first_file";
import 'semantic-ui-css/semantic.min.css'
import imagePlaceholder from "./images/placeholder.png";

export const App = ({
    setSourceFile,
    source,
    target,
    messages,
}: AppState & AppActions) => {
    return (
        <Segment.Group className="App">
            <ImagePicker onChange={pipe(getFirstFile, setSourceFile)} />
            <Grid columns={2} stackable>
                <Grid.Column>
                    <Segment>
                        <Image src={source.previewUrl || imagePlaceholder} fluid centered />
                        {typeof source.progress === "number"
                            ? <Progress percent={source.progress} indicating />
                            : undefined
                        }
                        {source.palette
                            ? <Segment.Group>
                                {source.palette.map((item) => (
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
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <Image src={target.previewUrl || imagePlaceholder} fluid centered />
                    </Segment>
                </Grid.Column>
            </Grid>
            <Messages messages={messages} />
        </Segment.Group>
    );
};

export default App;
