import { Bullet } from "@bullet";

import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import responsive from "@styles/responsive.module.scss";

import * as bulletVariant from "@bullet/variants";

/**
 * Renders the help section
 */
export const HelpTemplate: React.FC<{}> = () => {
  const helps = ["support", "tools", "insights", "education"];
  return (
    <div className={[responsive["b_to_f--sm"]].join(" ")}>
      <div
        className={[responsive["w100p_to_50p--sm"], space["m-b--64"]].join(" ")}
      >
        <h1 className={[font["size--40"]].join(" ")}>We're here to help</h1>
      </div>
      <div className={[responsive["w100p_to_50p--sm"]].join(" ")}>
        <div>
          {helps.map((help, index) => {
            return (
              <div key={index} className={[space["m-b--24"]].join(" ")}>
                <Bullet variant={bulletVariant.HELP} help={help} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
