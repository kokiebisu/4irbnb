import React, { useRef, useState } from "react";

/** styles **/
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import input from "@input/input.module.scss";

/** Styling */
import { Checked } from "@svg/original";
import { ChevronDown, ChevronTop } from "@svg/regular";

/** hooks */
import useOnClickOutside from "@hooks/useOnClickOutside";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} changePlace - Change the place type
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const PlaceInput: React.FC<{
  value?: string;
  direction?: string;
  errors?: boolean;
  changePlace?: (type: string) => void;
}> = ({ value, direction, errors = false, changePlace }) => {
  const containerRef = useRef();
  const [expanded, setExpanded] = useState(false);
  useOnClickOutside(containerRef, () => {
    if (expanded) {
      setExpanded(!expanded);
    }
  });
  const renderShape = () => {
    switch (direction) {
      case "top":
        return [
          color["b-b--white__3"],
          color["b-l--white__3"],
          color["b-r--white__3"],
          shape["bbr--10"],
        ].join(" ");
      case "bottom":
        return [
          color["b-t--white__3"],
          color["b-l--white__3"],
          color["b-r--white__3"],
          shape["btr--10"],
        ].join(" ");
      default:
        return [color["b--white__3"], shape["br--10"]].join(" ");
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ height: 50 }}
      className={`${[
        layout["flex"],
        input["outside"],
        layout["relative"],
        layout["items-center"],
      ].join(" ")}`}
    >
      <div
        className={`${renderShape()} ${
          expanded && [input["container__active"]].join(" ")
        }`}
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{ height: "100%", padding: "0 12px" }}
          onClick={() => setExpanded(!expanded)}
          className={`${[
            layout["flex"],
            layout["justify-between"],
            layout["items-center"],
            color["bg--transparent"],
            shape["br--10"],
            space["p--0"],
            shape["w--full"],
            color["b--0"],
            font["size--16"],
            font["weight--300"],
          ].join(" ")}`}
        >
          <div>
            <label
              style={{ left: 0, top: 15, cursor: "pointer", padding: "0 12px" }}
              htmlFor="place"
              className={`${[
                layout["absolute"],
                font["size--14"],
                color["c--gray__3"],
                font["weight--100"],
              ].join(" ")}`}
            >
              {value}
            </label>
          </div>
          <div>
            {expanded ? <ChevronTop width={13} /> : <ChevronDown width={13} />}
          </div>
        </div>
        {expanded && (
          <div
            style={{
              position: "absolute",
              top: 48,
              zIndex: 9999,
            }}
          >
            <div
              style={{
                borderRadius: 6,
                backgroundColor: "white",
                border: "1px solid lightgray",
                padding: 16,
                boxShadow:
                  "rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important",
              }}
            >
              <div>
                <div
                  style={{
                    padding: 12,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    height: "100%",
                  }}
                  className={[color["bg--transparent"]].join(" ")}
                  onClick={() => {
                    changePlace("Entire place");
                    setExpanded(!expanded);
                  }}
                >
                  <div>
                    <div>
                      <h3
                        className={[font["text--left"], font["size--14"]].join(
                          " "
                        )}
                      >
                        Entire place
                      </h3>
                    </div>
                    <div>
                      <p
                        className={[font["size--13"], font["text--left"]].join(
                          " "
                        )}
                      >
                        Guests have the whole place to themselves--there's a
                        private entrance and no shared spaces. A bedroom,
                        bathroom, and kitchen and usually included.
                      </p>
                    </div>
                  </div>
                  {value === "Entire place" && (
                    <div
                      className={[layout["flex"], layout["items-center"]].join(
                        " "
                      )}
                    >
                      <Checked width={32} />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div
                  style={{
                    padding: 12,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    height: "100%",
                  }}
                  className={[color["bg--transparent"]].join(" ")}
                  onClick={() => {
                    changePlace("Private room");
                    setExpanded(!expanded);
                  }}
                >
                  <div>
                    <div>
                      <h3
                        className={[font["text--left"], font["size--14"]].join(
                          " "
                        )}
                      >
                        Private room
                      </h3>
                    </div>
                    <div>
                      <p
                        className={[font["size--13"], font["text--left"]].join(
                          " "
                        )}
                      >
                        Guests have their own private room for sleeping. Other
                        areas could be shared.
                      </p>
                    </div>
                  </div>
                  {value === "Private room" && (
                    <div
                      className={[layout["flex"], layout["items-center"]].join(
                        " "
                      )}
                    >
                      <Checked width={32} />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div
                  style={{
                    padding: 12,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    height: "100%",
                  }}
                  className={[color["bg--transparent"]].join(" ")}
                  onClick={() => {
                    changePlace("Shared room");
                    setExpanded(!expanded);
                  }}
                >
                  <div>
                    <div>
                      <h3
                        className={[font["text--left"], font["size--14"]].join(
                          " "
                        )}
                      >
                        Shared room
                      </h3>
                    </div>
                    <div>
                      <p
                        className={[font["size--13"], font["text--left"]].join(
                          " "
                        )}
                      >
                        Guests sleep in a bedroom or a common area that could be
                        shared with others.
                      </p>
                    </div>
                  </div>
                  {value === "Shared room" && (
                    <div
                      className={[layout["flex"], layout["items-center"]].join(
                        " "
                      )}
                    >
                      <Checked width={32} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
