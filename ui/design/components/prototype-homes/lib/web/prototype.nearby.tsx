/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
// import { Template } from "../../../template/web/s/homes";
import { Bar, $Bar } from "@nextbnb/organisms-bar";
import { Button, $Button } from "@nextbnb/atoms-button";

/**
 * Renders the nearby template component
 * @param param0 Prop
 */
export const NearbyPrototype: React.FC<{
  city?: string;
  filterCount?: number;
  guests?: number;
  average?: number;
  filters?: any;
}> = ({
  city = "location",
  filterCount = 1,
  guests = 1000,
  average = 5.0,
  filters = [
    { name: "Filter" },
    { name: "Filter" },
    { name: "Filter" },
    { name: "Filter" },
    { name: "Filter" },
  ],
}) => {
  const displayPlace = city.match(/_/g) ? city.split("_").join(" ") : city;

  return (
    <div css={{ position: "relative" }}>
      <div css={{ padding: 24 }}>
        <div>
          <p css={{ fontSize: 14 }}>300+ stays</p>
        </div>
        <div>
          <h3 css={{ fontSize: 32 }}>
            Stays in{" "}
            <span css={{ fontWeight: 500, textTransform: "capitalize" }}>
              {displayPlace}
            </span>
          </h3>
        </div>
        <div css={{ margin: "22px 0" }}>
          <div css={{ display: ["block", "block", "block", "flex"] }}>
            {filters.map((filter, index) => {
              return (
                <div key={index} css={{ marginRight: 8 }}>
                  <Button variant={$Button.FILTER} name={filter.name} />
                </div>
              );
            })}
          </div>
          <div css={{ display: ["block", "block", "none"] }}>
            <Button variant={$Button.FILTER} name={`filters ${filterCount}`} />
          </div>
        </div>
        {city && (
          <div>
            <div css={{ marginBottom: 16 }}>
              <p css={{ color: "grey.600", fontSize: 14 }}>
                Enter dates and number of guests to see the total price per
                night.
              </p>
            </div>
            <div
              css={{
                backgroundColor: "lightgray",
                height: 1,
                width: "100%",
              }}
            />
            <div css={{ display: "flex", alignItems: "center" }}>
              <div
                css={{
                  marginRight: 12,
                  padding: "8px 0",
                  margin: "8px 0",
                }}
              >
                <img
                  src="https://a0.muscache.com/airbnb/static/packages/icon-uc-trophy.9ee78aa1.gif"
                  css={{ width: 40 }}
                />
              </div>
              <div>
                <h3 css={{ fontSize: 14 }}>
                  More than {guests} guests have stayed in{" "}
                  <span css={{ fontWeight: 500, textTransform: "capitalize" }}>
                    {displayPlace}
                  </span>
                  . On average they rated their stays {average} out of 5 stars.
                </h3>
              </div>
            </div>
          </div>
        )}
        <div>{/* <Template variant="homes" /> */}</div>
        <div
          css={{
            marginTop: 16,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Bar variant={$Bar.PAGINATE} animate />
        </div>
      </div>
      <div sx={{ bg: "grey.100" }} css={{ padding: 24 }}>
        {/* <Template variant="also" /> */}
      </div>
    </div>
  );
};
