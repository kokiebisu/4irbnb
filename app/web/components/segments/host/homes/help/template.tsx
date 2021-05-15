import { Bullet } from '@bullet';

export interface HelpSegmentTemplateProps {
  helps: string[];
}

/**
 * Renders the help section
 */
export const HelpSegmentTemplate: React.FC<HelpSegmentTemplateProps> = ({
  helps,
}) => {
  return (
    <div className="sm:flex">
      <div className="w-full sm:w-1/2 mb-6">
        <h1 className="text-xl">We're here to help</h1>
      </div>
      <div className="w-full sm:w-1/2">
        <div>
          {helps.map(
            (help: 'support' | 'tools' | 'insights' | 'education', index) => {
              return (
                <div key={index} className="mb-5">
                  <Bullet variant="help" helpType={help} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
