import { AnywhereCardTemplate, AnywhereCardTemplateProps } from "./template";

export type AnywhereCardProps = AnywhereCardTemplateProps;

/**
 * Presentational Component
 * @param props
 * @returns
 */
export const AnywhereCard = (props: AnywhereCardProps) => (
  <AnywhereCardTemplate {...props} />
);
