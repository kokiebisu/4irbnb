/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Bullet, $Bullet } from "../../../../atoms/bullet/web";

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
            color: "grey.800",
            fontSize: 24,
          }}
        >
          Things to know
        </h3>
      </div>
      <div
        css={{
          display: "flex",
        }}
      >
        <div>
          <div
            css={{
              marginBottom: 16,
            }}
          >
            <h3>House rules</h3>
          </div>
          <div
            css={{
              marginBottom: 32,
            }}
          >
            {houseRules.map((item, index) => {
              return (
                <div
                  key={index}
                  css={{
                    marginBottom: 6,
                  }}
                >
                  <Bullet variant={$Bullet.KNOW} categoryType={item} />
                </div>
              );
            })}
          </div>
          <div>
            <u>Show all</u>
          </div>
        </div>

        <div>
          <div
            css={{
              marginBottom: 16,
            }}
          >
            <h3>Health & safety</h3>
          </div>
          <div
            css={{
              marginBottom: 32,
            }}
          >
            {healths.map((item, index) => {
              return (
                <div
                  key={index}
                  css={{
                    marginBottom: 6,
                  }}
                >
                  <Bullet variant={$Bullet.KNOW} categoryType={item} />
                </div>
              );
            })}
          </div>
          <div>
            <u>Show all</u>
          </div>
        </div>
        <div>
          <div
            css={{
              marginBottom: 16,
            }}
          >
            <h3>Cancellation policy</h3>
          </div>
          <div
            css={{
              marginBottom: 32,
            }}
          >
            <p
              css={{
                fontWeight: 100,
              }}
            >
              Add your trip to get the cancellation details for this stay.
            </p>
          </div>
          <div>
            <u>Add dates</u>
          </div>
        </div>
      </div>
    </div>
  );
};
