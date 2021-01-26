import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import animation from "@styles/animation.module.scss";

import { Button, $Button } from "@button";
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
          variant={$Button.LOCATION}
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
          variant={$Button.LOCATION}
          title="Recent Searches"
          content={recentLocations.map(
            ({ location, from, to, guests }, index) => {
              return (
                <div key={index}>
                  <Button
                    variant={$Button.LOCATION}
                    type="recent"
                    location={location}
                    from={from}
                    to={to}
                    guests={guests}
                    extendsTo={[
                      space["p-h--25"],
                      animation["hover-background--white__1"],
                    ].join(" ")}
                    block
                  />
                </div>
              );
            }
          )}
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
                      variant={$Button.NEARBY}
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
