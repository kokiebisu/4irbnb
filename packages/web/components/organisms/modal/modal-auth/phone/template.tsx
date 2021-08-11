import { Button, Icon, Input } from "@atoms";

export interface PhonePrototypeTemplateProps {
  authMethods: {
    name: string;
    icon: any;
    handleClick: any;
  }[];
  phoneSwitchButton: {
    name: string;
    icon: any;
    handleClick: any;
  };
  emailSwitchButton: {
    name: string;
    icon: any;
    handleClick: any;
  };
  handleSubmit: (e: any) => void;
  handleRegionChange: (e: any) => void;
  handlePhoneNumberChange: (e: any) => void;
  region: string;
  regionError: boolean;
  tel: string;
  telError: boolean;
}

/**
 * Renders the auth template component
 */
export const PhonePrototypeTemplate = ({
  region,
  regionError,
  tel,
  telError,
  authMethods,
  handleSubmit,
  handleRegionChange,
  handlePhoneNumberChange,
  emailSwitchButton,
}: PhonePrototypeTemplateProps): JSX.Element => {
  return (
    <div className="p-5">
      <div className="w-full">
        <div className="mb-6 mt-2">
          <h3 className="text-xl">Welcome to Airbnb</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <div>
              <Input
                variant="region"
                direction="bottom"
                onChange={handleRegionChange}
                value={region}
                errors={regionError}
              />
              <Input
                variant="phone"
                direction="top"
                onChange={handlePhoneNumberChange}
                value={tel}
                errors={telError}
              />
            </div>
          </div>
          <div>
            <p className="font-thin text-gray-500 text-sm">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
            </p>
          </div>
          <div className="my-4">
            <Button
              variant="primary"
              title="Continue"
              stretch
              size="md"
              color="white"
              onClick={() => alert("yo")}
              fill="black"
            />
          </div>
        </form>
        <div className="z-10 text-center relative ba">
          <span className="z-30 relative px-1 bg-white font-thin text-gray-500 text-sm">
            or
          </span>
        </div>
        <div>
          {authMethods.map((method, index) => {
            return (
              <div key={index} className="my-4">
                <Button
                  variant="auth"
                  // auth={method}
                  onClick={method.handleClick}
                  icon={<Icon {...method.icon} />}
                  name={method.name}
                  stretched
                />
              </div>
            );
          })}
          <div className="my-4">
            <Button
              variant="auth"
              onClick={emailSwitchButton.handleClick}
              icon={<Icon {...emailSwitchButton.icon} />}
              name={emailSwitchButton.name}
              stretched
            />
          </div>
        </div>
      </div>
    </div>
  );
};
