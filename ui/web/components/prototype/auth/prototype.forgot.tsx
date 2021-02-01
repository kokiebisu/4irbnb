import { useFormik } from "formik";

import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";

import {
  Input,
  $Input,
} from "../components/organisms/modal/node_modules/@input";
import {
  Button,
  $Button,
} from "../components/organisms/modal/node_modules/@button";
import { Bullet, $Bullet } from "@bullet";

import { validateForgotPassword as validate } from "@helper/auth";

/**
 * Renders the login template component
 */
export const ForgotPasswordPrototype: React.FC<{}> = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div className={[space["p--24"]].join(" ")}>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{ height: 300 }}
          className={[
            layout["flex"],
            layout["flex-col"],
            layout["justify-between"],
          ].join(" ")}
        >
          <div>
            <div className={[space["m-b--16"]].join(" ")}>
              <p>
                Enter the email address associated with your account, and we’ll
                email you a link to reset your password.
              </p>
            </div>
            <div>
              <div>
                <Input
                  variant={$Input.EMAIL}
                  handleChange={formik.handleChange}
                  value={formik.values.email}
                  errors={formik.errors.email !== undefined}
                />
              </div>
              <div>
                {formik.errors.email !== undefined && (
                  <div className={[space["m-t--6"]].join(" ")}>
                    <Bullet
                      variant={$Bullet.REQUIRED}
                      message={formik.errors.email}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={[].join(" ")}>
            <Button
              variant={$Button.PRIMARY}
              size="md"
              fill="black"
              title="Send reset link"
              block
            />
          </div>
        </div>
      </form>
    </div>
  );
};
