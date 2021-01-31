/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { filter } from "../styles";

const { web, theme } = filter;

/**
 * Renders the filter button
 * @param {string} name - Name of the filter button
 */
export const FilterButton: React.FC<{ label?: string; inverse?: boolean }> = ({
  label = "Button",
  inverse = false,
}) => {
  return (
    <div
      css={{
        ...web.wrapper,
        ...(inverse ? web.inverse.wrapper : web.plain.wrapper),
      }}
    >
      <p css={web.label.text}>{label}</p>
    </div>
  );
};
