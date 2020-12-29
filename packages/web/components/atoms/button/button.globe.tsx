/** styles */
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import animation from "@styles/animation.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";

export const GlobeButton: React.FC<{
  language?: string;
  region?: string;
  selected?: boolean;
}> = ({ language = "Language", region = "Region", selected = false }) => {
  return (
    <div
      className={`${[
        space["p--12"],
        shape["br--8"],
        animation["hover-background--white__1"],
      ].join(" ")} ${selected && color["b--black"]}`}
    >
      <div>
        <p className={[font["size--14"], color["c--black"]].join(" ")}>
          {language}
        </p>
      </div>
      <div>
        <p className={[font["size--14"], color["c--gray__1"]].join(" ")}>
          {region}
        </p>
      </div>
    </div>
  );
};
