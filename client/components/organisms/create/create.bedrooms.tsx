import React, { useState } from "react";

/** Components */
import { Input } from "../../../components/atoms/input/input.component";
import { Layout } from "../../../layout/layout.component";

/** Props */
import { BedroomsCreateProps } from "./props";

/** Styles */
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
          How many guests can your place accommodate?
        </h3>
      </div>
      <div className={[space["m-b--45"]].join(" ")}>
        <p className={[font["size--14"], color["c--gray__2"]].join(" ")}>
          Check that you have enough beds to accomodate all your guests
          comfortably.
        </p>
      </div>
      <div style={{ width: 250 }} className={[space["m-b--22"]].join(" ")}>
        input directly
      </div>
      <div className={[space["m-b--8"]].join(" ")} style={{ width: 250 }}>
        <Layout type="input" title="How many bedrooms can guests use?"></Layout>
      </div>
      <div className={[space["m-b--8"]].join(" ")} style={{ width: 250 }}>
        <Layout type="input" title="How many beds can guests use?"></Layout>
      </div>
    </div>
  );
};
