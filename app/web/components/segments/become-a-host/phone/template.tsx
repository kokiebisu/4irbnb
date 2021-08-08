import { Input } from "@atoms";

export interface PhoneSegmentTemplateProps {
  phone?: number;
  handleChange: (e: any, type: string) => void;
}

/**
 * Renders the /become-a-host/phone page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const PhoneSegmentTemplate: React.FC<PhoneSegmentTemplateProps> = ({
  phone,
  handleChange,
}) => {
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
            variant="verify"
            value={phone}
            onChange={(e) => handleChange(e, "phone")}
          />
        </div>
      </div>
    </div>
  );
};
