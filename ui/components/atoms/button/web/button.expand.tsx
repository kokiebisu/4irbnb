/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ChevronRight } from "../../../public/svg/regular";
import { expand } from "../styles";

const { web } = expand;

/**
 * Renders the expand button
 * @param {string} to - Redirects to the path being specified
 * @param {string} title - Title of the button
 */
export const ExpandButton: React.FC<{ to?: string; title?: string }> = ({
  title = "Button",
}) => {
  return (
    <div css={web.wrapper}>
      <div>
        <u css={web.label.text}>{title}</u>
      </div>
      <div>
        <ChevronRight width={14} stroke="black" strokeWidth={5} />
      </div>
    </div>
  );
};
