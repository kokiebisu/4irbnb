/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

/**
 * Renders the know section
 * @param {string[]} houseRules - List of rules the users must follow
 * @param {string[]} healths - List of health guidelines
 * @param {string} layoutType - The type of layout
 */
export const KnowTemplate: React.FC<{
  houseRules?: string[];
  healths?: string[];
  layoutType?: string;
}> = ({
  houseRules = [
    "checkin",
    "checkout",
    "self",
    "children",
    "smoking",
    "pets",
    "parties",
  ],
  healths = ["cleaning", "distancing", "caution", "check"],
  layoutType = "room",
}) => {
  return (
    <div>
      <div>
        <h3
          css={{
            fontWeight: 500,
            marginBottom: 20,
            color: "gray__3",
            fontSize: 24,
          }}
        >
          Things to know
        </h3>
      </div>
      <div
        style={{
          display: "flex",
        }}
        className={[].join(" ")}
      >
        <div css={{ width: "50%", marginRight: 32 }}>
          <div css={{ marginBottom: 16 }}>
            <h3 css={{ fontSize: 16 }}>Cancellation policy</h3>
          </div>
          <div css={{ marginBottom: 32 }}>
            <p>
              Any experience can be cancelled and fully refunded within 24 hours
              of purchase, or at least 7 days before the experience starts.
            </p>
          </div>
          <div>
            <u>Learn more</u>
          </div>
        </div>

        <div css={{ width: "50%", marginRight: 32 }}>
          <div css={{ marginBottom: 16 }}>
            <h3 css={{ fontSize: 16 }}>Guest requirements</h3>
          </div>
          <div css={{ marginBottom: 32 }}>
            <p>
              You’ll need an internet connection and the ability to stream audio
              and video to participate. A link and details on how to join will
              be included in your booking confirmation email.
            </p>
          </div>
          <div>
            <u>Show more</u>
          </div>
        </div>
      </div>
    </div>
  );
};
