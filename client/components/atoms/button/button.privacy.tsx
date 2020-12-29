/** styles **/
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import responsive from "@styles/responsive.module.scss";

/**
 * Renders the privacy button component
 * @param {string} title - Title of the button
 * @param {boolean} inverse - Whether if the button takes the inverse style or not
 */
export const PrivacyButton: React.FC<{ title?: string; inverse?: boolean }> = ({
  title = "Button",
  inverse = false,
}) => {
  return (
    <div
      className={`${[
        responsive["b_to_f--sm"],
        font["no-wrap"],
        space["p-v--13"],
        space["p-h--18"],
        font["weight--500"],
        shape["br--8"],
        shape["w--full"],
        shape["min-w--150"],
        font["size--15"],
        layout["justify-center"],
      ].join(" ")} ${
        inverse
          ? [color["bg--gray__4"], color["b--transparent"]].join(" ")
          : [color["bg--transparent"], color["b--black"]].join(" ")
      }`}
    >
      <h4
        className={
          inverse
            ? [color["c--white"]].join(" ")
            : [color["c--black"]].join(" ")
        }
      >
        {title}
      </h4>
    </div>
  );
};
