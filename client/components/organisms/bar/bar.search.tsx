import React, { useState } from "react";

import { motion } from "framer-motion";

/** styles */
import header from "@header/header.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import animation from "@styles/animation.module.scss";

/** vectors */
import { Button } from "@button/button.component";

/**
 * Renders the Searchbar
 */
export const SearchBar: React.FC<{
  selected?: string;
  setSelected?: (param: string) => void;
}> = ({ selected = null, setSelected = () => console.log("clicked") }) => {
  return (
    <div
      className={[shape["shadow--sm"]].join(" ")}
      style={{
        border: "1px solid lightgray",
        display: "grid",
        gridTemplateColumns: `1.5fr 1px 1fr 1px  1fr 1px ${
          !selected ? "1.5fr" : "2fr"
        }`,
        borderRadius: 50,
        backgroundColor: "white",
      }}
    >
      <button
        className={`${
          selected === "location" && [shape["shadow--lg"]].join(" ")
        } ${[animation["hover-background--white__1"]].join(" ")}`}
        style={{
          display: "block",
          padding: "5px 24px",
          borderRadius: "50px",
        }}
        onClick={() => setSelected("location")}
      >
        <div
          className={`${[layout["flex"], layout["items-center"]].join(" ")}`}
        >
          <div>
            <div>
              <h3 className={[font["text--left"], font["size--12"]].join(" ")}>
                Location
              </h3>
            </div>
            <div>
              <p className={[font["text--left"], font["size--12"]].join(" ")}>
                Where are you going?
              </p>
            </div>
          </div>
        </div>
      </button>
      <Seperator />
      <button
        style={{
          display: "block",
          padding: "5px 24px",
          borderRadius: "50px",
        }}
        className={`${
          selected === "checkin" && [shape["shadow--lg"]].join(" ")
        }  ${[animation["hover-background--white__1"]].join(" ")}`}
        onClick={() => setSelected("checkin")}
      >
        <div
          className={`${[layout["flex"], layout["items-center"]].join(" ")}`}
          style={{
            borderRadius: selected === "checkin" && 50,
          }}
        >
          <div>
            <div>
              <h3
                className={[
                  font["text--left"],
                  font["no-wrap"],
                  font["size--12"],
                ].join(" ")}
              >
                Check in
              </h3>
            </div>
            <div>
              <p
                className={[
                  font["text--left"],
                  font["no-wrap"],
                  font["size--12"],
                ].join(" ")}
              >
                Add dates
              </p>
            </div>
          </div>
        </div>
      </button>
      <Seperator />
      <button
        style={{
          display: "block",
          padding: "5px 24px",
          borderRadius: "50px",
        }}
        className={`${
          selected === "checkout" && [shape["shadow--lg"]].join(" ")
        }  ${[animation["hover-background--white__1"]].join(" ")}`}
        onClick={() => setSelected("checkout")}
      >
        <div
          className={`${[layout["flex"], layout["items-center"]].join(" ")}`}
          style={{
            borderRadius: selected === "checkout" && 50,
          }}
        >
          <div>
            <div>
              <h3
                className={[
                  font["text--left"],
                  font["no-wrap"],
                  font["size--12"],
                ].join(" ")}
              >
                Check out
              </h3>
            </div>
            <div>
              <p
                className={[
                  font["text--left"],
                  font["no-wrap"],
                  font["size--12"],
                ].join(" ")}
              >
                Add dates
              </p>
            </div>
          </div>
        </div>
      </button>
      <Seperator />
      <button
        style={{
          display: "block",
          padding: "5px 8px 5px 24px",
          borderRadius: "50px",
        }}
        className={`${
          selected === "guests" && [shape["shadow--lg"]].join(" ")
        } ${[animation["hover-background--white__1"]].join(" ")}`}
        onClick={() => setSelected("guests")}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: selected === "guests" && 50,
          }}
        >
          <div
            className={`${[layout["flex"], layout["items-center"]].join(" ")}`}
          >
            <div>
              <div>
                <h3
                  className={[
                    font["text--left"],
                    font["no-wrap"],
                    font["size--12"],
                  ].join(" ")}
                >
                  Guests
                </h3>
              </div>
              <div>
                <p
                  className={[
                    font["text--left"],
                    font["no-wrap"],
                    font["size--12"],
                  ].join(" ")}
                >
                  Add guests
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Button
                variant="search"
                onClick={() => alert("hello")}
                expand={selected}
              />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

const Seperator = () => {
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
      <div
        className={[color["bg--white__2"]].join(" ")}
        style={{ width: "100%", height: 25 }}
      ></div>
    </div>
  );
};
