/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useFormik } from "formik";
// import { useAuthDispatch, useAuthState } from "@context/auth";
import { Input, $Input } from "@input/web";
import { Button, $Button } from "@button/web";
import { getAuthContents } from "@button/content/content.auth";

import { validateAuth as validate } from "@helper/auth";

/**
 * Renders the auth template component
 */
export const AuthPrototype: React.FC<{}> = () => {
  const auths = getAuthContents();
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();
  const methods = ["email", "facebook", "google", "apple"];

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
      return authDispatch({ type: "auth_signup" });
    }
    return authDispatch({ type: "auth_login" });
  };

  return (
    <div css={{ padding: 24 }}>
      <div css={{ width: "100%" }}>
        <form onSubmit={formik.handleSubmit}>
          <div css={{ marginBottom: 8 }}>
            <div>
              <Input
                variant={$Input.REGION}
                direction="bottom"
                handleChange={formik.handleChange}
                value={formik.values.region}
                errors={formik.errors.region}
              />
              <Input
                variant={$Input.PHONE}
                direction="top"
                handleChange={formik.handleChange}
                value={formik.values.phone}
                errors={formik.errors.phone}
              />
            </div>
          </div>
          <div>
            <p css={{ fontWeight: 100, color: "gray__0", fontSize: 12 }}>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
            </p>
          </div>
          <div css={{ marginTop: 18, marginBottom: 18 }}>
            <Button variant={$Button.PRIMARY} title="Continue" block />
          </div>
        </form>
        <div
          css={{
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            css={{
              zIndex: 3,
              position: "relative",
              padding: "0 4px",
              bg: "white",
              fontWeight: 100,
              color: "gray__0",
              fontSize: 12,
            }}
          >
            or
          </span>
        </div>
        <div>
          {methods.map((method, index) => {
            return (
              <div key={index} css={{ margin: "14px 0" }}>
                <Button
                  variant={$Button.AUTH}
                  extendsTo={{
                    border: "2px solid #b0b0b0",
                    padding: 12,
                    borderRadius: 8,
                  }}
                  auth={method}
                  onClick={auths[method].handleClick}
                  icon={auths[method].icon}
                  name={auths[method].name}
                  block
                />
              </div>
            );
          })}
        </div>
        <div css={{ marginTop: 4 }}>
          <div css={{ display: "inline-block", marginRight: 6 }}>
            <p
              css={{
                fontSize: 14,
                fontWeight: 300,
                color: "gray__1",
              }}
            >
              {authState.title === "Log in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
          </div>
          <Button
            variant={$Button.UNDERLINE}
            onClick={switchAuth}
            title={authState.title === "Log in" ? "Sign up" : "Log in"}
          />
        </div>
      </div>
    </div>
  );
};
