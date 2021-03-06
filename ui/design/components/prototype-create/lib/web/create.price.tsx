/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, $Input } from '@nextbnb/atoms-input';

const PriceCreate: React.FC<{ setData?: any; data?: any }> = ({
  setData,
  data = {
    basePrice: undefined,
    currency: 'USD',
  },
}) => {
  return (
    <div>
      <div css={{ marginBottom: 30 }}>
        <div css={{ marginBottom: 24 }}>
          <h3>Price your space</h3>
        </div>
        <div css={{ marginBottom: 24 }}>
          <div>
            <h3 css={{ fontSize: 14 }}>
              Increase your chances of getting booked
            </h3>
          </div>
          <div>
            <h4 css={{ fontSize: 14 }}>
              Set up Smart Pricing to automativally keep your nightly prices
              competitive as demand in your area changes.
            </h4>
          </div>
        </div>
        <div css={{ marginBottom: 24 }}>
          <div css={{ display: 'flex', alignItems: 'center' }}>
            <div css={{ marginRight: 4 }}>
              <h2 css={{ fontSize: 16 }}>
                Set up the same base price for each night
              </h2>
            </div>
            <div css={{ padding: 3, fontSize: 9, bg: 'grey.300' }}>
              <h3>RECOMMENDED</h3>
            </div>
          </div>
          <div>
            <p css={{ fontSize: 11 }}>
              A 14% guest service fee is added to every host's price--but
              sometimes the amount will vary, depending on the length of the
              trip.
            </p>
          </div>
          <div>
            <p css={{ fontSize: 12, color: 'cyan.800' }}>
              Learn what fees pay for
            </p>
          </div>
        </div>
        <div css={{ marginBottom: 24 }}>
          <div>
            <h3 css={{ fontSize: 14 }}>Base price</h3>
          </div>
          <div css={{ marginBottom: 8 }}>
            <p css={{ fontSize: 13 }}>This will be your default price.</p>
          </div>
          <div>
            <Input
              variant={$Input.PRICE}
              title="Base price"
              subtitle="This will be your default price gor days when you decide to turn off Smart Pricing."
              tip={17}
              name="basePrice"
              value={data.basePrice}
              handleChange={(e) => {
                const onlyNumbers = /^[0-9\b]+$/;
                if (e.target.value == '' || onlyNumbers.test(e.target.value)) {
                  setData({ ...data, basePrice: e.target.value });
                }
              }}
            />
          </div>
          <div css={{ margin: '8px 0' }}>
            <h4 css={{ color: 'cyan.800', fontSize: 16 }}>Tip: $21</h4>
          </div>
        </div>
        <div>
          <div css={{ marginBottom: 8 }}>
            <h3 css={{ fontSize: 14 }}>Currency</h3>
          </div>
          <div>
            <Input variant={$Input.SELECT} inputType="currency" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const price = (props) => {
  return {
    price: {
      component: <PriceCreate {...props} />,
      css: {},
    },
  };
};
