import React from "react";

/** components */
import { Input } from "../../../components/atoms/input/input.component";
import { Layout } from "../../../layout/layout.component";

/** props */
import { BedroomsCreateProps } from "./props";

/** styles **/
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";

export const BedroomsCreate: React.FC<BedroomsCreateProps> = ({
  data,
  setData,
}) => {
  return (
    <div>
      <div className={[space["m-b--45"]].join(" ")}>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          Describe your place to guests
        </h3>
      </div>
      <div className={[space["m-b--45"]].join(" ")}>
        <p className={[font["size--14"], color["c--gray__2"]].join(" ")}>
          Mention the best features of your space, any special amenities like
          fast wifi or parking, and what you love about the neighbourhood.
        </p>
      </div>
      <div style={{ width: 300 }} className={[space["m-b--30"]].join(" ")}>
        <div className={[space["m-b--8"]].join(" ")}>text area</div>
      </div>
    </div>
  );
};
