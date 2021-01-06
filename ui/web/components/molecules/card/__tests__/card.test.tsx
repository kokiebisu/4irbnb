import React from "react";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Card } from "@card";
import { Category } from "@card/card.stories";
import { categories } from "@airbnb/content";

describe("Base Button", () => {
  it("renders title correctly for host button", () => {
    const { getByTestId } = render(
      <Card variant="category" title={categories[0].title} />
    );

    const { getByText } = within(getByTestId("category-card"));
    expect(getByText("Host your home")).toBeInTheDocument();
  });
});
