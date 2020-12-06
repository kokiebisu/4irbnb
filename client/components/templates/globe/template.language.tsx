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
  type?: string;
}> = ({ items, type = "suggested" }) => {
  const titles = {
    suggested: "Suggested languages and regions",
    choose: "Choose a language and region",
  };
  return (
    <div>
      <div className={[space["m-b--18"]].join(" ")}>
        <h3 className={[font["size--20"]].join(" ")}>{titles[type]}</h3>
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
              <Button
                type="globe"
                language={language}
                region={region}
                extendsTo={[font["text--left"]].join(" ")}
                block
                selected={index === 0 && type === "choose"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const LanguageTemplate: React.FC<{}> = () => {
  return (
    <div>
      {/* <div className={[space["m-b--24"]].join(" ")}>
        <Layout
          type="suggested"
          items={[{ language: "English", region: "Canada" }]}
        />
      </div> */}
      <div>
        <Layout
          type="choose"
          items={[{ language: "English", region: "Canada" }]}
        />
      </div>
    </div>
  );
};
