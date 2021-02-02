/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Input, $Input } from "../../../atoms/input/web";

/**
 * Renders the /become-a-host/phone page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const PhoneCreate: React.FC<{ data?: any; setData?: any }> = ({
  data = { phone: "000-000-0000" },
  setData,
}) => {
  return (
    <div>
      <div css={{ marginBottom: 12 }}>
        <h3 css={{ fontSize: 28, color: "gray__2" }}>Add your mobile number</h3>
      </div>
      <div css={{ marginBottom: 45 }}>
        <p css={{ fontSize: 14, color: "gray__2" }}>
          We'll send you booking requests, reminders, and other notifications.
          This number should be able to receive texts or calls.
        </p>
      </div>
      <div css={{ marginBottom: 30 }}>
        <div css={{ marginBottom: 8 }}>
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
