import React from "react";
import { motion } from "framer-motion";

/** styles */
import shape from "../../../styles/shape.module.scss";
import color from "../../../styles/color.module.scss";
import font from "../../../styles/font.module.scss";
import layout from "../../../styles/layout.module.scss";
import space from "../../../styles/space.module.scss";
import modal from "./modal.module.scss";

/** components */
import { Button } from "../../../components/atoms/button/button.component";

/** vectors */
import { Lock } from "../../../public/svg/original";

/** props */
import { PrivacyModalProps } from "./props";

/** contexts */
import { useToggleDispatch } from "../../../context/toggle";

/** stories */
import { privacy } from "../../atoms/button/button.stories";

/**
 * Renders the privacy modal
 */
export const PrivacyModal: React.FC<PrivacyModalProps> = () => {
  const toggleDispatch = useToggleDispatch();

  const handleSave = () => {
    // add cookie
    return toggleDispatch({ type: "toggle_privacy" });
  };

  const handleSettings = () => {
    // open settings
    return toggleDispatch({ type: "toggle_privacy" });
  };

  return (
    <div>
      <div
        className={[
          space["p-t--28"],
          space["p-b--28"],
          space["p-l--25"],
          space["p-r--25"],
          shape["br--8"],
          shape["shadow--lg"],
          color["bg--white"],
          modal["flex__privacy--content"],
        ].join(" ")}
      >
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
          <motion.div
            className={[
              space["m-t--6"],
              space["m-b--6"],
              space["m-l--0"],
              modal["m-r--privacy"],
            ].join(" ")}
          >
            <Button {...privacy.args} title="Save" onPress={handleSave} />
          </motion.div>
          <motion.div
            className={[
              space["m-t--6"],
              space["m-b--6"],
              space["m-l--0"],
              space["m-r--0"],
            ].join(" ")}
          >
            <Button
              {...privacy.args}
              title="Cookie Preferences"
              inverse
              onPress={handleSettings}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
