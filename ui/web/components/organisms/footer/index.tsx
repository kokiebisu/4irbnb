import Router from "next/router";

import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";
import styles from "@styles/index.module.scss";
import font from "@styles/font.module.scss";
import layout from "@styles/layout.module.scss";

import { footerItems } from "@airbnb/content";

import { Globe } from "@svg/original";

import { Button } from "@button";

import * as $button from "@button/variants";

export interface FooterProps {
  spread?: boolean;
}

/**
 * Renders the footer
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const Footer: React.FC<FooterProps> = ({ spread = false }) => {
  return (
    <footer
      className={[
        color["b-t--white__2"],
        space["p-v--22"],
        color["bg--white__1"],
      ].join(" ")}
    >
      <div
        className={spread ? layout["container--spread"] : layout["container"]}
      >
        <div
          className={[
            font["b-b--white__1"],
            styles["flex__footer--section"],
          ].join(" ")}
        >
          {footerItems.map((section, index) => {
            return (
              <div
                key={index}
                className={[
                  color["bt--white__2"],
                  space["nf-m-t--20"],
                  styles["p-b__footer--section"],
                  styles["w__footer--section"],
                ].join(" ")}
              >
                <div>
                  <h3
                    className={[font["size--12"], font["uppercase"]].join(" ")}
                  >
                    {section.name}
                  </h3>
                </div>
                <div
                  className={[
                    space["m-v--15"],
                    styles["grid__footer--items"],
                  ].join(" ")}
                >
                  {section.items.map(({ name, url }, index) => {
                    return (
                      <div
                        className={[
                          space["m-v--15"],
                          styles["m__footer--item"],
                        ].join(" ")}
                        key={index}
                      >
                        <Button
                          variant={$button.LINK}
                          onClick={() => Router.push(url)}
                          title={name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles["flex__footer--others"]}>
          <div
            className={[
              layout["flex"],
              layout["items-center"],
              space["m-h--0"],
              space["m-v--20"],
            ].join(" ")}
          >
            <div>
              <button
                className={[
                  layout["flex"],
                  layout["items-center"],
                  space["m-r--10"],
                  color["bg--transparent"],
                  color["b--0"],
                ].join(" ")}
              >
                <Globe width={16} className={space["m-r--5"]} />
                <u className={[font["size--14"], space["m-r--7"]].join(" ")}>
                  English(CA)
                </u>
              </button>
            </div>
            <div>
              <Button variant={$button.UNDERLINE} title={`$ CAD`} bold />
            </div>
          </div>
          <div className={[layout["flex"], layout["items-center"]].join(" ")}>
            <div className={styles["footer__rights"]}>
              <h4 className={[font["size--15"]].join(" ")}>
                &copy; 2020 Airbnb, Inc. All rights reserved
              </h4>
            </div>
            <div className={[layout["flex"], layout["items-center"]].join(" ")}>
              <div className={styles["block__footer--dot"]}>
                &nbsp;&nbsp;· &nbsp;
              </div>
              <div className={space["m-r--10"]}>
                <Button
                  variant={$button.LINK}
                  title="Privacy"
                  onClick={() => Router.push("/")}
                />
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div className={space["m-r--10"]}>
                <Button
                  variant={$button.LINK}
                  title="Terms"
                  onClick={() => Router.push("/")}
                />
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div className={space["m-r--10"]}>
                <Button
                  variant={$button.LINK}
                  title="Sitemap"
                  onClick={() => Router.push("/")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
