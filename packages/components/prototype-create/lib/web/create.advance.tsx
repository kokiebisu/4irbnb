/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm';
import { Layout } from '@nextbnb/design/layout/dist/bundle.esm';

const AdvanceCreate: React.FC<{
  selectAnytime?: any;
  selectMonth?: any;
  selectUnavailable?: any;
  data?: any;
}> = ({
  selectAnytime = () => alert('Select anytime'),
  selectMonth = () => alert('Select month'),
  selectUnavailable = () => alert('Select unavailable'),
  data = {
    advance: 0,
  },
}) => {
  return (
    <div>
      <div css={{ width: 300, marginBottom: 30 }}>
        <Layout variant="input" title="How far in advance can guests book?">
          <div css={{ marginTop: 22 }}>
            <div css={{ marginBottom: 10 }}>
              <Input
                variant={$INPUT.radio}
                title="Any time"
                selected={data.advance === 0}
                // select={() => setData({ ...data, advance: 0 })}
                select={selectAnytime}
              />
            </div>
            {[{ months: 3 }, { months: 6 }, { months: 9 }, { months: 12 }].map(
              ({ months }, index) => (
                <div key={index} css={{ marginBottom: 10 }}>
                  <Input
                    variant={$INPUT.radio}
                    title={`${months === 12 ? 1 : months} ${
                      months === 12 ? 'year' : 'months in advance'
                    }`}
                    selected={data.advance === months}
                    // select={() => setData({ ...data, advance: months })}
                    select={selectMonth}
                  />
                </div>
              )
            )}
            <div css={{ marginBottom: 10 }}>
              <Input
                variant={$INPUT.radio}
                title="Dates unavailable by default"
                subtitle="Your entire calendar will be blocked by default, which means you’ll have to manually unblock dates to get booked."
                selected={data.advance === 'unavailable'}
                // select={() => setData({ ...data, advance: 'unavailable' })}
                select={selectUnavailable}
              />
            </div>
          </div>
        </Layout>
      </div>
      <div css={{ maxWidth: 300 }}>
        <h4 css={{ fontSize: 13, color: 'grey.600' }}>
          <span css={{ color: 'cyan.800', fontWeight: 300 }}>Tip: </span>
          Most hosts can keep their calendars updated up to 6 months out.
        </h4>
      </div>
    </div>
  );
};

export const advance = (props) => {
  return {
    advance: {
      component: <AdvanceCreate {...props} />,
      css: {},
    },
  };
};
