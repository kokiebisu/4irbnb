import { Layout } from "@layout";

import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";

import { Card, $Card } from "@card";
import { Button, $Button } from "@button";

export const SharingTemplate: React.FC<{}> = () => {
  const sharings = ["meditate", "baking", "magic"];
  return (
    <Layout
      variant="onlinehost"
      title="How hosts are sharing their world"
      subtitle="These hosts bring the spirit of experiences to the screen with unique small group activities to do together while we're apart."
    >
      <div
        className={[space["m-v--100"]].join(" ")}
        style={{
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
      <div className={[layout["flex"], layout["justify-center"]].join(" ")}>
        <Button
          variant={$Button.BORDER}
          bold
          title="Start creating your experience"
        />
      </div>
    </Layout>
  );
};
