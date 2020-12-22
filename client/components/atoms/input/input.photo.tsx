import React, { useEffect, useRef, useState } from "react";

/** styles **/
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import input from "@input/input.module.scss";

import { Upload } from "@svg/original";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const PhotoInput: React.FC<{
  handleChange?: any;
  handleKeyPress?: any;
  value?: string;
}> = ({ handleChange, value }) => {
  return (
    <div>
      <form>
        <input
          type="file"
          id="upload"
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <label htmlFor="upload">
          <div
            style={{
              cursor: "pointer",
              maxWidth: 440,
              height: 350,
              padding: 15,
              border: "1px dashed lightgray",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url(https://a0.muscache.com/airbnb/static/packages/upload-photos-ghosts.56fe723d.png)",
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
                    <div
                      style={{
                        padding: "14px 22px",
                        backgroundColor: "#FF5A5F",
                        borderRadius: 4,
                      }}
                    >
                      <div
                        className={[
                          layout["flex"],
                          layout["items-center"],
                        ].join(" ")}
                      >
                        <div className={[space["m-r--8"]].join(" ")}>
                          <Upload width={20} stroke="white" />
                        </div>
                        <div>
                          <h3
                            style={{
                              fontSize: 14,
                              whiteSpace: "nowrap",
                              color: "white",
                            }}
                          >
                            Upload Photos
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={[space["m-t--8"]].join(" ")}>
                    <h4
                      className={[font["size--15"], color["c--gray__0"]].join(
                        " "
                      )}
                    >
                      or drag them in
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
