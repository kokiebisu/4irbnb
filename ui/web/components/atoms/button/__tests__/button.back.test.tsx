import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "..";
import * as buttonVariant from "@button/variants";

describe("back button", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Button variant={buttonVariant.BACK} onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("back-button--atom")).toHaveTextContent("Back");
  });
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} variant={buttonVariant.BACK} />);
    fireEvent.click(screen.getByText(/Back/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
