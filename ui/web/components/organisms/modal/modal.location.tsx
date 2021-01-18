/** styles */
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import animation from "@styles/animation.module.scss";

/** components */
import { Button } from "@button";
import { Layout } from "@layout";

export const LocationModal: React.FC<{}> = () => {
  const recentLocations = [
    { location: "Chilliwack", from: "Jan. 7", to: "Jan. 21", guests: 4 },
    { location: "Tofino" },
    { location: "Nanaimo" },
  ];
  const nearbyLocations = [
    "Whistler",
    "Victora",
    "Tofino",
    "Kelowna",
    "Uclulet",
    "Chilliwack",
    "Sooke",
    "Pemberton",
  ];
  return (
    <div>
      <div>
        <Button
          variant="location"
          type="explore"
          extendsTo={[
            space["p-h--25"],
            animation["hover-background--white__1"],
          ].join(" ")}
          block
        />
      </div>
      <div>
        <Layout
          variant="location"
          title="Recent Searches"
          content={recentLocations.map((recentLocations, index) => {
            return (
              <div key={index}>
                <Button
                  variant="location"
                  type="recent"
                  {...recentLocations}
                  extendsTo={[
                    space["p-h--25"],
                    animation["hover-background--white__1"],
                  ].join(" ")}
                  block
                />
              </div>
            );
          })}
        />
      </div>
      <div>
        <Layout
          variant="location"
          title="Nearby Getaways"
          content={
            <div
              style={{ position: "relative", right: 3 }}
              className={[
                space["m-h--25"],
                layout["flex"],
                layout["flex-wrap"],
              ].join(" ")}
            >
              {nearbyLocations.map((nearbyLocation, index) => {
                return (
                  <div key={index}>
                    <Button
                      variant="nearby"
                      label={nearbyLocation}
                      onClick={() => alert(`clicked ${nearbyLocation}`)}
                    />
                  </div>
                );
              })}
            </div>
          }
        />
      </div>
    </div>
  );
};
