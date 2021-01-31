/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { calendar } from "../styles";

const { web } = calendar;

export const CalendarButton: React.FC<{
  disabled?: boolean;
  number?: number;
}> = ({ disabled = false, number = 0 }) => {
  return (
    <div css={web.wrapper}>
      <div
        css={{
          ...web.label.wrapper,
          ...(disabled && web.disabled.label.wrapper),
        }}
      >
        <h3 css={{ ...web.label.text, ...web.disabled.label.text }}>
          {number}
        </h3>
      </div>
    </div>
  );
};
