import { Input } from '@atoms';
import { Layout } from '@layout';

export interface AdvanceSegmentTemplateProps {
  advance?: number | string;
  handleAdvanceAnyTimeChange?: () => void;
  handleAdvanceMonthsChange?: (month: number) => void;
  handleAdvanceUnavailableChange?: () => void;
}

export const AdvanceSegmentTemplate: React.FC<AdvanceSegmentTemplateProps> = ({
  advance,
  handleAdvanceAnyTimeChange,
  handleAdvanceMonthsChange,
  handleAdvanceUnavailableChange,
}) => {
  return (
    <div>
      <div style={{ width: 300 }} className="mb-5">
        <Layout variant="input" title="How far in advance can guests book?">
          <div className="mt-4">
            <div className="mb-3">
              <Input
                variant="radio"
                title="Any time"
                selected={advance === 0}
                select={handleAdvanceAnyTimeChange}
              />
            </div>
            {[{ months: 3 }, { months: 6 }, { months: 9 }, { months: 12 }].map(
              ({ months }, index) => (
                <div key={index} className="mb-3">
                  <Input
                    variant="radio"
                    title={`${months === 12 ? 1 : months} ${
                      months === 12 ? 'year' : 'months in advance'
                    }`}
                    selected={advance === months}
                    select={handleAdvanceMonthsChange}
                  />
                </div>
              )
            )}
            <div className="mb-3">
              <Input
                variant="radio"
                title="Dates unavailable by default"
                subtitle="Your entire calendar will be blocked by default, which means you’ll have to manually unblock dates to get booked."
                selected={advance === 'unavailable'}
                select={handleAdvanceUnavailableChange}
              />
            </div>
          </div>
        </Layout>
      </div>
      <div style={{ maxWidth: 300 }}>
        <h4 className="text-sm text-gray-700">
          <span className="text-green-700 font-light">Tip: </span>
          Most hosts can keep their calendars updated up to 6 months out.
        </h4>
      </div>
    </div>
  );
};
