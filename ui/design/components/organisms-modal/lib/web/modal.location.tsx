/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm';
import { $MODAL } from '../constant/appearance';
// import { Layout } from "../../../layout/web";

const LocationModal: React.FC<{}> = () => {
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
        <Button
          variant={$BUTTON.location}
          type="explore"
          extendsTo={{
            padding: '0 25px',
            ':hover': {
              bg: 'grey.100',
              transition: '0.4s all',
            },
          }}
          block
        />
      </div>
      <div>
        {/* <Layout
          variant={$Button.LOCATION}
          title="Recent Searches"
          content={recentLocations.map(
            ({ location, from, to, guests }, index) => {
              return (
                <div key={index}>
                  <Button
                    variant={$Button.LOCATION}
                    type="recent"
                    location={location}
                    from={from}
                    to={to}
                    guests={guests}
                    extendsTo={{
                      padding: "0 25px",
                      ":hover": {
                        bg: "grey.100",
                        transition: "0.4s all",
                      },
                    }}
                    block
                  />
                </div>
              );
            }
          )}
        /> */}
      </div>
      <div>
        {/* <Layout
          variant="location"
          title="Nearby Getaways"
          content={
            <div
              css={{
                position: "relative",
                right: 3,
                margin: "0 25px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {nearbyLocations.map((nearbyLocation, index) => {
                return (
                  <div key={index}>
                    <Button
                      variant={$Button.NEARBY}
                      label={nearbyLocation}
                      onClick={() => alert(`clicked ${nearbyLocation}`)}
                    />
                  </div>
                );
              })}
            </div>
          }
        /> */}
      </div>
    </div>
  );
};

export const location = (props) => {
  return {
    [$MODAL.location]: {
      component: <LocationModal {...props} />,
      css: {
        maxWidth: 400,
        borderRadius: 16,
        padding: '25px 0',
      },
    },
  };
};
