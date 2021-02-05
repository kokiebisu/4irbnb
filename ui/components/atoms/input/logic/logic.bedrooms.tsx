/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export const Options = [1, 2, 3, 4, 5, 6, 7, 8].map((option, index) => {
  return (
    <option key={index} value={option}>
      {index > 0 ? `${option} ${index > 0 ? "guests" : "guest"}` : "Studio"}
    </option>
  );
});
