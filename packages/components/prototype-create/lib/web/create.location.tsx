/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm';

/**
 * Renders the /become-a-host/location page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
const LocationCreate: React.FC<{
  data?: any;
  handleCountryChange?: (e) => void;
  handlePostalCodeChange?: (e) => void;
  handleStreetAddressChange?: (e) => void;
  handleAptChange?: (e) => void;
  handleCityChange?: (e) => void;
  handleStateChange?: (e) => void;
}> = ({
  data,
  handleCountryChange = (e) => alert(`Changed country to ${e.target.value}`),
  handlePostalCodeChange = (e) =>
    alert(`Changed postal code to ${e.target.value}`),
  handleStreetAddressChange = (e) =>
    alert(`Changed street address to ${e.target.value}`),
  handleAptChange = (e) => alert(`Changed apt to ${e.target.value}`),
  handleCityChange = (e) => alert(`Changed city to ${e.target.value}`),
  handleStateChange = (e) => alert(`Changed state to ${e.target.value}`),
}) => {
  return (
    <div>
      <div css={{ marginBottom: 8 }}>
        <h3 css={{ fontSize: 28, color: 'grey.700' }}>
          Where's your place located?
        </h3>
      </div>
      <div css={{ marginBottom: 16 }}>
        <p css={{ fontSize: 14, color: 'grey.700' }}>
          Guests will only get your exact address once they've booked a
          reservation.
        </p>
      </div>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          columnGap: 15,
          marginTop: 32,
          marginBottom: 18,
        }}
      >
        <div css={{ marginBottom: 8 }}>
          <div css={{ marginBottom: 8 }}>
            <p css={{ fontSize: 14 }}>Country</p>
          </div>
          <Input
            variant={$INPUT.select}
            // handleChange={(e) => setData({ ...data, country: e.target.value })}
            handleChange={handleCountryChange}
            value={data?.country}
            inputType="country"
          />
        </div>
        <div css={{ marginBottom: 8 }}>
          <div css={{ marginBottom: 8 }}>
            <p css={{ fontSize: 14 }}>Postal Code</p>
          </div>
          <Input
            name="postal"
            variant={$INPUT.text}
            // handleChange={(e) => setData({ ...data, postal: e.target.value })}
            handleChange={handlePostalCodeChange}
            value={data?.postal}
          />
        </div>
      </div>
      <div css={{ marginBottom: 30 }}>
        <div css={{ marginBottom: 8 }}>
          <p css={{ fontSize: 14 }}>Street</p>
        </div>
        <div>
          <Input
            name="street"
            variant={$INPUT.text}
            // handleChange={(e) => setData({ ...data, street: e.target.value })}
            handleChange={handleStreetAddressChange}
            value={data?.street}
          />
        </div>
        <div css={{ marginTop: 4 }}>
          <p css={{ fontSize: 10 }}>e.g. 111108 108th Avenue</p>
        </div>
      </div>
      <div css={{ marginBottom: 8 }}>
        <div css={{ marginBottom: 8 }}>
          <p css={{ fontSize: 14 }}>Apt, Suite (optional)</p>
        </div>
        <div>
          <Input
            name="apt"
            variant={$INPUT.text}
            handleChange={handleAptChange}
            // handleChange={(e) => setData({ ...data, apt: e.target.value })}
            value={data?.apt}
          />
        </div>
        <div css={{ marginTop: 4 }}>
          <p css={{ fontSize: 10 }}>e.g. Suite #7</p>
        </div>
      </div>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          columnGap: 15,
          marginTop: 32,
          marginBottom: 18,
        }}
      >
        <div css={{ marginBottom: 8 }}>
          <div css={{ marginBottom: 8 }}>
            <p css={{ fontSize: 14 }}>City</p>
          </div>
          <div>
            <Input
              variant={$INPUT.text}
              handleChange={handleCityChange}
              // handleChange={(e) => setData({ ...data, city: e.target.value })}
              value={data?.city}
              inputType="city"
            />
          </div>
          <div css={{ marginTop: 4 }}>
            <p css={{ fontSize: 10 }}>e.g. Edmonton</p>
          </div>
        </div>
        <div css={{ marginBottom: 8 }}>
          <div css={{ marginBottom: 8 }}>
            <p css={{ fontSize: 14 }}>State</p>
          </div>
          <div>
            <Input
              name="state"
              variant={$INPUT.text}
              handleChange={handleStateChange}
              // handleChange={(e) => setData({ ...data, state: e.target.value })}
              value={data?.state}
            />
          </div>
          <div css={{ marginTop: 4 }}>
            <p css={{ fontSize: 10 }}>e.g. Alberta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const location = (props) => {
  return {
    location: {
      component: <LocationCreate {...props} />,
      css: {},
    },
  };
};
