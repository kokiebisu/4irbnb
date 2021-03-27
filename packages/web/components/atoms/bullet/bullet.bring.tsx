/** styles **/
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";

/** vectors */
import { CheckInverse } from "@svg/original";

/**
 * Renders the bring bullet
 * @param {string} title - Description of the bullet
 */
export const BringBullet: React.FC<{
  title?: string;
}> = ({ title = "Description here" }) => {
  return (
    <div className={[layout["flex"]].join(" ")}>
      <div className={[space["m-r--16"]].join(" ")}>
        <CheckInverse width={24} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};
