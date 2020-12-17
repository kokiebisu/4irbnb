import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "../button.component";
import {
  privacy,
  menu,
  transparent,
  globe,
  border,
  banner,
} from "../button.stories";
import { ContextProvider } from "../../../../context/provider";

describe("Base Button", () => {
  it("renders correctly for transparent button", () => {
    const { getByTestId } = render(
      <Button {...transparent.args} onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("button--transparent")).toHaveTextContent("Button");
  });
  it("renders correctly for globe button", () => {
    const { getByTestId } = render(
      <ContextProvider>
        <Button {...globe.args} onClick={() => console.log("clicked")} />
      </ContextProvider>
    );
    expect(getByTestId("button--globe")).toHaveTextContent("LanguageRegion");
  });
  it("renders correctly for menu button", () => {
    const { getByTestId } = render(
      <ContextProvider>
        <Button {...menu.args} onClick={() => console.log("clicked")} />
      </ContextProvider>
    );
    expect(getByTestId("button--menu")).toHaveTextContent("");
  });
  it("renders correctly for privacy button", () => {
    const { getByTestId } = render(
      <ContextProvider>
        <Button {...privacy.args} onClick={() => console.log("clicked")} />
      </ContextProvider>
    );
    expect(getByTestId("button--privacy")).toHaveTextContent("Button");
  });
  it("renders correctly for border button", () => {
    const { getByTestId } = render(
      <Button {...border.args} onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("button--border")).toHaveTextContent("Button");
  });
  it("renders correctly for banner button", () => {
    const { getByTestId } = render(
      <Button {...banner.args} onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("button--banner")).toHaveTextContent("Button");
  });
});
