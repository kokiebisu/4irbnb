import { Input, $Input } from '@atoms';
import { Layout } from '@layout';

export interface BedroomsSegmentTemplateProps {
  guests?: number;
  bedrooms?: number;
  beds?: number;
  handleCounterAdd?: (type: string) => void;
  handleCounterSubtract?: (type: string) => void;
  handleSelectChange?: (type: string, e: any) => void;
}

export const BedroomsSegmentTemplate: React.FC<BedroomsSegmentTemplateProps> = ({
  guests,
  bedrooms,
  beds,
  handleCounterAdd,
  handleCounterSubtract,
  handleSelectChange,
}) => {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl text-gray-700">
          How many guests can your place accommodate?
        </h3>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Check that you have enough beds to accomodate all your guests
          comfortably.
        </p>
      </div>
      <div style={{ width: 300 }} className="mb-6">
        <div className="mb-3">
          <Input
            title="Guests"
            variant={$Input.COUNTER}
            value={guests}
            add={() => handleCounterAdd('guests')}
            subtract={() => handleCounterSubtract('guests')}
            min={1}
            max={16}
            type="create"
          />
        </div>
      </div>
      <div className="mb-6" style={{ width: 300 }}>
        <Layout variant="input" title="How many bedrooms can guests use?">
          <div className="mt-4">
            <Input
              variant={$Input.SELECT}
              inputType="bedrooms"
              value={bedrooms}
              handleChange={(e) => handleSelectChange('bedrooms', e)}
            />
          </div>
        </Layout>
      </div>
      <div className="mb-3" style={{ width: 300 }}>
        <Layout variant="input" title="How many beds can guests use?">
          <div className="mt-4">
            <Input
              title="Beds"
              variant={$Input.COUNTER}
              value={beds}
              add={() => handleCounterAdd('beds')}
              subtract={() => handleCounterSubtract('beds')}
              min={1}
              max={50}
              type="create"
            />
          </div>
        </Layout>
      </div>
    </div>
  );
};
