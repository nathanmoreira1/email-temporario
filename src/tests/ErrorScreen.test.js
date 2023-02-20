import React from "react";
import { render } from "@testing-library/react";
import ErrorScreen from "../screens/Home/components/ErrorScreen";
import "@testing-library/jest-dom";

describe("ErrorScreen component", () => {
  test("renders correctly", () => {
    const { container } = render(<ErrorScreen />);
    expect(container.firstChild).toContainHTML('class="MuiBox-root"');
  });
});
