/** styles */
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";

/** components */
import { Animation } from "@animation";

/**
 * Renders the primary button component
 * @param {string} title - Title of the button
 * @param {string} size - Size of the button
 * @param {string} fill - Any custom color you want to add
 * @param {boolean} loading - Show the loading animation if true
 * @param {boolean} disable - Shows gray appearance and disabled users from pressing
 */
export const PrimaryButton: React.FC<{
  title?: string;
  size?: string;
  fill?: string;
  loading?: boolean;
  disable?: boolean;
}> = ({
  title = "Button",
  size = "md",
  fill,
  loading = false,
  disable = false,
}) => {
  const renderBackgroundColor = () => {
    if (disable) {
      return [color["bg--white__3"]].join(" ");
    }
    return !fill && !disable && [color["bg--primary"]].join(" ");
  };

  const styles = {
    common: [color["c--white"], shape["w--full"], shape["br--8"]].join(" "),
    sm: [font["size--14"], space["p-v--8"], space["p-h--14"]].join(" "),
    md: [font["size--16"], space["p-v--14"], space["p-h--20"]].join(" "),
    lg: [font["size--16"], space["p-v--14"], space["p-h--20"]].join(" "),
  };

  return (
    <div
      style={{ backgroundColor: !disable && fill }}
      className={`${styles["common"]} ${
        styles[size]
      } ${renderBackgroundColor()}`}
    >
      {loading ? (
        <div>
          <Animation
            extendsTo={[
              layout["flex"],
              layout["items-center"],
              layout["justify-center"],
            ].join(" ")}
            type="loading"
          />
        </div>
      ) : (
        <h4 className={[color["c--white"]].join(" ")}>{title}</h4>
      )}
    </div>
  );
};
