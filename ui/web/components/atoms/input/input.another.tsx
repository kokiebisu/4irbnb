import { useEffect, useRef, useState } from "react";

/** styles **/
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import input from "@input/input.module.scss";

import { Plus, Upload } from "@svg/original";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const AnotherInput: React.FC<{
  handleChange?: any;
  handleKeyPress?: any;
  value?: string;
}> = ({ handleChange, value }) => {
  return (
    <div
      style={{
        height: 130,
        padding: 15,
        border: "1px dashed lightgray",
      }}
    >
      <form className={[shape["h--full"]].join(" ")}>
        <input
          type="file"
          id="upload"
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <label htmlFor="upload" className={[shape["h--full"]].join(" ")}>
          <div
            style={{
              cursor: "pointer",
            }}
            className={[shape["h--full"]].join(" ")}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div>
                      <div
                        className={[
                          layout["flex"],
                          layout["items-center"],
                        ].join(" ")}
                      >
                        <Plus width={45} fill="#D8D8D8" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4
                      className={[
                        font["size--14"],
                        color["c--white__3"],
                        font["no-wrap"],
                      ].join(" ")}
                    >
                      Add another
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </form>
    </div>
  );
};
