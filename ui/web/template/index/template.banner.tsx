/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import Router from "next/router";
import { Header, $Header, Button, $Button } from "@airbnb/components/web";
import { useHandleScroll } from "@hooks/useHandleScroll";
import { ResponsiveImage } from "@airbnb/components/helper/img";

/**
 * Renders the banner section
 */
export const BannerTemplate: React.FC<{ data?: any }> = ({ data }) => {
  const scrollPosition = useHandleScroll();
  const [category, setCategory] = useState("stay");
  return (
    <div
    // className={index["banner"]}
    >
      <div
        css={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        <div
        // className={index["banner__background--picture"]}
        >
          <ResponsiveImage />
        </div>
      </div>
      <div
        css={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        <div
          css={{
            display: "grid",
            gridTemplateRows: "auto 1fr",
            height: "100%",
          }}
        >
          <div>
            <div>
              <Header
                variant={$Header.LANDING}
                category={category}
                setCategory={setCategory}
                data={data}
                extendsTo={{
                  zIndex: 80,
                  ...(scrollPosition < 56
                    ? { bg: "transparent" }
                    : {
                        bg: "white",
                        display: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                      }),
                }}
                criteria={scrollPosition < 56}
              />
            </div>
          </div>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div
                css={{
                  display: ["flex", "flex", "block"],
                  justifyContent: "center",
                }}
              >
                <h3
                  css={{
                    color: "white",
                    fontSize: 28,
                  }}
                >
                  Go Near
                </h3>
              </div>
              <div
              // className={[
              //   index["w__explore--subtitle"],
              //   index["text__explore--subtitle"],
              // ].join(" ")}
              >
                <p
                  css={{
                    color: "white",
                    fontWeight: 300,
                    letterSpacing: 0.3,
                  }}
                >
                  Settle in somewhere new. Discover nearby stays to live, work,
                  or just relax.
                </p>
              </div>
              <div
                css={{
                  margin: "15px 0px 0px 0px",
                }}
                // className={[index["justify__explore--button"]].join(" ")}
              >
                <Button
                  variant={$Button.BANNER}
                  title="Explore nearby"
                  onClick={() => Router.push("/")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
