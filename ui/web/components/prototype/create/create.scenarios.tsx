/** styles */
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";

/** components */
import { Input } from "@input";
import { Layout } from "@layout";
import { Bullet } from "@bullet";

export const ScenariosCreate: React.FC<{}> = () => {
  return (
    <div>
      <div className={[space["m-b--30"]].join(" ")}>
        <div className={[space["m-b--45"]].join(" ")}>
          <h3>Based on your settings, here's what you could expect</h3>
        </div>
        <div>
          {["available", "requirements", "confirmation", "welcome", "paid"].map(
            (type, index) => {
              return (
                <div key={index} className={[space["m-b--32"]].join(" ")}>
                  <Bullet variant="scenario" type={type} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
