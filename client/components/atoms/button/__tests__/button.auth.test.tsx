import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "../../button/button.component";
import { auth } from "../../button/button.stories";

describe("auth button", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Button {...auth.args} onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("button--auth")).toHaveTextContent(
      "Continue with Email"
    );
  });
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button {...auth.args} onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Continue with Email/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
