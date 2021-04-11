import { Bullet } from '@bullet';

export interface BringTemplateProps {
  necessities?: string[];
}

/**
 * Renders the 'What to bring' section
 * @param {Object[]} necessities - List of things the users have to bring
 */
export const BringTemplate: React.FC<BringTemplateProps> = ({
  necessities,
}) => {
  return (
    <div>
      <div>
        <h3 className="font-medium mb-4 text-gray-700 text-lg">
          What to bring
        </h3>
      </div>
      <div className="mb-5">
        {necessities.map((necessity, index) => {
          return (
            <div key={index} className="mb-4">
              <Bullet variant="bring" title={necessity} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
