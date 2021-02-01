/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useFormik } from "formik";

import { Input, $Input } from "../../atoms/input/web";
import { Button, $Button } from "../../atoms/button/web";
import { Bullet, $Bullet } from "../../atoms/bullet/web";

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
    <div css={{ padding: 24 }}>
      <form onSubmit={formik.handleSubmit}>
        <div
          css={{
            height: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div css={{ marginBottom: 16 }}>
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
                  <div css={{ marginTop: 6 }}>
                    <Bullet
                      variant={$Bullet.REQUIRED}
                      message={formik.errors.email}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
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
