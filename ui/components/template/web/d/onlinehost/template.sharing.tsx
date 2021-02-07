/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Card, $Card } from "../../../../molecules/card/web";
import { Layout, $Layout } from "../../../../layout/web";
import { Button, $Button } from "../../../../atoms/button/web";

export const SharingTemplate: React.FC<{}> = () => {
  const sharings = ["meditate", "baking", "magic"];
  return (
    <Layout
      variant="onlinehost"
      title="How hosts are sharing their world"
      subtitle="These hosts bring the spirit of experiences to the screen with unique small group activities to do together while we're apart."
    >
      <div
        css={{
          margin: "100px 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: 25,
        }}
      >
        {sharings.map((sharing, index) => {
          return (
            <div key={index}>
              <Card variant={$Card.SHARING} sharing={sharing} />
            </div>
          );
        })}
      </div>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant={$Button.BORDER}
          bold
          title="Start creating your experience"
        />
      </div>
    </Layout>
  );
};
