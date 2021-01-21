import { useState } from "react";
import { motion } from "framer-motion";
import layout from "@styles/layout.module.scss";
import animation from "@styles/animation.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import template from "./index.module.scss";

import { Button } from "@button";

export const DestinationsTemplate: React.FC<{}> = () => {
  const [selected, setSelected] = useState("artsCulture");
  const cities = {
    artsCulture: [{ city: "New York", location: "New York" }],
    outdoor: [{ city: "Phoenix", location: "Arizone" }],
    cabins: [{ city: "Atlanta", location: "Georgia" }],
    beach: [{ city: "Chicago", location: "Illinois" }],
    popular: [{ city: "Chicago", location: "Illinois" }],
  };
  const categories = [
    { name: "Desinations for arts & culture", value: "artsCulture" },
    { name: "Destinations for outdoor adventure", value: "outdoor" },
    { name: "Mountain cabins", value: "cabins" },
    { name: "Beach destinations", value: "beach" },
    { name: "Popular destinations", value: "popular" },
  ];
  return (
    <div>
      <div style={{ overflowX: "auto" }} className={[layout["flex"]].join(" ")}>
        {categories.map(({ name, value }, index) => {
          return (
            <div>
              <CategoryButton
                title={name}
                selected={selected === value}
                onClick={() => setSelected(value)}
              />
            </div>
          );
        })}
      </div>
      <div
        className={[color["bg--white__2"], shape["w--full"]].join(" ")}
        style={{ height: 1 }}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cities[selected].map(({ city, location }, index) => {
          return (
            <div key={index} className={[template["destination__w"]].join(" ")}>
              <Button variant="destination" city={city} location={location} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CategoryButton: React.FC<{
  title: String;
  selected?: Boolean;
  onClick: () => void;
}> = ({ title, selected, onClick }) => {
  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`${[
          space["p-v--14"],
          space["p-h--12"],
          shape["br--8"],
          animation["hover-background--white__1"],
        ].join(" ")}`}
      >
        <div>
          <h3 className={[font["no-wrap"], font["size--14"]].join(" ")}>
            {title}
          </h3>
        </div>
      </motion.button>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: 2,
            backgroundColor: selected ? "black" : "transparent",
          }}
        />
      </div>
    </div>
  );
};
