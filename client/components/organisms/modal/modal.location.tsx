import React from "react";

/** components */
import { Button } from "@button/button.component";

export const LocationModal: React.FC<{}> = () => {
  const recentLocations = [
    { name: "Chilliwack", from: "Jan. 7", to: "Jan. 21", guests: 4 },
  ];
  const nearbyLocations = ["Whistler", "Victoria"];
  return (
    <div>
      <div>
        <Button variant="location" type="explore" />
      </div>
      <div>
        <div>
          <h3>Recent Searches</h3>
        </div>
        <div>
          {recentLocations.map((recentLocations) => {
            return (
              <div>
                <Button variant="location" type="recent" {...recentLocations} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          <h3>Nearby Getaways</h3>
        </div>
        <div>
          {nearbyLocations.map((nearbyLocation) => {
            return <div>nearby</div>;
          })}
        </div>
      </div>
    </div>
  );
};
