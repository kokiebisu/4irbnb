import React from "react";
import { screen, fireEvent, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "@button";
import * as $button from "@button/variants";

afterEach(cleanup);

describe("banner button", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Button variant={$button.BANNER} onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("banner-button--atom")).toHaveTextContent("Button");
  });

  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button variant={$button.BANNER} onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Button/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("rerenders correctly with prop change", () => {
    const { getByText, rerender } = render(
      <Button variant={$button.BANNER} title="Previous" />
    );
    getByText("Previous");
    rerender(<Button variant={$button.BANNER} title="After" />);
    getByText("After");
  });
});
