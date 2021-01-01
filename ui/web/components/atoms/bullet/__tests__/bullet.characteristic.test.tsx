import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Bullet } from "@bullet";
import { Characteristic } from "@bullet/bullet.stories";

describe("Characteristic Button", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Bullet {...Characteristic.args} onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("characteristic-bullet--atom")).toBeInTheDocument();
  });
});
