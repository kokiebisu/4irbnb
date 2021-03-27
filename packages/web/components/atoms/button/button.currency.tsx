import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import animation from "@styles/animation.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";

export const CurrencyButton: React.FC<{
  name?: string;
  abbreviation?: string;
  symbol?: string;
}> = ({ name, abbreviation, symbol }) => {
  return (
    <div
      className={[
        space["p--12"],
        shape["br--8"],
        animation["hover-background--white__1"],
      ].join(" ")}
    >
      <div>
        <p className={[font["size--14"], color["c--black"]].join(" ")}>
          {name}
        </p>
      </div>
      <div>
        <p className={[font["size--14"], color["c--gray__1"]].join(" ")}>
          <span>{abbreviation}</span>
          <span> - </span>
          <span>{symbol}</span>
        </p>
      </div>
    </div>
  );
};
