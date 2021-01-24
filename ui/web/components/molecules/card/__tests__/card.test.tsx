import React from "react";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Card } from "@card";

describe("Base Button", () => {
  it("renders title correctly for host button", () => {
    const items = [{ title: "Category Title" }];
    const { getByTestId } = render(
      <Card variant="category" title={items[0].title} />
    );

    const { getByText } = within(getByTestId("category-card"));
    expect(getByText(items[0].title)).toBeInTheDocument();
  });
});
