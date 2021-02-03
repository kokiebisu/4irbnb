/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Bullet, $Bullet } from "@airbnb/components/web";

/**
 * Renders the 'What to bring' section
 * @param {Object[]} necessities - List of things the users have to bring
 */
export const BringTemplate: React.FC<{
  necessities?: string[];
}> = ({
  necessities = [
    "All purpose flour 100g",
    "water 50g",
    "160g minced pork(40%fat),can be subbed with chicken, shrimp.If your meat is too much lean, keep the fat cut off from skin(the skin for making pork jelly)",
    "80g pork skin jelly, can be sunned with chicken feet, gelatin with stock. (Will give you instructions and video how to make it",
    "Chopped very fine ginger and spring onions 3g each.",
  ],
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
          What to bring
        </h3>
      </div>
      <div css={{ marginBottom: 32 }}>
        {necessities.map((necessity, index) => {
          return (
            <div key={index} css={{ marginBottom: 16 }}>
              <Bullet variant={$Bullet.BRING} title={necessity} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
