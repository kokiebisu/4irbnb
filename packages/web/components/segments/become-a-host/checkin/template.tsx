import space from '@styles/space.module.scss';
import font from '@styles/font.module.scss';
import color from '@styles/color.module.scss';
import layout from '@styles/layout.module.scss';

import { Input, $Input } from '@input';
import { Layout } from '@layout';

export interface CheckInSegmentTemplateProps {
  notice?: number;
  checkinFrom?: any;
  checkinTo?: any;
  handleNoticeSameDayChange?: () => void;
  handleNoticeDayChange?: (day: any) => void;
  handleSelectChange?: (e: any, type: string) => void;
}

export const CheckInSegmentTemplate: React.FC<CheckInSegmentTemplateProps> = ({
  notice,
  checkinFrom,
  checkinTo,
  handleNoticeSameDayChange,
  handleNoticeDayChange,
  handleSelectChange,
}) => {
  return (
    <div>
      <div style={{ width: 300 }} className="mb-6">
        <Layout
          variant="input"
          title="How much notice do you need before a guest arrives?"
        >
          <div className="mt-4">
            <div className="mb-3">
              <Input
                variant={$Input.RADIO}
                title="Same day"
                selected={notice === 0}
                select={handleNoticeSameDayChange}
              />
            </div>
            {[{ day: 1 }, { day: 2 }, { day: 3 }, { day: 7 }].map(
              ({ day }, index) => (
                <div key={index} className={[space['m-b--10']].join(' ')}>
                  <Input
                    variant={$Input.RADIO}
                    title={`${day} ${day > 1 ? 'days' : 'day'}`}
                    selected={notice === day}
                    select={() => handleNoticeDayChange(day)}
                  />
                </div>
              )
            )}
          </div>
        </Layout>
      </div>
      <div style={{ maxWidth: 300 }}>
        <h4 className={[font['size--13'], color['c--gray__1']].join(' ')}>
          <span
            className={[color['c--darkgreen__3'], font['weight--300']].join(
              ' '
            )}
          >
            Tip:{' '}
          </span>
          Letting guests book same-day reservations can help you get guests who
          book last-minute trips.
        </h4>
      </div>
      <div
        className={[color['bg--white__2'], space['m-v--32']].join(' ')}
        style={{ width: '100%', height: 1 }}
      />
      <div>
        <div className={[space['m-b--12']].join(' ')}>
          <h4>When can guests check in?</h4>
        </div>
        <div className="grid grid-cols-2 gap-x-3">
          <div>
            <div className={[space['m-b--8']].join(' ')}>
              <h4 className={[color['c--gray__0'], font['size--13']].join(' ')}>
                From:{' '}
              </h4>
            </div>
            <div>
              <Input
                variant={$Input.SELECT}
                inputType="checkinFrom"
                value={checkinFrom}
                handleChange={(e) => handleSelectChange(e, 'checkinFrom')}
              />
            </div>
          </div>
          <div>
            <div className={[space['m-b--8']].join(' ')}>
              <h4 className={[color['c--gray__0'], font['size--13']].join(' ')}>
                To:{' '}
              </h4>
            </div>
            <div>
              <Input
                variant={$Input.SELECT}
                inputType="checkinTo"
                value={checkinTo}
                handleChange={(e) => handleSelectChange(e, 'checkinTo')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
