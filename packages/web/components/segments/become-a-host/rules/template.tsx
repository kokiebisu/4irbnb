import { Input, $Input } from '@input';

export interface RulesSegmentTemplateProps {
  rules?: { title: string; item: string }[];
  selectedRules?: string[];
  isSmokingAllowed?: boolean;
  isEventAllowed?: boolean;
  handleSwitch?: (flag: boolean, property: string) => void;
  handleChange?: (property: string, item: any) => void;
}

/**
 * Renders the /become-a-host/rules page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const RulesSegmentTemplate: React.FC<RulesSegmentTemplateProps> = ({
  rules,
  selectedRules,
  isSmokingAllowed,
  isEventAllowed,
  handleSwitch,
  handleChange,
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
            property="smoking"
            flag={isSmokingAllowed}
            onClickSwitchToFalse={() => handleSwitch(false, 'smoking')}
            onClickSwitchToTrue={() => handleSwitch(true, 'smoking')}
          />
        </div>
        <div className="my-3">
          <Input
            variant={$Input.CLOSED}
            title="Events allowed"
            property="event"
            flag={isEventAllowed}
            onClickSwitchToFalse={() => handleSwitch(false, 'event')}
            onClickSwitchToTrue={() => handleSwitch(true, 'event')}
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
                checked={selectedRules.includes(item)}
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
