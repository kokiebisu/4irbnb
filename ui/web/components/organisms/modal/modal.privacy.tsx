import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import responsive from "@styles/responsive.module.scss";
import modal from "@modal/modal.module.scss";

import { Button, $Button } from "@button";

import { Lock } from "@svg/original";

import { useToggleDispatch } from "@context/toggle";

/**
 * Renders the privacy modal
 */
export const PrivacyModal: React.FC<{}> = () => {
  const toggleDispatch = useToggleDispatch();

  const handleSave = () => {
    // add cookie
    console.log("entered");
    return toggleDispatch({ type: "toggle_privacy" });
  };

  const handleSettings = () => {
    // open settings
    return toggleDispatch({ type: "toggle_privacy" });
  };

  return (
    <div>
      <div className={[modal["flex__privacy--content"]].join(" ")}>
        <div>
          <div
            className={[
              layout["flex"],
              layout["items-center"],
              space["m-t--6"],
              space["m-b--6"],
              space["m-l--0"],
              space["m-r--0"],
            ].join(" ")}
          >
            <div className={space["m-r--10"]}>Your Privacy</div>
            <div className={space["r-t--1"]}>
              <Lock width={16} fill="#428BFF" />
            </div>
          </div>
          <div className={space["m-b--30"]}>
            <p
              className={[
                font["size--14"],
                font["weight--300"],
                font["lh--15"],
                color["c--gray__0"],
              ].join(" ")}
            >
              We use cookies to help personalize content, tailor and measure
              ads, and provide a safer experience. By navigating the site, you
              agree to the use of cookies to collect information on and off
              Airbnb. Read our{" "}
              <u>
                <b>Cookie Policy</b>
              </u>{" "}
              to learn more or go to Cookie Preferences to manage your settings.
            </p>
          </div>
        </div>
        <div className={modal["flex__privacy--buttons"]}>
          <div
            className={[
              space["m-t--6"],
              space["m-b--6"],
              space["m-l--0"],
              modal["m-r--privacy"],
            ].join(" ")}
          >
            <Button
              variant={$Button.PRIVACY}
              extendsTo={[
                shape["w--full"],
                responsive["b_to_f--sm"],
                font["text--center"],
              ].join(" ")}
              title="Save"
              onClick={handleSave}
            />
          </div>
          <div
            className={[
              space["m-t--6"],
              space["m-b--6"],
              space["m-l--0"],
              space["m-r--0"],
            ].join(" ")}
          >
            <Button
              variant={$Button.PRIVACY}
              extendsTo={[
                shape["w--full"],
                responsive["b_to_f--sm"],
                font["text--center"],
              ].join(" ")}
              title="Cookie Preferences"
              inverse
              onClick={handleSettings}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
