/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Router from "next/router";
import { footerItems } from "@airbnb/content";
import { Globe } from "../../../public/svg/original";
import { Button, $Button } from "../../../atoms/button/web";

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
      css={{
        borderTop: "1px solid white__2",
        padding: "22px 0",
        bg: "white__1",
      }}
    >
      <div
        css={{
          ...(spread
            ? {
                paddingLeft: [
                  "19px",
                  "19px",
                  "40px",
                  "40px",
                  "40px",
                  "70px",
                  "70px",
                ],
                paddingRight: [
                  "19px",
                  "19px",
                  "40px",
                  "40px",
                  "40px",
                  "70px",
                  "70px",
                ],
                width: [
                  "auto",
                  "auto",
                  "auto",
                  "auto",
                  "auto",
                  "auto",
                  "auto",
                  "auto",
                  "100%",
                ],
                margin: ["0", "0", "0", "0", "0", "0", "0", "0", "0 auto"],
              }
            : {
                paddingRight: ["20px", "20px", "40px", "80px"],
                paddingLeft: ["20px", "20px", "40px", "80px"],
                width: ["auto", "auto", "auto", "auto", "100%"],
                maxWidth: [0, 0, 0, 0, "1280px"],
                margin: ["0", "0", "0", "0 auto"],
              }),
        }}
      >
        <div
          css={{
            borderBottom: "1px solid white__1",
          }}
        >
          {footerItems.map((section, index) => {
            return (
              <div
                key={index}
                css={{
                  borderTop: "1px solid white__2",
                  "&:not(first-child)": {
                    margin: 20,
                  },
                }}
              >
                <div>
                  <h3 css={{ fontSize: 12, textTransform: "uppercase" }}>
                    {section.name}
                  </h3>
                </div>
                <div
                  css={{
                    margin: "15px 0",
                  }}
                >
                  {section.items.map(({ name, url }, index) => {
                    return (
                      <div css={{ margin: "15px 0" }} key={index}>
                        <Button
                          variant={$Button.LINK}
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
        <div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              margin: "20px 0",
            }}
          >
            <div>
              <button
                css={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: 10,
                  bg: "transparent",
                  border: "none",
                }}
              >
                <Globe
                  width={16}
                  css={{
                    marginRight: 5,
                  }}
                />
                <u css={{ fontSize: 14, marginRight: 7 }}>English(CA)</u>
              </button>
            </div>
            <div>
              <Button variant={$Button.UNDERLINE} title={`$ CAD`} bold />
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <h4 css={{ fontSize: 15 }}>
                &copy; 2020 Airbnb, Inc. All rights reserved
              </h4>
            </div>
            <div css={{ display: "flex", alignItems: "center" }}>
              <div>&nbsp;&nbsp;· &nbsp;</div>
              <div css={{ marginRight: 10 }}>
                <Button
                  variant={$Button.LINK}
                  title="Privacy"
                  onClick={() => Router.push("/")}
                />
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div css={{ marginRight: 10 }}>
                <Button
                  variant={$Button.LINK}
                  title="Terms"
                  onClick={() => Router.push("/")}
                />
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div css={{ marginRight: 10 }}>
                <Button
                  variant={$Button.LINK}
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
