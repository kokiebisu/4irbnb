import React from "react";

/** components */
import { Input } from "../../../components/atoms/input/input.component";

/** styles **/
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";

export const AmenitiesCreate: React.FC<{
  data?: any;
  setData?: any;
}> = ({ data = { amenities: ["essentials"], safeties: ["kit"] }, setData }) => {
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
          What amenities do you offer?
        </h3>
      </div>
      <div className={[space["m-b--45"]].join(" ")}>
        <p className={[font["size--16"], color["c--gray__2"]].join(" ")}>
          These are just the amenities guests usually expect, but you can add
          even more after publishing.
        </p>
      </div>
      <div className={[space["m-b--50"]].join(" ")}>
        {[
          {
            title: "Essentials",
            item: "essentials",
            description: "Towels, bed sheets, soap, toilet papaer, and pillows",
          },
          {
            title: "Wifi",
            item: "wifi",
          },
          {
            title: "TV",
            item: "tv",
          },
          {
            title: "Heat",
            item: "heat",
          },
          {
            title: "Air conditioning",
            item: "conditioning",
          },
          {
            title: "Iron",
            item: "iron",
          },
          {
            title: "Shampoo",
            item: "shampoo",
          },
          {
            title: "Hair dryer",
            item: "dryer",
          },
          {
            title: "Breakfast, coffee, tea",
            item: "breakfast",
          },
          {
            title: "Desk/workspace",
            item: "workspace",
          },
          {
            title: "Fireplace",
            item: "fireplace",
          },
          {
            title: "Closet / drawers",
            item: "closet",
          },
          {
            title: "Private entrance",
            item: "entrance",
          },
        ].map(({ title, item, description }, index) => {
          return (
            <div key={index} className={[space["m-b--16"]].join(" ")}>
              <Input
                check={() => modify("amenities", item)}
                checked={data.amenities.includes(item)}
                variant="checkbox"
                title={title}
                description={description}
              />
            </div>
          );
        })}
      </div>
      <div className={[space["m-b--32"]].join(" ")}>
        <div className={[space["m-b--45"]].join(" ")}>
          <h3 className={[font["size--28"], color["c--gray__1"]].join(" ")}>
            Safety amenities
          </h3>
        </div>
        {[
          {
            title: "Smoke detector",
            item: "smoke",
            description:
              "Check your local laws, which may rquire a working smoke detector in every room",
          },
          {
            title: "Carbon monoxide detector",
            item: "carbon",
            description:
              "Check your local laws, which may require a working carbon monoxide detector in every room",
          },
          {
            title: "First aid kit",
            item: "kit",
          },
          {
            title: "Fire extinguisher",
            item: "fire",
          },
          {
            title: "Lock on bedroom door",
            item: "lock",
          },
        ].map(({ title, item, description }, index) => {
          return (
            <div key={index} className={[space["m-b--16"]].join(" ")}>
              <Input
                check={() => modify("safeties", item)}
                checked={data.safeties.includes(item)}
                variant="checkbox"
                title={title}
                description={description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
