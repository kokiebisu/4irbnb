import { ScoreBulletTemplate, ScoreBulletTemplateProps } from './template';

export interface ScoreBulletProps extends ScoreBulletTemplateProps {}

const ScoreBullet: React.FC<ScoreBulletProps> = (props) => {
  return <ScoreBulletTemplate {...props} />;
};

export const score = (props: ScoreBulletProps) => {
  return {
    score: { component: <ScoreBullet {...props} /> },
  };
};
