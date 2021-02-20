/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Bullet, $Bullet } from "@nextbnb/atoms-bullet";

/**
 * Renders the /become-a-host/requirements page content
 */
export const RequirementsCreate: React.FC<{}> = () => {
  return (
    <div>
      <div css={{ marginBottom: 12 }}>
        <h3 css={{ fontSize: 28, color: "grey.700" }}>
          Review Airbnb's guest requirements
        </h3>
      </div>
      <div css={{ marginBottom: 45 }}>
        <p css={{ fontSize: 14, color: "grey.700" }}>
          Airbnb has requirements that all guests must meet before they book.
        </p>
      </div>
      <div css={{ marginBottom: 30 }}>
        <div css={{ marginBottom: 16 }}>
          <h4 css={{ fontSize: 18 }}>All Airbnb guests must provide:</h4>
        </div>
        {["Email address", "Confirmed phone number", "Payment information"].map(
          (content, index) => {
            return (
              <div key={index} css={{ marginBottom: 8 }}>
                <Bullet variant={$Bullet.CHECK} title={content} />
              </div>
            );
          }
        )}
      </div>
      <div
        css={{ width: "100%", height: 1, bg: "grey.300", marginBottom: 30 }}
      ></div>
      <div css={{ marginBottom: 16 }}>
        <h4 css={{ fontSize: 18 }}>
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
          <div key={index} css={{ marginBottom: 8 }}>
            <Bullet variant={$Bullet.CHECK} title={content} />
          </div>
        );
      })}
    </div>
  );
};
