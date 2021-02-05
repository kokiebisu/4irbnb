/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export const Properties = [
  { value: "USD", display: "USD United States dollar" },
];

export const Options = Properties.map(({ value, display }, index) => {
  return (
    <option key={index} value={value}>
      {display}
    </option>
  );
});
