import { useState } from "react";

import { motion } from "framer-motion";

/** styles */
import header from "@header/header.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import animation from "@styles/animation.module.scss";
import responsive from "@styles/responsive.module.scss";

/** vectors */
import { Button } from "@button/button.component";
import { useToggleDispatch } from "@context/toggle";

/**
 * Renders the Searchbar
 */
export const SearchBar: React.FC<{
  selected?: string;
  setSelected?: (param: string) => void;
  category?: string;
  setCategory?: (param: string) => void;
}> = ({
  selected = null,
  setSelected = () => console.log("clicked"),
  category,
  setCategory,
}) => {
  const dispatchToggle = useToggleDispatch();
  return (
    <div>
      <div className={[space["m-b--16"], space["m-t--12"]].join(" ")}>
        <div className={[layout["flex"], layout["justify-center"]].join(" ")}>
          <div className={[space["m-h--16"]].join(" ")}>
            <button onClick={() => setCategory("stay")}>
              <div className={[space["p-b--8"]].join(" ")}>
                <p
                  className={[
                    color["c--white"],
                    responsive["size__12_to_14--md"],
                    responsive["weight__500_to_300--md"],
                  ].join(" ")}
                >
                  Places to stay
                </p>
              </div>
              <div
                className={[layout["flex"], layout["justify-center"]].join(" ")}
              >
                {category === "stay" && (
                  <motion.div
                    initial={{ width: 3 }}
                    animate={{ width: 15 }}
                    style={{ height: 2, backgroundColor: "white" }}
                  />
                )}
              </div>
            </button>
          </div>
          <div className={[space["m-h--16"]].join(" ")}>
            <button onClick={() => setCategory("experiences")}>
              <div className={[space["p-b--8"]].join(" ")}>
                <p
                  className={[
                    color["c--white"],
                    responsive["size__12_to_14--md"],
                    responsive["weight__500_to_300--md"],
                  ].join(" ")}
                >
                  Experiences
                </p>
              </div>
              <div
                className={[layout["flex"], layout["justify-center"]].join(" ")}
              >
                {category === "experiences" && (
                  <motion.div
                    initial={{ width: 3 }}
                    animate={{ width: 15 }}
                    style={{ height: 2, backgroundColor: "white" }}
                  />
                )}
              </div>
            </button>
          </div>
          <div className={[space["m-h--16"]].join(" ")}>
            <button onClick={() => setCategory("online")}>
              <div className={[space["p-b--8"]].join(" ")}>
                <p
                  className={[
                    color["c--white"],
                    responsive["size__12_to_14--md"],
                    responsive["weight__500_to_300--md"],
                  ].join(" ")}
                >
                  Online Experiences
                </p>
              </div>
              <div
                className={[layout["flex"], layout["justify-center"]].join(" ")}
              >
                {category === "online" && (
                  <motion.div
                    initial={{ width: 3 }}
                    animate={{ width: 15 }}
                    style={{ height: 2, backgroundColor: "white" }}
                  />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
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
          onClick={() => {
            setSelected("location");
            dispatchToggle({ type: "toggle_location" });
          }}
        >
          <div
            className={`${[layout["flex"], layout["items-center"]].join(" ")}`}
          >
            <div>
              <div>
                <h3
                  className={[font["text--left"], font["size--12"]].join(" ")}
                >
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
          onClick={() => {
            setSelected("checkin");
            dispatchToggle({ type: "toggle_check" });
          }}
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
          onClick={() => {
            setSelected("checkout");
            dispatchToggle({ type: "toggle_check" });
          }}
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
          onClick={() => {
            setSelected("guests");
            dispatchToggle({ type: "toggle_guests" });
          }}
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
              className={`${[layout["flex"], layout["items-center"]].join(
                " "
              )}`}
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
              <Button
                variant="search"
                onClick={() => alert("hello")}
                expand={selected}
              />
            </div>
          </div>
        </button>
      </div>
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
