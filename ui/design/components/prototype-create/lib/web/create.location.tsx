/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, $INPUT } from '@nextbnb/atoms-input';

/**
 * Renders the /become-a-host/location page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
const LocationCreate: React.FC<{
  data?: any;
  setData?: (params: any) => void;
}> = ({ data, setData }) => {
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
            handleChange={(e) => setData({ ...data, country: e.target.value })}
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
            handleChange={(e) => setData({ ...data, postal: e.target.value })}
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
            handleChange={(e) => setData({ ...data, street: e.target.value })}
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
            handleChange={(e) => setData({ ...data, apt: e.target.value })}
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
              handleChange={(e) => setData({ ...data, city: e.target.value })}
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
              handleChange={(e) => setData({ ...data, state: e.target.value })}
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
