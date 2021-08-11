import { Input } from "@atoms";
import { Button } from "@atoms";
import { Bullet } from "@atoms";

export interface SignupPrototypeTemplateProps {
  handleSubmit: (e: any) => void;
  firstName: string;
  firstNameErrors: string;
  handleFirstNameChange: (e: any) => void;
  lastName: string;
  lastNameErrors: string;
  handleLastNameChange: (e: any) => void;
  day: string;
  dayErrors: string;
  handleDayChange: (e: any) => void;
  month: string;
  monthErrors: string;
  handleMonthChange: (e: any) => void;
  year: string;
  yearErrors: string;
  handleYearChange: (e: any) => void;
  email: string;
  handleEmailChange: (e: any) => void;
  emailErrors: string;
  password: string;
  handlePasswordChange: (e: any) => void;
  passwordErrors: string;
  loading: boolean;
  handleLoadingChange: (state: boolean) => void;
}

/**
 * Renders the signup template component
 */
export const SignupPrototypeTemplate: React.FC<SignupPrototypeTemplateProps> = ({
  handleSubmit,
  firstName,
  firstNameErrors,
  handleFirstNameChange,
  lastName,
  lastNameErrors,
  handleLastNameChange,
  day,
  dayErrors,
  handleDayChange,
  month,
  monthErrors,
  handleMonthChange,
  year,
  yearErrors,
  handleYearChange,
  email,
  handleEmailChange,
  emailErrors,
  password,
  handlePasswordChange,
  passwordErrors,
  loading,
  handleLoadingChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="p-5">
        <div>
          <Input
            variant="name"
            direction="bottom"
            name="firstname"
            errors={!!firstNameErrors}
            onChange={handleFirstNameChange}
            value={firstName}
          />
          <Input
            variant="name"
            direction="top"
            name="lastname"
            errors={!!lastNameErrors}
            onChange={handleLastNameChange}
            value={lastName}
          />
          <div>
            {firstNameErrors ? (
              <div className="mt-2">
                <Bullet variant="required" message={firstNameErrors} />
              </div>
            ) : null}
          </div>
          <div>
            {lastNameErrors ? (
              <div className="mt-2">
                <Bullet variant="required" message={lastNameErrors} />
              </div>
            ) : null}
          </div>
          <div>
            {firstNameErrors && lastNameErrors && (
              <p className="mt-2 text-xs text-gray-500">
                Make sure it matches the name on your government ID.
              </p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <div className="flex rounded-md border border-gray-500">
            <Input
              dateType="day"
              variant="birthdate"
              // handleChange={formik.handleChange}
              value={day}
              errors={!!dayErrors}
              onChange={handleDayChange}
            />
            <Input
              // spread
              dateType="month"
              variant="birthdate"
              // direction="center"
              // handleChange={formik.handleChange}
              value={month}
              errors={!!monthErrors}
              onChange={handleMonthChange}
            />
            <Input
              // spread
              dateType="year"
              variant="birthdate"
              // direction="right"
              // handleChange={formik.handleChange}
              value={year}
              errors={!!yearErrors}
              onChange={handleYearChange}
            />
          </div>
          {day && (
            <div className="mt-2">
              <Bullet variant="required" message={day} />
            </div>
          )}
          {month && (
            <div className="mt-2">
              <Bullet variant="required" message={month} />
            </div>
          )}
          {year && (
            <div className="mt-2">
              <Bullet variant="required" message={year} />
            </div>
          )}
        </div>
        {day && month && year ? (
          <p className="mt-2 text-xs text-gray-400">
            To sign up, you need to be at least 18. Your birthday won't be
            shared with other people who use Airbnb.
          </p>
        ) : null}
        <div className="mt-5">
          <div>
            <Input
              variant="email"
              onChange={handleEmailChange}
              value={email}
              errors={!!emailErrors}
            />
          </div>
          <div>
            {emailErrors ? (
              <div className="mt-2">
                <Bullet variant="required" message={emailErrors} />
              </div>
            ) : (
              <p className="mt-2 text-xs text-gray-300">
                We'll email you trip confirmations and receipts
              </p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <div>
            <Input
              variant="password"
              onChange={handlePasswordChange}
              value={password}
              errors={!!passwordErrors}
            />
          </div>
          <div>
            {passwordErrors ? (
              <div className="mt-2">
                <Bullet variant="required" message={passwordErrors} />
              </div>
            ) : null}
          </div>
        </div>
        <div>
          <p className="mt-6 text-xs text-gray-500">
            By selecting <b>Agree and continue</b> below, I agree to Airbnb's{" "}
            <u className="font-medium text-blue-500">Terms of Service</u>,{" "}
            <u className="font-medium text-blue-500">
              Payments Terms of Service
            </u>
            , <u className="font-medium text-blue-500">Privacy Policy</u>, and{" "}
            <u className="font-medium text-blue-500">
              Nondiscrimination Policy
            </u>
            .
          </p>
        </div>
        <div className="mt-4">
          <Button
            variant="primary"
            title="Agree and continue"
            loading={loading}
            stretch
            onClick={handleLoadingChange}
            size="md"
            color="white"
            fill="black"
          />
        </div>
      </div>
    </form>
  );
};
