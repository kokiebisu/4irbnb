/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Star } from "../../../public/svg/original";
import { ChevronDown } from "../../../public/svg/regular";
import { useCheckin } from "../logic/logic.checkin";
import {
  checkInBorder,
  checkOutBorder,
  guestBorder,
} from "../logic/logic.checkin";

/**
 * Renders the checkin card
 */
export const CheckInCard: React.FC<{
  length?: number;
}> = () => {
  const [selected, dispatchSelected] = useCheckin();

  return (
    <div>
      <div
        css={{
          backgroundColor: "white",
          zIndex: 50,
          borderRadius: 10,
          padding: "22px 0",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
        }}
        sx={{
          border: "1px solid white__2",
        }}
        // className={[
        //   card["display__checkin--wrapper"],
        //   card["position__checkin--wrapper"],

        //   card["w__checkin--wrapper"],

        // ].join(" ")}
      >
        <div
          css={{
            padding: "0 24px",
          }}
        >
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h3
              css={{
                padding: "10px 0",
                fontSize: 21,
                fontWeight: 500,
              }}
              sx={{
                color: "gray__2",
              }}
            >
              Add dates for prices
            </h3>
            <div
              css={{
                width: 100,
                padding: "10px 0",
                fontSize: 21,
                fontWeight: 500,
              }}
              sx={{
                color: "gray__2",
              }}
            >
              <div
                css={{
                  display: "inline-block",
                  marginRight: 4,
                }}
              >
                <Star width={10} />
              </div>
              <span
                css={{
                  display: "inline-block",
                  fontSize: 14,
                  marginRight: 4,
                }}
              >
                4.93
              </span>
              <span
                css={{
                  display: "inline-block",
                  fontSize: 14,
                  fontWeight: 100,
                }}
                sx={{
                  color: "white__3",
                }}
              >
                (248)
              </span>
            </div>
          </div>
          <div
            css={{
              borderRadius: 8,
              marginTop: 12,
            }}
            sx={{
              border: "1px solid white__2",
            }}
          >
            <div css={{ height: 60, display: "flex", width: "100%" }}>
              <div
                onClick={() => {
                  dispatchSelected({ type: "checkin" });
                }}
                // className={checkInBorder(selected)}
              >
                <div css={{ padding: "0 12px" }}>
                  <label
                    css={{
                      display: "block",
                      textAlign: "left",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                    sx={{
                      color: "gray__3",
                    }}
                  >
                    CHECK-IN
                  </label>
                  <input
                    css={{
                      width: "100%",
                      fontWeight: 300,
                      fontSize: 14,
                      border: "none",
                      outline: "none",
                    }}
                    placeholder="Add date"
                  />
                </div>
              </div>
              <div
                onClick={() => {
                  dispatchSelected({ type: "checkout" });
                }}
                // className={checkOutBorder(selected)}
              >
                <div css={{ padding: "0 12px" }}>
                  <label
                    css={{
                      display: "block",
                      textAlign: "left",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                    sx={{ color: "gray__3" }}
                  >
                    CHECK-OUT
                  </label>
                  <input
                    placeholder="Add date"
                    css={{
                      width: "100%",
                      fontWeight: 300,
                      fontSize: 14,
                      border: "none",
                      outline: "none",
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                dispatchSelected({ type: "guests" });
              }}
              css={{
                height: 60,
                ...(selected.guests
                  ? { borderRadius: 6 }
                  : {
                      borderTop: "1px solid transparent",
                      borderBottom: "1px solid white__3",
                      borderLeft: "1px solid white__3",
                      borderRight: "1px solid white__3",
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      width: "100%",
                    }),
              }}
              sx={{
                bg: "transparent",
                ...(selected.guests
                  ? { border: "1px solid gray__3" }
                  : {
                      bg: "transparent",
                    }),
              }}
            >
              <div
              // className={guestBorder(selected)}
              >
                <div
                  css={{
                    padding: "0 12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <label
                      css={{
                        display: "block",
                        textAlign: "left",
                        fontSize: 10,
                        fontWeight: 700,
                      }}
                      sx={{ color: "gray__3" }}
                    >
                      GUESTS
                    </label>
                    <p css={{ fontWeight: 300, fontSize: 14 }}>1 guest</p>
                  </div>
                  <div>
                    <ChevronDown width={14} />
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div css={{ marginTop: 24 }}>
            <button
              css={{
                width: "100%",
                padding: "14px 0",
                fontSize: 15,
                borderRadius: 5,
                fontWeight: 300,
              }}
              sx={{ bg: "primary", color: "white" }}
            >
              Check availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
