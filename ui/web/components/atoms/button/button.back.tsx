/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

/** vectors */
import { ChevronLeft } from "@svg/regular";

import {
  web,
  theme,
} from "@airbnb/design/src/components/atoms/button/button.back";

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
