/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { nearby } from "../styles/button.nearby";

const { web, theme } = nearby;

export const NearbyButton: React.FC<{ label?: string }> = ({
  label = "Nearby",
}) => {
  return (
    <div css={web.wrapper}>
      <div css={web.label.wrapper}>
        <h4 css={web.label.text}>{label}</h4>
      </div>
    </div>
  );
};
