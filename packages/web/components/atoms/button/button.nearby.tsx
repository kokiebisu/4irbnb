/** styles */
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";
import animation from "@styles/animation.module.scss";

export const NearbyButton: React.FC<{ label?: string }> = ({
  label = "Nearby",
}) => {
  return (
    <div
      className={[
        space["p--3"],
        animation["hover-border--gray__4"],
        color["b--transparent"],
        shape["br--10"],
      ].join(" ")}
    >
      <div
        className={[
          color["b--white__3"],
          space["p-h--15"],
          space["p-v--10"],
          shape["br--10"],
        ].join(" ")}
      >
        <h4 className={[font["size--12"]].join(" ")}>{label}</h4>
      </div>
    </div>
  );
};
