import React from "react";

/** components */
import { Input } from "../../atoms/input/input.component";
import { Layout } from "../../../layout/layout.component";

/** styles **/
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";

export const PhoneCreate: React.FC<{ data?: any; setData?: any }> = ({
  data,
  setData,
}) => {
  return (
    <div>
      <div className={[space["m-b--12"]].join(" ")}>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          Add your mobile number
        </h3>
      </div>
      <div className={[space["m-b--45"]].join(" ")}>
        <p className={[font["size--14"], color["c--gray__2"]].join(" ")}>
          We'll send you booking requests, reminders, and other notifications.
          This number should be able to receive texts or calls.
        </p>
      </div>
      <div className={[space["m-b--30"]].join(" ")}>
        <div className={[space["m-b--8"]].join(" ")}>
          <Input
            type="verify"
            value={data.phone}
            handleChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};
