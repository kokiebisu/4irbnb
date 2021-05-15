import { useFormik } from 'formik';
import { Input } from '@input';
import { Button } from '@button';
import { Bullet } from '@bullet';
import { validateForgotPassword as validate } from '@helper/auth';

export interface ForgotPasswordPrototypeTemplateProps {}

/**
 * Renders the login template component
 */
export const ForgotPasswordPrototypeTemplate: React.FC<ForgotPasswordPrototypeTemplateProps> = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div className="p-5">
      <form onSubmit={formik.handleSubmit}>
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
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  errors={formik.errors.email !== undefined}
                />
              </div>
              <div>
                {formik.errors.email !== undefined && (
                  <div className="mt-2">
                    <Bullet variant="required" message={formik.errors.email} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Button
              variant="primary"
              size="md"
              fill="black"
              title="Send reset link"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
