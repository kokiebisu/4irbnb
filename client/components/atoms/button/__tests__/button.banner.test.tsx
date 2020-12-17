import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "../button.component";
import { banner } from "../button.stories";

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
});
