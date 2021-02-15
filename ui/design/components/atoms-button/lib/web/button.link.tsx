/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { link } from "../styles/button.link";

const { web, theme } = link;

export const LinkButton: React.FC<{ title?: string }> = ({
  title = "Button",
}) => {
  return (
    <div>
      <h4 css={web.label.text}>{title}</h4>
    </div>
  );
};
