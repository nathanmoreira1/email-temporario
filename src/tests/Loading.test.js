import React from "react";
import { render } from "@testing-library/react";
import Loading from "../components/Loading";

describe("Loading component", () => {
  test("renders correctly", () => {
    const { container } = render(<Loading />);
    expect(container.firstChild).toHaveClass("loading-container");
  });
});
