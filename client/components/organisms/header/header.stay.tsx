import React from "react";

/** Props */
import { StayHeaderProps } from "./props";

/** Styles */
import space from "../../../styles/space.module.scss";
import layout from "../../../styles/layout.module.scss";
import shape from "../../../styles/shape.module.scss";
import color from "../../../styles/color.module.scss";
import font from "../../../styles/font.module.scss";

/** Vectors */
import { NoNameLogo } from "../../../public/svg/logo";

/** Components */
import { Button } from "../../../components/atoms/button/button.component";

/**
 * Renders the header for the homes page
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const StayHeader: React.FC<StayHeaderProps> = ({ title }) => {
  return (
    <header
      style={{ height: 65 }}
      className={[
        space["p-h--0"],
        color["bg--white__0"],
        shape["shadow--sm"],
      ].join(" ")}
    >
      <div className={[layout["flex"], layout["items-center"]].join(" ")}>
        <div>
          <Button
            extendsTo={[
              layout["inline-block"],
              space["p--14"],
              shape["br--circle"],
            ].join(" ")}
            to="/"
          >
            <NoNameLogo fill="#008489" width={34} />
          </Button>
        </div>
        {title && (
          <div className={[layout["relative"], layout["b--2"]].join(" ")}>
            <h4 className={[font["size--16"], color["c--gray__1"]].join(" ")}>
              {title}
            </h4>
          </div>
        )}
      </div>
    </header>
  );
};
