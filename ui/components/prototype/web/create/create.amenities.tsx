/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Input, $Input } from "../../../atoms/input/web";

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
      <div css={{ marginBottom: 12 }}>
        <h3 css={{ fontSize: 28, color: "grey.700" }}>
          What amenities do you offer?
        </h3>
      </div>
      <div css={{ marginBottom: 45 }}>
        <p css={{ fontSize: 16, color: "grey.700" }}>
          These are just the amenities guests usually expect, but you can add
          even more after publishing.
        </p>
      </div>
      <div css={{ marginBottom: 50 }}>
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
            <div key={index} css={{ marginBottom: 16 }}>
              <Input
                check={() => modify("amenities", item)}
                checked={data.amenities.includes(item)}
                variant={$Input.CHECKBOX}
                title={title}
                description={description}
              />
            </div>
          );
        })}
      </div>
      <div css={{ marginBottom: 32 }}>
        <div css={{ marginBottom: 45 }}>
          <h3 css={{ fontSize: 28, color: "grey.600" }}>Safety amenities</h3>
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
            <div key={index} css={{ marginBottom: 16 }}>
              <Input
                check={() => modify("safeties", item)}
                checked={data.safeties.includes(item)}
                variant={$Input.CHECKBOX}
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
