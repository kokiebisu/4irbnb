/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flag } from "../../../public/svg/original";
import { report } from "../styles";

const { web } = report;

export const ReportButton: React.FC<{}> = () => {
  return (
    <div css={web.wrapper}>
      <div css={web.icon.wrapper}>
        <Flag width={16} />
      </div>
      <div>
        <h3 css={web.label.text}>Report this listing</h3>
      </div>
    </div>
  );
};
