/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import Router from "next/router";
import { motion } from "framer-motion";
import { Button, $Button } from "@airbnb/components/web";

export const DestinationsTemplate: React.FC<{
  items?: { [type: string]: { city: String; location: String } };
}> = ({
  items = { artsCulture: [{ city: "City", location: "Location" }] },
}) => {
  const [selected, setSelected] = useState("artsCulture");

  const categories = [
    { name: "Desinations for arts & culture", value: "artsCulture" },
    { name: "Destinations for outdoor adventure", value: "outdoor" },
    { name: "Mountain cabins", value: "cabins" },
    { name: "Beach destinations", value: "beach" },
    { name: "Popular destinations", value: "popular" },
  ];
  return (
    <div>
      <div css={{ overflowX: "auto", display: "flex" }}>
        {categories.map(({ name, value }, index) => {
          return (
            <div key={index}>
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
        css={{
          bg: "white__2",
          width: "100%",
          height: 1,
        }}
      />
      <div css={{ display: "flex", flexWrap: "wrap" }}>
        {items[selected].map(({ city, location }, index) => {
          return (
            <div key={index} className={[template["destination__w"]].join(" ")}>
              <Button
                variant={$Button.DESTINATION}
                city={city}
                location={location}
                onClick={() =>
                  Router.push(
                    `/${city.toLowerCase().split(" ").join("-")}/stays`
                  )
                }
              />
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
        css={{
          padding: "14px 12px",
          borderRadius: 8,
        }}
        // className={`${[animation["hover-background--white__1"]].join(" ")}`}
      >
        <div>
          <h3
            css={{
              whiteSpace: "nowrap",
              fontSize: 14,
            }}
          >
            {title}
          </h3>
        </div>
      </motion.button>
      <div
        css={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          css={{
            width: "80%",
            height: 2,
            backgroundColor: selected ? "black" : "transparent",
          }}
        />
      </div>
    </div>
  );
};
