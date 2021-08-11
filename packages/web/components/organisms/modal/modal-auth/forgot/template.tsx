import { Input } from "@atoms";
import { Button } from "@atoms";
import { Bullet } from "@atoms";

export interface ForgotPasswordPrototypeTemplateProps {
  handleSubmit: (e: any) => void;
  handleEmailChange: (e: string) => void;
  email: string;
  emailErrors: string;
}

/**
 * Renders the login template component
 */
export const ForgotPasswordPrototypeTemplate: React.FC<ForgotPasswordPrototypeTemplateProps> = ({
  handleSubmit,
  handleEmailChange,
  email,
  emailErrors,
}) => {
  return (
    <div className="p-5">
      <form onSubmit={handleSubmit}>
        <div style={{ height: 300 }} className="flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <p>
                Enter the email address associated with your account, and we’ll
                email you a link to reset your password.
              </p>
            </div>
            <div>
              <div>
                <Input
                  variant="email"
                  onChange={handleEmailChange}
                  value={email}
                  errors={!!emailErrors}
                />
              </div>
              <div>
                {!!emailErrors && (
                  <div className="mt-2">
                    <Bullet variant="required" message={emailErrors} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Button
              variant="primary"
              size="md"
              title="Send reset link"
              stretch
              fill="black"
              color="white"
              onClick={() => alert("click")}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
