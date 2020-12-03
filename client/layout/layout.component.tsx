import React from "react";

/** Layouts */
import { SectionLayout } from "./section/layout.section";
import { InputLayout } from "./layout.input";

/** Props */
import { LayoutProps } from "./props";

export const Layout: React.FC<LayoutProps> = ({
  extendsTo,
  type,
  ...props
}) => {
  const types = {
    section: <SectionLayout {...props} />,
    input: <InputLayout {...props} />,
  };

  return (
    <div className={extendsTo} data-testid="layout">
      {types[type]}
    </div>
  );
};
