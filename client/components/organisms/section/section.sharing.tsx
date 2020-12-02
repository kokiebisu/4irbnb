import React from "react";

import { Layout } from "../../../layout/layout.component";
import layout from "../../../styles/layout.module.scss";
import { Card } from "../../../components/molecules/card/card.component";
import { SharingSectionProps } from "./props";
import space from "../../../styles/space.module.scss";
import { Button } from "../../../components/atoms/button/button.component";

export const SharingSection: React.FC<SharingSectionProps> = () => {
  const sharings = ["meditate", "baking", "magic"];
  return (
    <Layout
      type="section"
      sectionType="onlinehost"
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
              <Card type="sharing" sharing={sharing} />
            </div>
          );
        })}
      </div>
      <div className={[layout["flex"], layout["justify-center"]].join(" ")}>
        <Button type="border" bold title="Start creating your experience" />
      </div>
    </Layout>
  );
};
