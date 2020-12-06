import React from "react";

/** components */
import { Button } from "../../../components/atoms/button/button.component";

/** styles */
import layout from "../../../styles/layout.module.scss";
import space from "../../../styles/space.module.scss";
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import animation from "../../../styles/animation.module.scss";
import shape from "../../../styles/shape.module.scss";

const Layout: React.FC<{
  items?: { language?: string; region?: string }[];
  title?: string;
}> = ({ items, title }) => {
  return (
    <div>
      <div className={[space["m-b--18"]].join(" ")}>
        <h3 className={[font["size--20"]].join(" ")}>{title}</h3>
      </div>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          columnGap: 15,
          rowGap: 15,
          padding: 10,
        }}
      >
        {items.map(({ language, region }, index) => {
          return (
            <div key={index}>
              <Button extendsTo={[font["text--left"]].join(" ")} block>
                <div
                  className={[
                    space["p--12"],
                    shape["br--8"],
                    animation["hover-background--white__1"],
                  ].join(" ")}
                >
                  <div>
                    <p
                      className={[font["size--14"], color["c--black"]].join(
                        " "
                      )}
                    >
                      {language}
                    </p>
                  </div>
                  <div>
                    <p
                      className={[font["size--14"], color["c--gray__1"]].join(
                        " "
                      )}
                    >
                      {region}
                    </p>
                  </div>
                </div>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const CurrencyTemplate: React.FC<{}> = () => {
  return (
    <div>
      <div
        className={[
          layout["flex"],
          layout["items-center"],
          space["m-b--50"],
        ].join(" ")}
      >
        <div className={[space["m-r--32"]].join(" ")}>
          <Button
            type="underline"
            title="Language and region"
            font={16}
            bold
            unselected
          />
        </div>
        <div>
          <Button type="underline" title="Currency" font={16} bold />
        </div>
      </div>
      <div className={[space["m-b--24"]].join(" ")}>
        <Layout
          title="Suggested languages and regions"
          items={[{ language: "English", region: "Canada" }]}
        />
      </div>
      <div>
        <Layout
          title="Choose a language and region"
          items={[{ language: "English", region: "Canada" }]}
        />
      </div>
    </div>
  );
};
