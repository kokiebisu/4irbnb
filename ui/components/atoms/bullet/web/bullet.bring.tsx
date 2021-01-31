/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { CheckInverse } from "../../../public/svg/original";

/**
 * Renders the bring bullet
 * @param {string} title - Description of the bullet
 */
export const BringBullet: React.FC<{
  title?: string;
}> = ({ title = "Description here" }) => {
  return (
    <div css={{ display: "flex" }}>
      <div css={{ marginRight: "16px" }}>
        <CheckInverse width={24} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};
