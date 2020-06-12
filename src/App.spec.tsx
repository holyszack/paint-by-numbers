import { render } from "@testing-library/react";
import React from "react";
import { App } from "./App";
import { logger } from "./services/logger";

jest.mock("./services/logger");

describe("App", () => {
    beforeEach(() => {
        (logger as jest.Mock).mockReset();
    });
    it("renders without crashing", () => {
        expect(render(<App />).container).toMatchSnapshot();
    });
});
