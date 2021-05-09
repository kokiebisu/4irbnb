import { useScenarioBulletContent } from './content';

export interface ScenarioBulletTemplateProps {
  scenarioType?:
    | 'available'
    | 'requirements'
    | 'confirmation'
    | 'welcome'
    | 'paid';
}

export const ScenarioBulletTemplate: React.FC<ScenarioBulletTemplateProps> = ({
  scenarioType,
}) => {
  const { imgUrl, title, description } = useScenarioBulletContent({
    scenarioType,
  });
  return (
    <div>
      <div className="mb-2">
        <img style={{ width: 150 }} src={imgUrl} alt="scenario img" />
      </div>
      <div className="mb-2">
        <h3 className="text-sm">{title}</h3>
      </div>
      <div className="mb-2">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
