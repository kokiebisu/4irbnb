import {
  QuaternaryBulletTemplate,
  QuaternaryBulletTemplateProps,
} from "./template";

export type QuaternaryBulletProps = QuaternaryBulletTemplateProps;

export const QuaternaryBullet = (props: QuaternaryBulletProps): JSX.Element => (
  <QuaternaryBulletTemplate {...props} />
);
