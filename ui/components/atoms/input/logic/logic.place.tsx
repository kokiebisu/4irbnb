/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export const Properties = [
  "Apartment",
  "House",
  "Secondary unit",
  "Unique space",
  "Bed and breakfast",
  "Boutique hotel",
];

export const Options = Properties.map((option, index) => {
  return (
    <option key={index} value={option}>
      {option}
    </option>
  );
});
