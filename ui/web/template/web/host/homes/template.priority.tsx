/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Layout } from "@layout/web";
import { Bullet, $Bullet } from "@bullet/web";

/**
 * Renders the priority section
 * @param {string[]} priorities - The priorities
 */
export const PriorityTemplate: React.FC<{}> = () => {
  return (
    <Layout variant="homes" title="Safety is our priority">
      <div
        css={{
          marginTop: 16,
        }}
      >
        <div
          css={{
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: 12,
            display: ["block", "block", "grid"],
          }}
        >
          {["protection", "guidance", "requirements"].map((priority, index) => {
            return (
              <div
                key={index}
                css={{
                  marginBottom: 64,
                }}
              >
                <Bullet variant={$Bullet.PRIORITY} priority={priority} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
