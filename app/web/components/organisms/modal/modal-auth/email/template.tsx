import { Button, Icon, Input } from "@atoms";

export interface EmailPrototypeTemplateProps {
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
  handleSubmit: () => void;
  handleRegionChange: (e: any) => void;
  handlePhoneNumberChange: (e: any) => void;
  handleEmailChange: (e: any) => void;
  display: "auth_phone" | "auth_email";
  region: string;
  regionError: boolean;
  email: string;
  emailError: boolean;
  tel: string;
  telError: boolean;
}

/**
 * Renders the auth template component
 */
export const EmailPrototypeTemplate = ({
  display,
  region,
  regionError,
  tel,
  telError,
  email,
  emailError,
  authMethods,
  handleSubmit,
  handleRegionChange,
  handlePhoneNumberChange,
  handleEmailChange,
  phoneSwitchButton,
  emailSwitchButton,
}: EmailPrototypeTemplateProps): JSX.Element => {
  return (
    <div className="p-5">
      <div className="w-full">
        <div className="mb-6 mt-2">
          <h3 className="text-xl">Welcome to Airbnb</h3>
        </div>
        <form onSubmit={handleSubmit}>
          {display === "auth_phone" ? (
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
          ) : (
            <div className="mb-2">
              <Input
                variant="email"
                onChange={handleEmailChange}
                value={email}
                errors={emailError}
              />
            </div>
          )}
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
                  auth={method}
                  onClick={method.handleClick}
                  icon={<Icon {...method.icon} />}
                  name={method.name}
                  stretched
                />
              </div>
            );
          })}
          {display === "auth_phone" ? (
            <div className="my-4">
              <Button
                variant="auth"
                onClick={emailSwitchButton.handleClick}
                icon={<Icon {...emailSwitchButton.icon} />}
                name={emailSwitchButton.name}
                stretched
              />
            </div>
          ) : (
            <div className="my-4">
              <Button
                variant="auth"
                onClick={phoneSwitchButton.handleClick}
                icon={<Icon {...phoneSwitchButton.icon} />}
                name={phoneSwitchButton.name}
                stretched
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
