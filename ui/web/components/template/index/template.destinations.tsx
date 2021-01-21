import layout from "@styles/layout.module.scss";
import animation from "@styles/animation.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";

import { Button } from "@button";

export const DestinationsTemplate: React.FC<{}> = () => {
  const cities = [
    { city: "New York", location: "New York" },
    { city: "Phoenix", location: "Arizone" },
    { city: "Atlanta", location: "Georgia" },
  ];
  return (
    <div>
      <div
        style={{ overflowX: "auto" }}
        className={[layout["flex"], space["m-v--4"]].join(" ")}
      >
        <button
          className={[
            space["p-v--14"],
            space["p-h--12"],
            shape["br--8"],
            animation["hover-background--white__1"],
          ].join(" ")}
        >
          <div>
            <h3 className={[font["size--14"]].join(" ")}>
              Destinations for arts & culture
            </h3>
          </div>
        </button>
        <button
          className={[
            space["p-v--14"],
            space["p-h--12"],
            shape["br--8"],
            animation["hover-background--white__1"],
          ].join(" ")}
        >
          <h3 className={[font["size--14"]].join(" ")}>
            Destinations for outdoor adventure
          </h3>
        </button>
        <button
          className={[
            space["p-v--14"],
            space["p-h--12"],
            shape["br--8"],
            animation["hover-background--white__1"],
          ].join(" ")}
        >
          <h3 className={[font["size--14"]].join(" ")}>Mountain cabins</h3>
        </button>
        <button
          className={[
            space["p-v--14"],
            space["p-h--12"],
            shape["br--8"],
            animation["hover-background--white__1"],
          ].join(" ")}
        >
          <h3 className={[font["size--14"]].join(" ")}>Beach destinations</h3>
        </button>
        <button
          className={[
            space["p-v--14"],
            space["p-h--12"],
            shape["br--8"],
            animation["hover-background--white__1"],
          ].join(" ")}
        >
          <h3 className={[font["size--14"]].join(" ")}>Popular destinations</h3>
        </button>
      </div>
      <div
        className={[color["bg--white__2"], shape["w--full"]].join(" ")}
        style={{ height: 1 }}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cities.map(({ city, location }, index) => {
          return (
            <div key={index}>
              <Button variant="destination" city={city} location={location} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
