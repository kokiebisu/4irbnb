/** styles **/
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import button from "@button/button.module.scss";

/**
 * Renders the filter button
 * @param {string} name - Name of the filter button
 */
export const FilterButton: React.FC<{ label?: string; inverse?: boolean }> = ({
  label = "Button",
  inverse = false,
}) => {
  return (
    <div
      className={`${
        inverse
          ? [button["hover__filter"]].join(" ")
          : [shape["b--transparent"], color["bg--white__1"]].join(" ")
      } ${[
        font["no-wrap"],
        space["p-v--8"],
        space["p-h--14"],
        shape["br--20"],
      ].join(" ")}`}
    >
      <p className={[font["size--15"]].join(" ")}>{label}</p>
    </div>
  );
};
