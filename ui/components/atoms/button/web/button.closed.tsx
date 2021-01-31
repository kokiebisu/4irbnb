/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { closed } from "../styles";
import { CheckPlain, Close } from "../../../public/svg/original";

const { web, theme } = closed;

export const ClosedButton: React.FC<{
  selected?: boolean;
  content?: string;
}> = ({ content = "close", selected = false }) => {
  const contents: { [content: string]: JSX.Element } = {
    close: (
      <Close
        width={16}
        fill={selected}
        stroke={selected ? "white" : "black"}
        strokeWidth={2}
      />
    ),
    check: (
      <CheckPlain
        width={16}
        fill={selected}
        stroke={selected ? "white" : "black"}
        strokeWidth={2}
      />
    ),
  };
  return (
    <div css={web.wrapper} sx={selected ? theme.selected : theme.unselected}>
      {contents[content]}
    </div>
  );
};
