/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { CheckPlain } from "../../../public/svg/original";

export const CheckBullet: React.FC<{ title?: string }> = ({
  title = "Title here",
}) => {
  return (
    <div css={{ display: "flex", alignItems: "center" }}>
      <div css={{ marginRight: "8px" }}>
        <CheckPlain width={24} strokeWidth={2} stroke="green" />
      </div>
      <div>
        <h4 sx={{ color: "grey.600" }} css={{ fontSize: 18 }}>
          {title}
        </h4>
      </div>
    </div>
  );
};
