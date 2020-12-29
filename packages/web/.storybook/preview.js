import "../styles/global.scss";
import { ContextProvider } from "../context/provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ContextProvider>
      <Story />
    </ContextProvider>
  ),
];
