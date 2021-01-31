import "../styles/global.scss";
import { ContextProvider } from "../context/provider";
import { ThemeProvider } from "theme-ui";
import { theme } from "@airbnb/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </ContextProvider>
  ),
];
