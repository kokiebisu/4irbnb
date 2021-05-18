import { ScoreBulletTemplate, ScoreBulletTemplateProps } from './template';

export interface ScoreBulletProps extends ScoreBulletTemplateProps {}

export const ScoreBullet: React.FC<ScoreBulletProps> = (props) => {
  return <ScoreBulletTemplate {...props} />;
};
