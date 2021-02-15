/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ChevronLeft } from "@nextbnb/design/public/svg/regular";
import { back } from "../styles/button.back";

const { web, theme } = back;

export const BackButton: React.FC<{}> = () => {
  return (
    <div css={web.wrapper} sx={theme.wrapper}>
      <div>
        <ChevronLeft width={20} stroke="#61AFB2" strokeWidth={3} />
      </div>
      <div>
        <h4 sx={theme.label.text}>Back</h4>
      </div>
    </div>
  );
};
