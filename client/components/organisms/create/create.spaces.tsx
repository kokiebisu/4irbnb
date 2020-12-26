import React from "react";

/** components */
import { Input } from "@input/input.component";

/** styles **/
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";

/**
 * Renders the /become-a-host/spaces page content
 */
export const SpacesCreate: React.FC<{
  data?: any;
  setData?: any;
}> = ({ data = { spaces: [] }, setData }) => {
  const modify = (type: string, params: string) => {
    if (data[type].includes(params)) {
      setData({
        ...data,
        [type]: [...data[type]].filter((element) => element !== params),
      });
    } else {
      setData({
        ...data,
        [type]: [...data[type], params],
      });
    }
  };

  return (
    <div>
      <div className={[space["m-b--12"]].join(" ")}>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          What spaces can guests use?
        </h3>
      </div>
      <div className={[space["m-b--45"]].join(" ")}>
        <p className={[font["size--16"], color["c--gray__2"]].join(" ")}>
          Include common areas, but don’t add spaces that aren’t on your
          property.
        </p>
      </div>
      <div className={[space["m-b--50"]].join(" ")}>
        {[
          {
            title: "Kitchen",
            item: "kitchen",
          },
          {
            title: "Laundry - washer",
            item: "washer",
          },
          {
            title: "Laundry - dryer",
            item: "dryer",
          },
          {
            title: "Parking",
            item: "parking",
          },
          {
            title: "Gym",
            item: "gym",
          },
          {
            title: "Pool",
            item: "Hot tub",
          },
        ].map(({ title, item }, index) => {
          return (
            <div key={index} className={[space["m-b--16"]].join(" ")}>
              <Input
                check={() => modify("spaces", item)}
                checked={data.spaces.includes(item)}
                variant="checkbox"
                title={title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
