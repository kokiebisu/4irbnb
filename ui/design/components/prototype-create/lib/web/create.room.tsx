/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm';
import { Layout } from '@nextbnb/design/layout/dist/bundle.esm';

/**
 * Renders the /become-a-host/room page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
const RoomCreate: React.FC<{
  data?: any;
  handlePlaceChange?: (e) => void;
  handlePropertyChange?: (e) => void;
  handlePlaceTypeChange?: (placeType: string) => void;
}> = ({
  data,
  handlePlaceChange = () => alert('Changed place'),
  handlePropertyChange = () => alert('Changed property type'),
  handlePlaceTypeChange = () => alert('Change place type'),
}) => {
  return (
    <div>
      <div css={{ marginBottom: 45 }}>
        <h3 css={{ fontSize: 28, color: 'grey.700' }}>
          What kind of place are you listing?
        </h3>
      </div>
      <div css={{ width: 250, marginBottom: 22 }}>
        <Layout variant="input" title="First, let's narrow things down">
          <Input
            inputType="place"
            variant={$INPUT.select}
            value={data?.place}
            // handleChange={(e) => {
            //   setData({ ...data, place: e.target.value });
            // }}
            handleChange={handlePlaceChange}
          />
        </Layout>
      </div>
      <div css={{ marginBottom: 8, width: 250 }}>
        <Layout variant="input" title="Now choose a property type">
          <Input
            disabled={!data?.place}
            inputType={data?.place}
            variant={$INPUT.select}
            value={data?.property}
            handleChange={handlePropertyChange}
            // handleChange={(e) => {
            //   setData({ ...data, property: e.target.value });
            // }}
          />
        </Layout>
      </div>
      {data?.property && data?.description && (
        <div>
          <div css={{ marginTop: 16 }}>
            <h4 css={{ fontSize: 14, color: 'grey.500' }}>
              {data.description}
            </h4>
          </div>
          <div css={{ margin: '32px 0' }}>
            <Layout variant="input" title="What will guests have?">
              <div css={{ marginTop: 22 }}>
                <div css={{ marginBottom: 22 }}>
                  <Input
                    variant={$INPUT.radio}
                    title="Entire place"
                    subtitle="Guests have the whole place to themselves. This usually includes a bedroom, a bathroom, and a kitchen."
                    selected={data.stay === 'Entire place'}
                    // select={() => setData({ ...data, stay: 'Entire place' })}
                    select={() => handlePlaceTypeChange('Entire place')}
                  />
                </div>
                <div css={{ marginBottom: 22 }}>
                  <Input
                    variant={$INPUT.radio}
                    title="Private place"
                    subtitle="Guests have their own private room for sleeping. Other areas could be shared."
                    selected={data.stay === 'Private place'}
                    // select={() => setData({ ...data, stay: 'Private place' })}
                    select={() => handlePlaceTypeChange('Private place')}
                  />
                </div>
                <div css={{ marginBottom: 22 }}>
                  <Input
                    variant={$INPUT.radio}
                    title="Shared room"
                    subtitle="Guests sleep in a bedroom or a common area that could be shared with others."
                    selected={data.stay === 'Shared room'}
                    // select={() => setData({ ...data, stay: 'Shared room' })}
                    select={() => handlePlaceTypeChange('Shared room')}
                  />
                </div>
              </div>
            </Layout>
          </div>
        </div>
      )}
    </div>
  );
};

export const room = (props) => {
  return {
    room: {
      component: <RoomCreate {...props} />,
      css: {},
    },
  };
};
