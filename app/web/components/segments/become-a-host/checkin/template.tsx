import { Input, $Input } from '@atoms';
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
                <div key={index} className="mb-3">
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
        <h4 className="text-sm text-gray-600">
          <span className="text-green-700 font-light">Tip: </span>
          Letting guests book same-day reservations can help you get guests who
          book last-minute trips.
        </h4>
      </div>
      <div className="bg-gray-500 my-5 w-full h-0.5" />
      <div>
        <div className="mb-3">
          <h4>When can guests check in?</h4>
        </div>
        <div className="grid grid-cols-2 gap-x-3">
          <div>
            <div className="mb-3">
              <h4 className="text-gray-500 text-sm">From: </h4>
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
            <div className="mb-2">
              <h4 className="text-gray-500 text-sm">To: </h4>
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
