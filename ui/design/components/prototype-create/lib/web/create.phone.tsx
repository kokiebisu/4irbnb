/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm';

/**
 * Renders the /become-a-host/phone page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
const PhoneCreate: React.FC<{
  data?: any;
  handlePhoneNumberChange?: (e) => void;
}> = ({
  data = { phone: '000-000-0000' },
  handlePhoneNumberChange = () => alert(`Changed phone number`),
}) => {
  return (
    <div>
      <div css={{ marginBottom: 12 }}>
        <h3 css={{ fontSize: 28, color: 'grey.700' }}>
          Add your mobile number
        </h3>
      </div>
      <div css={{ marginBottom: 45 }}>
        <p css={{ fontSize: 14, color: 'grey.700' }}>
          We'll send you booking requests, reminders, and other notifications.
          This number should be able to receive texts or calls.
        </p>
      </div>
      <div css={{ marginBottom: 30 }}>
        <div css={{ marginBottom: 8 }}>
          <Input
            variant={$INPUT.verify}
            value={data.phone}
            // handleChange={(e) => setData({ ...data, phone: e.target.value })}
            handleChange={handlePhoneNumberChange}
          />
        </div>
      </div>
    </div>
  );
};

export const phone = (props) => {
  return {
    phone: {
      component: <PhoneCreate {...props} />,
      css: {},
    },
  };
};
