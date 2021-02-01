/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button, $Button } from "../../../atoms/button/web";
import { Lock } from "../../../public/svg/original";
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
      <div
        sx={{
          alignItems: "center",
          display: ["block", "block", "block", "block", "flex"],
        }}
      >
        <div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              margin: "6px 0",
            }}
          >
            <div css={{ marginRight: 10 }}>Your Privacy</div>
            <div>
              <Lock width={16} fill="#428BFF" />
            </div>
          </div>
          <div css={{ marginBottom: 30 }}>
            <p
              css={{ fontSize: 14, fontWeight: 300, lineHeight: 1.5 }}
              sx={{
                color: "gray__0",
              }}
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
        <div
          css={{
            display: ["block", "flex"],
          }}
        >
          <div
            css={{
              marginTop: 6,
              marginBottom: 6,
              marginLeft: 0,
              marginRight: ["0", "8px"],
            }}
          >
            <Button
              variant={$Button.PRIVACY}
              extendsTo={{
                width: "100%",
                display: ["block", "flex"],
                textAlign: "center",
              }}
              title="Save"
              onClick={handleSave}
            />
          </div>
          <div
            css={{
              margin: "6px 0",
            }}
          >
            <Button
              variant={$Button.PRIVACY}
              css={{
                width: "100%",
                display: ["block", "flex"],
                textAlign: "center",
              }}
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
