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
      <div>Report this listing</div>
    </div>
  );
};
