import React from "react";

/** components */
import { Button } from "@button/button.component";
import { Layout } from "@layout/layout.component";

/** styles */
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import animation from "@styles/animation.module.scss";

export const LocationModal: React.FC<{}> = () => {
  const recentLocations = [
    { name: "Chilliwack", from: "Jan. 7", to: "Jan. 21", guests: 4 },
    { name: "Chilliwack", from: "Jan. 7", to: "Jan. 21", guests: 4 },
    { name: "Chilliwack", from: "Jan. 7", to: "Jan. 21", guests: 4 },
  ];
  const nearbyLocations = ["Whistler", "Victoria"];
  return (
    <div
      className={[shape["shadow--sm"], shape["br--20"], space["p-v--25"]].join(
        " "
      )}
    >
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
          content={recentLocations.map((recentLocations) => {
            return (
              <div>
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
            <div className={[space["m-h--25"]].join(" ")}>
              {nearbyLocations.map((nearbyLocation) => {
                return <div>nearby</div>;
              })}
            </div>
          }
        />
      </div>
    </div>
  );
};
