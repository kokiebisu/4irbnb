/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm';
import { Layout } from '@nextbnb/design/layout/dist/bundle.esm';

const CheckInCreate: React.FC<{
  selectSameDayNotice: () => void;
  selectDayNotice: (day: number) => void;
  selectCheckinFrom: (e) => void;
  selectCheckinTo: (e) => void;
  data?: any;
}> = ({
  selectSameDayNotice = () => alert('Select notice to same day'),
  selectDayNotice = (day: number) => alert(`Select notice to ${day} days.`),
  selectCheckinFrom = (e) =>
    alert(`Changed checkin start date from ${e.target.value}`),
  selectCheckinTo = (e) =>
    alert(`Changed checkin end date from ${e.target.value}`),
  data = {
    notice: 0,
  },
}) => {
  return (
    <div>
      <div css={{ width: 300, marginBottom: 30 }}>
        <Layout
          variant="input"
          title="How much notice do you need before a guest arrives?"
        >
          <div css={{ marginTop: 22 }}>
            <div css={{ marginBottom: 10 }}>
              <Input
                variant={$INPUT.radio}
                title="Same day"
                selected={data.notice === 0}
                select={selectSameDayNotice}
                // select={() => setData({ ...data, notice: 0 })}
              />
            </div>
            {[{ day: 1 }, { day: 2 }, { day: 3 }, { day: 7 }].map(
              ({ day }, index) => (
                <div key={index} css={{ marginBottom: 10 }}>
                  <Input
                    variant={$INPUT.radio}
                    title={`${day} ${day > 1 ? 'days' : 'day'}`}
                    selected={data.notice === day}
                    // select={() => setData({ ...data, notice: day })}
                    select={() => selectDayNotice(day)}
                  />
                </div>
              )
            )}
          </div>
        </Layout>
      </div>
      <div css={{ maxWidth: 300 }}>
        <h4 css={{ fontSize: 13, color: 'grey.600' }}>
          <span css={{ color: 'cyan.800', fontWeight: 300 }}>Tip: </span>
          Letting guests book same-day reservations can help you get guests who
          book last-minute trips.
        </h4>
      </div>
      <div
        css={{ bg: 'grey.300', margin: '32px 0', width: '100%', height: 1 }}
      />
      <div>
        <div css={{ marginBottom: 12 }}>
          <h4>When can guests check in?</h4>
        </div>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: 10,
          }}
        >
          <div>
            <div css={{ marginBottom: 8 }}>
              <h4 css={{ color: 'grey.500', fontSize: 13 }}>From: </h4>
            </div>
            <div>
              <Input
                variant={$INPUT.select}
                inputType="checkinFrom"
                value={data.checkinFrom}
                // handleChange={(e) =>
                //   setData({ ...data, checkinFrom: e.target.value })
                // }
                handleChange={selectCheckinFrom}
              />
            </div>
          </div>
          <div>
            <div css={{ marginBottom: 8 }}>
              <h4 css={{ color: 'grey.500', fontSize: 13 }}>To: </h4>
            </div>
            <div>
              <Input
                variant={$INPUT.select}
                inputType="checkinTo"
                value={data.checkinTo}
                // handleChange={(e) =>
                //   setData({ ...data, checkinTo: e.target.value })
                // }
                handleChange={selectCheckinTo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const checkin = (props) => {
  return {
    checkin: {
      component: <CheckInCreate {...props} />,
      css: {},
    },
  };
};
