import { Input, $Input } from '@input';
import { Layout } from '@layout';

export interface AdvanceCreateProps {
  setData?: (data: any) => void;
  data?: { advance: number };
}

export const AdvanceCreate: React.FC<AdvanceCreateProps> = ({
  setData,
  data = {
    advance: 0,
  },
}) => {
  return (
    <div>
      <div style={{ width: 300 }} className="mb-5">
        <Layout variant="input" title="How far in advance can guests book?">
          <div className="mt-4">
            <div className="mb-3">
              <Input
                variant={$Input.RADIO}
                title="Any time"
                selected={data.advance === 0}
                select={() => setData({ ...data, advance: 0 })}
              />
            </div>
            {[{ months: 3 }, { months: 6 }, { months: 9 }, { months: 12 }].map(
              ({ months }, index) => (
                <div key={index} className="mb-3">
                  <Input
                    variant={$Input.RADIO}
                    title={`${months === 12 ? 1 : months} ${
                      months === 12 ? 'year' : 'months in advance'
                    }`}
                    selected={data.advance === months}
                    select={() => setData({ ...data, advance: months })}
                  />
                </div>
              )
            )}
            <div className="mb-3">
              <Input
                variant={$Input.RADIO}
                title="Dates unavailable by default"
                subtitle="Your entire calendar will be blocked by default, which means you’ll have to manually unblock dates to get booked."
                selected={data.advance === 'unavailable'}
                select={() => setData({ ...data, advance: 'unavailable' })}
              />
            </div>
          </div>
        </Layout>
      </div>
      <div style={{ maxWidth: 300 }}>
        <h4 className="text-sm text-gray-300">
          <span className="text-green-800 font-light">Tip: </span>
          Most hosts can keep their calendars updated up to 6 months out.
        </h4>
      </div>
    </div>
  );
};
