import { PrimaryBulletTemplate, PrimaryBulletTemplateProps } from "./template";

export type PrimaryBulletProps = PrimaryBulletTemplateProps;

export const PrimaryBullet = (props: PrimaryBulletProps): JSX.Element => (
  <PrimaryBulletTemplate {...props} />
);
