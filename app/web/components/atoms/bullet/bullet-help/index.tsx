import { HelpBulletTemplate, HelpBulletTemplateProps } from './template';

export type HelpBulletProps = HelpBulletTemplateProps;

export const HelpBullet: React.FC<HelpBulletProps> = (props) => {
  return <HelpBulletTemplate {...props} />;
};
