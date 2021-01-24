import { Bullet } from "@bullet";

import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";

import * as $bullet from "@bullet/variants";

/**
 * Renders the /become-a-host/requirements page content
 */
export const RequirementsCreate: React.FC<{}> = () => {
  return (
    <div>
      <div className={[space["m-b--12"]].join(" ")}>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          Review Airbnb's guest requirements
        </h3>
      </div>
      <div className={[space["m-b--45"]].join(" ")}>
        <p className={[font["size--14"], color["c--gray__2"]].join(" ")}>
          Airbnb has requirements that all guests must meet before they book.
        </p>
      </div>
      <div className={[space["m-b--30"]].join(" ")}>
        <div className={[space["m-b--16"]].join(" ")}>
          <h4 className={[font["size--18"]].join(" ")}>
            All Airbnb guests must provide:
          </h4>
        </div>
        {["Email address", "Confirmed phone number", "Payment information"].map(
          (content, index) => {
            return (
              <div key={index} className={[space["m-b--8"]].join(" ")}>
                <Bullet variant={$bullet.CHECK} title={content} />
              </div>
            );
          }
        )}
      </div>
      <div
        style={{ width: "100%", height: 1 }}
        className={[color["bg--white__2"], space["m-b--30"]].join(" ")}
      ></div>
      <div className={[space["m-b--16"]].join(" ")}>
        <h4 className={[font["size--18"]].join(" ")}>
          Before booking your home, each guest must:
        </h4>
      </div>
      {[
        "Agree to your House Rules",
        "Message you about their trip",
        "Let you know how many guests are coming",
        "Confirm their check-in time if they're arriving within 2 days",
      ].map((content, index) => {
        return (
          <div key={index} className={[space["m-b--8"]].join(" ")}>
            <Bullet variant={$bullet.CHECK} title={content} />
          </div>
        );
      })}
    </div>
  );
};
