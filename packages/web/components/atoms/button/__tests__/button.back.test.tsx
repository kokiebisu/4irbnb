import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "../button.component";
import { back } from "../button.stories";

describe("back button", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Button {...back.args} onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("button--back")).toHaveTextContent("Back");
  });
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} {...back.args} />);
    fireEvent.click(screen.getByText(/Back/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
