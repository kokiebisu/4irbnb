import React from "react";
import { SectionLayout } from "./section/layout.section";
import { LayoutProps } from "./props";
import { OnlineHostLayout } from "./section/layout.onlinehost";

export const Layout: React.FC<LayoutProps> = ({
  extendsTo,
  type,
  ...props
}) => {
  const types = {
    section: <SectionLayout {...props} />,
  };

  return (
    <div className={extendsTo} data-testid="layout">
      {types[type]}
    </div>
  );
};
