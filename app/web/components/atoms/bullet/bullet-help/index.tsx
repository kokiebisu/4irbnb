import { HelpBulletTemplate, HelpBulletTemplateProps } from './template';

export interface HelpBulletProps extends HelpBulletTemplateProps {
  help: 'variant';
}

export const HelpBullet: React.FC<HelpBulletProps> = (props) => {
  return <HelpBulletTemplate {...props} />;
};
