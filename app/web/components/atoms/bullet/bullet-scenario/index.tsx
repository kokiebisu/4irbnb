import {
  ScenarioBulletTemplate,
  ScenarioBulletTemplateProps,
} from './template';

export type ScenarioBulletProps = ScenarioBulletTemplateProps;

export const ScenarioBullet = (props: ScenarioBulletProps): JSX.Element => {
  return <ScenarioBulletTemplate {...props} />;
};
