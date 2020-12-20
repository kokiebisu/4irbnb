import React from "react";
import { screen, fireEvent, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "@button/button.component";
import { banner } from "@button/button.stories";

afterEach(cleanup);

describe("banner button", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Button {...banner.args} onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("button--banner")).toHaveTextContent("Button");
  });

  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button {...banner.args} onClick={handleClick} />);
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
