import { HelpBulletTemplate, HelpBulletTemplateProps } from './template';

export interface HelpBulletProps extends HelpBulletTemplateProps {}

const HelpBullet: React.FC<HelpBulletProps> = (props) => {
  return <HelpBulletTemplate {...props} />;
};

export const help = (props) => {
  return {
    help: {
      component: <HelpBullet {...props} />,
    },
  };
};
