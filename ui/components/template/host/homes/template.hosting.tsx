/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Layout, Card, $Card } from "@airbnb/components/web";

// import { types } from "@card/web/card.hosting";

/**
 * Renders the priority section
 * @param {string[]} priorities - The priorities
 */
export const HostingTemplate: React.FC<{}> = () => {
  return (
    <Layout variant="homes" title="How hosting works">
      <div
        css={{
          marginTop: 16,
        }}
      >
        <div
          css={{
            width: "100%",
            display: ["block", "block", "flex"],
          }}
        >
          {Object.keys(types).map((type, index) => {
            return (
              <div key={index} css={{ width: "25%", marginBottom: 64 }}>
                <Card variant={$Card.HOSTING} type={type} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
