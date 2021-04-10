import { Bullet, $Bullet } from '@bullet';

export interface ScenariosSegmentTemplateProps {
  scenarios?: string[];
}

export const ScenariosSegmentTemplate: React.FC<ScenariosSegmentTemplateProps> = ({
  scenarios,
}) => {
  return (
    <div>
      <div className="mb-6">
        <div className="mb-7">
          <h3>Based on your settings, here's what you could expect</h3>
        </div>
        <div>
          {scenarios.map((type, index) => {
            return (
              <div key={index} className="mb-5">
                <Bullet variant={$Bullet.SCENARIO} type={type} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
