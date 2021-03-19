/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export const Properties = ["Canada", "Japan"];

export const Options = Properties.map((name, index) => {
  return (
    <option key={index} value={name}>
      {name}
    </option>
  );
});
