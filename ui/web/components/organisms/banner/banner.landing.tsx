import { useRef, useState } from "react";
import Router from "next/router";

/** styles **/
import layout from "@styles/layout.module.scss";
import index from "@styles/index.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import responsive from "@styles/responsive.module.scss";

/** components */
import { Header } from "@header/header.component";
import { Button } from "@button/button.component";

/** hooks */
import { useHandleScroll } from "@hooks/useHandleScroll";
import useOnClickOutside from "@hooks/useOnClickOutside";

/** stories */
import { banner } from "@button/button.stories";

/** helper */
import { ResponsiveImage } from "@helper/img";
import { useToggleDispatch, useToggleState } from "@context/toggle";
import { Modal } from "@organisms/modal/modal.component";

/**
 * Renders the banner section
 */
export const LandingBanner: React.FC<{ data?: any }> = ({ data }) => {
  const scrollPosition = useHandleScroll();
  const [category, setCategory] = useState("stay");
  return (
    <div className={index["banner"]}>
      <div className={[layout["all-sides"]].join(" ")}>
        <div className={index["banner__background--picture"]}>
          <ResponsiveImage />
        </div>
      </div>
      <div className={[layout["all-sides"]].join(" ")}>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "auto 1fr",
            height: "100%",
          }}
        >
          <div>
            <div>
              <Header
                variant="transparent"
                category={category}
                setCategory={setCategory}
                data={data}
                extendsTo={`${[shape["z__80"]].join(" ")} ${
                  scrollPosition < 56
                    ? [color["bg--transparent"]].join(" ")
                    : [
                        color["bg--white"],
                        layout["fixed"],
                        layout["t--0"],
                        layout["l--0"],
                        layout["r--0"],
                      ].join(" ")
                }`}
              />
            </div>
          </div>
          <div
            className={[layout["container--spread"]].join(" ")}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div
                className={[
                  responsive["f_to_b--sm"],
                  layout["justify-center"],
                ].join(" ")}
              >
                <h3 className={[color["c--white"], font["size--28"]].join(" ")}>
                  Go Near
                </h3>
              </div>
              <div
                className={[
                  index["w__explore--subtitle"],
                  index["text__explore--subtitle"],
                ].join(" ")}
              >
                <p
                  className={[
                    font["c--white"],
                    index["size__explore--subtitle"],
                    font["weight--300"],
                    font["ls--3"],
                    color["c--white"],
                  ].join(" ")}
                >
                  Settle in somewhere new. Discover nearby stays to live, work,
                  or just relax.
                </p>
              </div>
              <div
                className={[
                  space["m-t--15"],
                  space["m-h--0"],
                  index["justify__explore--button"],
                ].join(" ")}
              >
                <Button
                  {...banner.args}
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
