/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRef, useState } from "react";
import { Checked } from "../../../public/svg/original";
import { ChevronDown, ChevronTop } from "../../../public/svg/regular";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

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
}> = ({ value = "Entire place", direction, errors = false, changePlace }) => {
  const containerRef = useRef<any>();
  const [expanded, setExpanded] = useState(false);
  useOnClickOutside(containerRef, () => {
    if (expanded) {
      setExpanded(!expanded);
    }
  });
  const renderShape = () => {
    switch (direction) {
      case "top":
        return {
          borderBottom: "1px solid",
          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderColor: "white__3",
          borderBottomRadius: 10,
        };

      case "bottom":
        return {
          borderTop: "1px solid",
          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderColor: "white__3",
          borderTopRadius: 10,
        };
      default:
        return {
          border: "1px solid",
          borderColor: "white__3",
          borderRadius: 10,
        };
    }
  };

  return (
    <div
      ref={containerRef}
      css={{
        height: 50,
        display: "flex",
        position: "relative",
        alignItems: "center",
      }}
    >
      <div
        css={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
        sx={{
          ...renderShape(),
          ...(expanded && { border: "2px solid", borderColor: "black" }),
        }}
      >
        <div
          css={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bg: "transparent",
            padding: 0,
            width: "100%",
            border: "none",
            fontSize: 16,
            fontWeight: 300,
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <div>
            <label
              css={{
                position: "absolute",
                left: 0,
                top: 15,
                cursor: "pointer",
                padding: "0 12px",
                fontSize: 14,
                color: "gray__3",
                fontWeight: 100,
              }}
              htmlFor="place"
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
            css={{
              position: "absolute",
              top: 48,
              zIndex: 60,
            }}
          >
            <div
              css={{
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
                  css={{
                    padding: 12,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    height: "100%",
                    bg: "transparent",
                  }}
                  onClick={() => {
                    // changePlace("Entire place");
                    setExpanded(!expanded);
                  }}
                >
                  <div>
                    <div>
                      <h3
                        style={{ textAlign: "left" }}
                        css={{
                          fontSize: 14,
                        }}
                      >
                        Entire place
                      </h3>
                    </div>
                    <div>
                      <p css={{ fontSize: 13, textAlign: "left" }}>
                        Guests have the whole place to themselves--there's a
                        private entrance and no shared spaces. A bedroom,
                        bathroom, and kitchen and usually included.
                      </p>
                    </div>
                  </div>
                  {value === "Entire place" && (
                    <div css={{ display: "flex", alignItems: "center" }}>
                      <Checked width={32} />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div
                  css={{
                    padding: 12,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    height: "100%",
                    bg: "transparent",
                  }}
                  onClick={() => {
                    // changePlace("Private room");
                    setExpanded(!expanded);
                  }}
                >
                  <div>
                    <div>
                      <h3 css={{ textAlign: "left", fontSize: 14 }}>
                        Private room
                      </h3>
                    </div>
                    <div>
                      <p css={{ fontSize: 13, textAlign: "left" }}>
                        Guests have their own private room for sleeping. Other
                        areas could be shared.
                      </p>
                    </div>
                  </div>
                  {value === "Private room" && (
                    <div css={{ display: "flex", alignItems: "center" }}>
                      <Checked width={32} />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div
                  css={{
                    padding: 12,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    height: "100%",
                    bg: "transparent",
                  }}
                  onClick={() => {
                    // changePlace("Shared room");
                    setExpanded(!expanded);
                  }}
                >
                  <div>
                    <div>
                      <h3 css={{ textAlign: "left", fontSize: 14 }}>
                        Shared room
                      </h3>
                    </div>
                    <div>
                      <p css={{ fontSize: 13, textAlign: "left" }}>
                        Guests sleep in a bedroom or a common area that could be
                        shared with others.
                      </p>
                    </div>
                  </div>
                  {value === "Shared room" && (
                    <div css={{ display: "flex", alignItems: "center" }}>
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
