import { Input, $Input } from '@input';

export interface PhoneCreateProps {
  data?: { phone: string };
  setData?: (param: any) => void;
}

/**
 * Renders the /become-a-host/phone page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const PhoneCreate: React.FC<PhoneCreateProps> = ({ data, setData }) => {
  return (
    <div>
      <div className="mb-3">
        <h3 className="text-2xl text-gray-700">Add your mobile number</h3>
      </div>
      <div className="mb-8">
        <p className="text-sm text-gray-700">
          We'll send you booking requests, reminders, and other notifications.
          This number should be able to receive texts or calls.
        </p>
      </div>
      <div className="mb-6">
        <div className="mb-3">
          <Input
            variant={$Input.VERIFY}
            value={data.phone}
            handleChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};
