import { Button } from '@button';
import { Layout } from '@layout';

export interface LocationModalProps {}

export const LocationModal: React.FC<LocationModalProps> = () => {
  const recentLocations = [
    { location: 'Chilliwack', from: 'Jan. 7', to: 'Jan. 21', guests: 4 },
    { location: 'Tofino' },
    { location: 'Nanaimo' },
  ];
  const nearbyLocations = [
    'Whistler',
    'Victora',
    'Tofino',
    'Kelowna',
    'Uclulet',
    'Chilliwack',
    'Sooke',
    'Pemberton',
  ];
  return (
    <div>
      <div>
        <Button variant="location" locationType="explore" block />
      </div>
      <div>
        <Layout
          variant="location"
          title="Recent Searches"
          content={recentLocations.map(
            ({ location, from, to, guests }, index) => {
              return (
                <div key={index}>
                  <Button
                    variant="location"
                    locationType="recent"
                    location={location}
                    from={from}
                    guests={guests}
                    block
                  />
                </div>
              );
            }
          )}
        />
      </div>
      <div>
        <Layout
          variant="location"
          title="Nearby Getaways"
          content={
            <div className="relative right-1 mx-6 flex flex-wrap">
              {nearbyLocations.map((nearbyLocation, index) => {
                return (
                  <div key={index}>
                    <Button
                      variant="nearby"
                      label={nearbyLocation}
                      onClick={() => alert(`clicked ${nearbyLocation}`)}
                    />
                  </div>
                );
              })}
            </div>
          }
        />
      </div>
    </div>
  );
};
