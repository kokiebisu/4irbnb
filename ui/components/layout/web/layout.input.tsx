/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

/**
 * Renders the Input which appears in the /become-a-host
 * @param {string} title - Title of the group
 */
export const InputLayout: React.FC<{
  title?: string;
}> = ({ title = "Title here", children }) => {
  return (
    <div>
      <div css={{ marginBottom: 8 }}>
        <h3 css={{ fontSize: 16 }} sx={{ color: "gray__0" }}>
          {title}
        </h3>
      </div>
      <div>{children}</div>
    </div>
  );
};
