/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Input, $Input } from "../../../atoms/input/web";

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
      <div css={{ marginBottom: 12 }}>
        <h3 css={{ fontSize: 28, color: "grey.700" }}>
          What spaces can guests use?
        </h3>
      </div>
      <div css={{ marginBottom: 45 }}>
        <p css={{ fontSize: 16, color: "grey.700" }}>
          Include common areas, but don’t add spaces that aren’t on your
          property.
        </p>
      </div>
      <div css={{ marginBottom: 50 }}>
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
            <div key={index} css={{ marginBottom: 16 }}>
              <Input
                check={() => modify("spaces", item)}
                checked={data.spaces.includes(item)}
                variant={$Input.CHECKBOX}
                title={title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
