import { Bullet } from '@atoms';

export interface BookingScenariosSegmentTemplateProps {
  scenarios?: string[];
}

export const BookingScenariosSegmentTemplate: React.FC<BookingScenariosSegmentTemplateProps> = ({
  scenarios,
}) => {
  return (
    <div>
      <div className="mb-6">
        <div className="mb-7">
          <h3 className="text-xl text-gray-700">
            Based on your settings, here's what you could expect
          </h3>
        </div>
        <div>
          {scenarios.map(
            (
              type:
                | 'available'
                | 'requirements'
                | 'confirmation'
                | 'welcome'
                | 'paid',
              index
            ) => {
              return (
                <div key={index} className="mb-5">
                  <Bullet variant="scenario" scenarioType={type} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
