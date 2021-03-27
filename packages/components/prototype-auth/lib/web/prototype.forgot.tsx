/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useFormik } from 'formik'
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm'
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm'
import { Bullet, $BULLET } from '@nextbnb/atoms-bullet/dist/bundle.esm'
import { validateForgotPassword as validate } from '@nextbnb/helper/dist/bundle.esm'

/**
 * Renders the login template component
 */
const ForgotPasswordPrototype: React.FC<{}> = () => {
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      formik.resetForm()
    }
  })

  return (
    <div css={{ padding: 24 }}>
      <form onSubmit={formik.handleSubmit}>
        <div
          css={{
            height: 300,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
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
                  variant={$INPUT.email}
                  handleChange={formik.handleChange}
                  value={formik.values.email}
                  errors={formik.errors.email !== undefined}
                />
              </div>
              <div>
                {formik.errors.email !== undefined && (
                  <div css={{ marginTop: 6 }}>
                    <Bullet
                      variant={$BULLET.required}
                      message={formik.errors.email}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Button
              variant={$BUTTON.primary}
              size="md"
              fill="black"
              title="Send reset link"
              block
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export const forgotpassword = (props) => {
  return {
    forgotpassword: {
      component: <ForgotPasswordPrototype {...props} />,
      css: {}
    }
  }
}
