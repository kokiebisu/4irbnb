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
  items?: { name?: string; abbreviation?: string; symbol?: string }[];
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
        {items.map(({ name, abbreviation, symbol }, index) => {
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
                      {name}
                    </p>
                  </div>
                  <div>
                    <p
                      className={[font["size--14"], color["c--gray__1"]].join(
                        " "
                      )}
                    >
                      <span>{abbreviation}</span>
                      <span> - </span>
                      <span>{symbol}</span>
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
      <div className={[space["m-b--24"]].join(" ")}>
        <Layout
          title="Choose a currency"
          items={[
            { name: "Canadian dollar", abbreviation: "CAD", symbol: "$" },
          ]}
        />
      </div>
    </div>
  );
};
