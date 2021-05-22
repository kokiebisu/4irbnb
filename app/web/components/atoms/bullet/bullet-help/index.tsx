import { HelpBulletTemplate, HelpBulletTemplateProps } from './template';

export type HelpBulletProps = HelpBulletTemplateProps;

export const HelpBullet = (props: HelpBulletProps): JSX.Element => {
  return <HelpBulletTemplate {...props} />;
};
