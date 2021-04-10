import { Bullet, $Bullet } from '@bullet';

export interface RequirementsSegmentTemplateProps {
  mustProvideList?: string[];
  mustDoList?: string[];
}

/**
 * Renders the /become-a-host/requirements page content
 */
export const RequirementsSegmentTemplate: React.FC<RequirementsSegmentTemplateProps> = ({
  mustProvideList,
  mustDoList,
}) => {
  return (
    <div>
      <div className="mb-3">
        <h3 className="text-xl text-gray-700">
          Review Airbnb's guest requirements
        </h3>
      </div>
      <div className="mb-7">
        <p className="text-sm text-gray-700">
          Airbnb has requirements that all guests must meet before they book.
        </p>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <h4 className="text-xl">All Airbnb guests must provide:</h4>
        </div>
        {mustProvideList.map((content, index) => {
          return (
            <div key={index} className="mb-3">
              <Bullet variant={$Bullet.CHECK} title={content} />
            </div>
          );
        })}
      </div>
      <div style={{ height: 1 }} className="w-full bg-gray-300 mb-6"></div>
      <div className="mb-4">
        <h4 className="text-xl">Before booking your home, each guest must:</h4>
      </div>
      {mustDoList.map((content, index) => {
        return (
          <div key={index} className="mb-3">
            <Bullet variant={$Bullet.CHECK} title={content} />
          </div>
        );
      })}
    </div>
  );
};
