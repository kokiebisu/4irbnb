/** styles **/
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";

/** vectors */
import { getParticipateContent } from "./logic/logic.participate";

/**
 * Renders the participate card component
 * @param {string} categoryType - Type of participate card
 */
export const ParticipateCard: React.FC<{
  categoryType?: string;
}> = ({ categoryType = "call" }) => {
  const participates = getParticipateContent();
  return (
    <div
      className={[
        shape["min-h--300"],
        shape["w--210"],
        shape["h--full"],
        space["p--16"],
        color["b--white__2"],
        shape["br--6"],
      ].join(" ")}
    >
      <div className={[space["m-v--12"]].join(" ")}>
        {participates[categoryType].icon}
      </div>
      <div className={[space["m-b--12"]].join(" ")}>
        <h3 className={[font["size--16"]].join(" ")}>
          {participates[categoryType].title}
        </h3>
      </div>
      <div className={[space["m-b--12"]].join(" ")}>
        <p className={[font["size--14"]].join(" ")}>
          {participates[categoryType].description}
        </p>
      </div>
      {participates[categoryType].more && (
        <div>
          <h3 className={[font["size--16"]].join(" ")}>
            <u>{participates[categoryType].more}</u>
          </h3>
        </div>
      )}
    </div>
  );
};
