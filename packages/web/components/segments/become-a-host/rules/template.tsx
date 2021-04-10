import { Input, $Input } from '@input';

export interface RulesSegmentTemplateProps {
  data?: { details: string[] };
  setData?: (params: any) => void;
  handleChange?: (property: string, item: any) => void;
  rules?: { title: string; item: string }[];
}

/**
 * Renders the /become-a-host/rules page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const RulesSegmentTemplate: React.FC<RulesSegmentTemplateProps> = ({
  data,
  setData,
  handleChange,
  rules,
}) => {
  return (
    <div>
      <div>
        <h3 className="text-xl text-gray-700">
          Set house rules for your guests
        </h3>
      </div>
      <div>
        <p className="text-sm">
          Guests must agree to your house rules before they book.
        </p>
      </div>
      <div className="mb-4">
        <div className="my-3">
          <Input
            variant={$Input.CLOSED}
            title="Smoking allowed"
            data={data}
            setData={setData}
            value="smoking"
          />
        </div>
        <div className="my-3">
          <Input
            variant={$Input.CLOSED}
            title="Events allowed"
            data={data}
            setData={setData}
            value="event"
          />
        </div>
      </div>
      <div className="mb-7">
        <div className="my-4">
          <h3>Details guests must know about your home</h3>
        </div>
        {rules.map(({ title, item }, index) => {
          return (
            <div key={index} className="mb-4">
              <Input
                check={() => handleChange('details', item)}
                checked={data.details.includes(item)}
                variant={$Input.CHECKBOX}
                title={title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
