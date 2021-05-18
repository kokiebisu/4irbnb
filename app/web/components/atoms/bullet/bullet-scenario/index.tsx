import {
  ScenarioBulletTemplate,
  ScenarioBulletTemplateProps,
} from './template';

export interface ScenarioBulletProps extends ScenarioBulletTemplateProps {}

export const ScenarioBullet: React.FC<ScenarioBulletProps> = (props) => {
  return <ScenarioBulletTemplate {...props} />;
};
