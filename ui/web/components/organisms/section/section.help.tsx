/** components */
import { Bullet } from "@bullet";

/** styles */
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import responsive from "@styles/responsive.module.scss";

/**
 * Renders the help section
 */
export const HelpSection: React.FC<{}> = () => {
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
                <Bullet variant="help" help={help} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
