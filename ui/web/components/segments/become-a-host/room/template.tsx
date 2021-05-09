import { Input } from '@input';
import { Layout } from '@layout';

export interface RoomSegmentTemplateProps {
  place?: string;
  property?: string;
  stay?: string;
  description?: string;
  handleChange?: (e: any, property: string) => void;
}

/**
 * Renders the /become-a-host/room page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const RoomSegmentTemplate: React.FC<RoomSegmentTemplateProps> = ({
  place,
  property,
  stay,
  description,
  handleChange,
}) => {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl text-gray-700">
          What kind of place are you listing?
        </h3>
      </div>
      <div style={{ width: 250 }} className="mb-4">
        <Layout variant="input" title="First, let's narrow things down">
          <Input
            inputType="place"
            variant="select"
            value={place}
            onChange={(e) => handleChange(e, 'place')}
          />
        </Layout>
      </div>
      <div className="mb-2" style={{ width: 250 }}>
        <Layout variant="input" title="Now choose a property type">
          <Input
            disabled={!place}
            inputType={place}
            variant="select"
            value={property}
            onChange={(e) => handleChange(e, 'property')}
          />
        </Layout>
      </div>
      {property && description && (
        <div>
          <div className="mt-4">
            <h4 className="text-sm text-gray-300">{description}</h4>
          </div>
          <div className="my-6">
            <Layout variant="input" title="What will guests have?">
              <div className="mt-4">
                {[
                  {
                    title: 'Entire place',
                    subtitle:
                      'Guests have the whole place to themselves. This usually includes a bedroom, a bathroom, and a kitchen.',
                  },
                  {
                    title: 'Private place',
                    subtitle:
                      'Guests have their own private room for sleeping. Other areas could be shared.',
                  },
                  {
                    title: 'Shared room',
                    subtitle:
                      'Guests sleep in a bedroom or a common area that could be shared with others.',
                  },
                ].map((stayType, index) => (
                  <div key={index} className="mb-4">
                    <Input
                      variant="radio"
                      title={stayType.title}
                      subtitle={stayType.subtitle}
                      value={stay === stayType.title}
                      onChange={() => handleChange(stayType.title, 'stay')}
                    />
                  </div>
                ))}
              </div>
            </Layout>
          </div>
        </div>
      )}
    </div>
  );
};
