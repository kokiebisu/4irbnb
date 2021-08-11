import {
  TertiaryBulletTemplate,
  TertiaryBulletTemplateProps,
} from "./template";

export type TertiaryBulletProps = TertiaryBulletTemplateProps;

export const TertiaryBullet = (props: TertiaryBulletProps): JSX.Element => {
  return <TertiaryBulletTemplate {...props} />;
};
