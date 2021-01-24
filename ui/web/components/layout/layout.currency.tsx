import { Button } from "@button";

import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import animation from "@styles/animation.module.scss";
import shape from "@styles/shape.module.scss";

/**
 * Layout for Currency modal
 * @param {Object[]} items - Currency type
 * @param {string} title - Title of the Template
 */
export const CurrencyLayout: React.FC<{
  items?: { name?: string; abbreviation?: string; symbol?: string }[];
  title?: string;
}> = ({ items = [], title = "Title here" }) => {
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
        {items?.map(({ name, abbreviation, symbol }, index) => {
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
