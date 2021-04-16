import section from '@template/index.module.scss';

export interface OtherTemplateProps {
  location?: any;
  locations?: any;
}

/**
 * Renders the other section
 * @param {string} location - Location of the page
 * @param {Object[]} locations - List of other locations
 */
export const OtherTemplate: React.FC<OtherTemplateProps> = ({
  location = 'Location',
  locations = [
    { name: 'Anchorage', url: '/' },
    { name: 'Talkeetna', url: '/' },
    { name: 'Wasilla', url: '/' },
    { name: 'Palmer', url: '/' },
    { name: 'Big Lake', url: '/' },
    { name: 'Willow', url: '/' },
    { name: 'Nancy Lake', url: '/' },
    { name: 'Houston', url: '/' },
    { name: 'Hatcher Pass', url: '/' },
    { name: 'Cantwell', url: '/' },
    { name: 'Glacier View', url: '/' },
    { name: 'Eureka Roadhouse', url: '/' },
  ],
}) => {
  return (
    <div>
      <div>
        <h3 className="font-medium mb-4 text-gry-800 text-lg">
          Explore other options in and around {location}
        </h3>
      </div>
      <div className="mb-3">
        <div>
          <p className="font-thin">More place to stay in Penafiel:</p>
        </div>
        <div>
          <span className="font-thin text-gray-700">Apartments</span>
          <span className="font-thin text-gray-600"> · </span>
          <span className="font-thin text-gray-600">Houses</span>
          <span className="font-thin text-gray-600"> · </span>
          <span className="font-thin text-gray-600">Bed and breakfasts</span>
          <span className="font-thin text-gray-600"> · </span>
          <span className="font-thin text-gray-600">Lofts</span>
          <span className="font-thin text-gray-600"> · </span>
          <span className="font-thin text-gray-600">Villas</span>
        </div>
      </div>

      <div className="flex justify-between">
        <ul
          className={`p-0 list-none w-full mt-5 ${[
            section['display__other'],
          ].join(' ')}`}
        >
          {locations.map((location, index) => {
            return (
              <li key={index} className="font-thin text-gray-600">
                <div className="mb-4">
                  <p className="text-sm">{location.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
