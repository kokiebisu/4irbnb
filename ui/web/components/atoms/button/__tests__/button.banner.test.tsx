import React from "react";
import { screen, fireEvent, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "@button";

afterEach(cleanup);

describe("banner button", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Button variant="banner" onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("banner-button--atom")).toHaveTextContent("Button");
  });

  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button variant="banner" onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Button/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("rerenders correctly with prop change", () => {
    const { getByText, rerender } = render(
      <Button variant="banner" title="Previous" />
    );
    getByText("Previous");
    rerender(<Button variant="banner" title="After" />);
    getByText("After");
  });
});
