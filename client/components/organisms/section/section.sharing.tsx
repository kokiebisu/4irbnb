import React from "react";

import { Layout } from "../../../layout/layout.component";
import layout from "../../../styles/layout.module.scss";
import { SharingSectionProps } from "./props";

export const SharingSection: React.FC<SharingSectionProps> = () => {
  return (
    <div className={[layout["container--shrink"]].join(" ")}>
      <Layout
        type="section"
        sectionType="onlinehost"
        title="How hosts are sharing their world"
        subtitle="These hosts bring the spirit of experiences to the screen with unique small group activities to do together while we're apart."
      >
        hello
      </Layout>
    </div>
  );
};
