import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "..";
import { Back } from "@button/button.stories";

describe("back button", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Button variant="back" onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("back-button--atom")).toHaveTextContent("Back");
  });
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} {...Back.args} />);
    fireEvent.click(screen.getByText(/Back/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
