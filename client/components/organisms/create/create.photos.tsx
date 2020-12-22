import React from "react";

/** styles */
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";

/** components */
import { Input } from "@input/input.component";

export const PhotosCreate: React.FC<{ data?: any; setData?: any }> = ({
  data,
  setData,
}) => {
  return (
    <div>
      <div className={[space["m-b--12"]].join(" ")}>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          Liven up your listing with photos
        </h3>
      </div>
      <div className={[space["m-b--45"]].join(" ")}>
        <p className={[font["size--14"], color["c--gray__2"]].join(" ")}>
          Take photos using a phone or camera. Upload at least one photo to
          publish your listing—you can always add more or edit later.
        </p>
      </div>
      <div className={[space["m-b--30"]].join(" ")}>
        <div className={[space["m-b--8"]].join(" ")}>
          <Input
            variant="photo"
            value={data.phone}
            handleChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};
