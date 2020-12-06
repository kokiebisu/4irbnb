import React from "react";

/** components */
import { Input } from "../../../components/atoms/input/input.component";
import { Layout } from "../../../layout/layout.component";

/** styles **/
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";

export const DescriptionCreate: React.FC<{ data?: any; setData?: any }> = ({
  data,
  setData,
}) => {
  return (
    <div>
      <div className={[space["m-b--12"]].join(" ")}>
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
      <div className={[space["m-b--30"]].join(" ")}>
        <div className={[space["m-b--8"]].join(" ")}>
          <Input
            type="textarea"
            limit={500}
            value={data.description}
            handleChange={(e) =>
              setData({ ...data, description: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};
