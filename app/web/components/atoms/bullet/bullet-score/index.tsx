import { ScoreBulletTemplate, ScoreBulletTemplateProps } from './template';

export type ScoreBulletProps = ScoreBulletTemplateProps;

export const ScoreBullet = (props: ScoreBulletProps): JSX.Element => {
  return <ScoreBulletTemplate {...props} />;
};
