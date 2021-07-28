import { useFormik } from "formik";
import { useAuthDispatch, useAuthState } from "@context/auth";
import { Button, Icon, Input } from "@atoms";
import { validateAuth as validate } from "@helper/auth";
import { phone } from "@template/become-a-host/phone/mock";

export interface AuthPrototypeTemplateProps {
  authMethods: {
    name: string;
    icon: any;
    handleClick: any;
  }[];
  phone: {
    name: string;
    icon: any;
    handleClick: any;
  };
  email: {
    name: string;
    icon: any;
    handleClick: any;
  };
}

/**
 * Renders the auth template component
 */
export const AuthPrototypeTemplate = ({
  authMethods,
  phone,
  email,
}: AuthPrototypeTemplateProps): JSX.Element => {
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();

  const formik = useFormik({
    initialValues: {
      region: "",
      phone: "",
    },
    validate,
    onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const switchAuth = () => {
    if (authState.title === "Log in") {
      // return authDispatch({ type: 'auth_signup' });
    }
    // return authDispatch({ type: 'auth_login' });
  };

  console.log("authState.display", authState.display);

  return (
    <div className="p-5">
      <div className="w-full">
        <div className="mb-4">
          <h3 className="text-2xl">Welcome to Airbnb</h3>
        </div>
        <form onSubmit={formik.handleSubmit}>
          {authState.display === "auth_phone" ? (
            <div className="mb-2">
              <div>
                <Input
                  variant="region"
                  direction="bottom"
                  onChange={formik.handleChange}
                  value={formik.values.region}
                  errors={!!formik.errors.region}
                />
                <Input
                  variant="phone"
                  direction="top"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  errors={!!formik.errors.phone}
                />
              </div>
            </div>
          ) : (
            <div className="mb-2">
              <Input
                variant="email"
                onChange={formik.handleChange}
                value={formik.values.region}
                errors={!!formik.errors.region}
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
          {authState.display === "auth_phone" ? (
            <div className="my-4">
              <Button
                variant="auth"
                onClick={email.handleClick}
                icon={<Icon {...email.icon} />}
                name={email.name}
                stretched
              />
            </div>
          ) : (
            <div className="my-4">
              <Button
                variant="auth"
                onClick={phone.handleClick}
                icon={<Icon {...phone.icon} />}
                name={phone.name}
                stretched
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
