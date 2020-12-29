import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Bullet } from "../bullet.component";
import { characteristic } from "../bullet.stories";

describe("Base Button", () => {
  it("renders correctly for host button", () => {
    const { getByTestId } = render(
      <Bullet {...characteristic.args} onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("characteristic-bullet")).toBeInTheDocument();
  });
});
