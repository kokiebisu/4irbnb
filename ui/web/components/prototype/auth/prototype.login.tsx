import { useState } from "react";
import { useFormik } from "formik";
import Router from "next/router";

import { useAuthDispatch, useAuthState } from "@context/auth";

import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import layout from "@styles/layout.module.scss";

import { Input, $Input } from "@input";
import { Button, $Button } from "@button";
import { Bullet, $Bullet } from "@bullet";
import { Card, $Card } from "@card";

import { validateLogin as validate } from "@helper/auth";

import { usePost } from "@hooks/usePost";

/**
 * Renders the login template component
 */
export const LoginTemplate: React.FC<{}> = () => {
  const authState = useAuthState();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("pending");
  const authDispatch = useAuthDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const submit = usePost({
        url: "/api/users/signin",
        body: values,
        triggerLoading(state) {
          setLoading(state);
        },
        onSuccess() {
          Router.reload();
        },
        onFail() {
          setStatus("fail");
        },
      });
      submit();
    },
  });

  const switchAuth = () => {
    if (authState.title === "Log in") {
      return authDispatch({ type: "auth_signup" });
    }
    return authDispatch({ type: "auth_login" });
  };

  const switchBack = () => {
    return authDispatch({ type: "auth_login" });
  };

  const redirectTo = () => {
    return authDispatch({ type: "forgot_password" });
  };

  return (
    <div className={[space["p--24"]].join(" ")}>
      {status === "fail" && (
        <div className={[space["m-b--16"]].join(" ")}>
          <Card variant={$Card.AGAIN} />
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <Input
              variant={$Input.EMAIL}
              direction="bottom"
              handleChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email !== undefined}
            />
            <Input
              variant={$Input.PASSWORD}
              direction="top"
              handleChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password !== undefined}
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
          <div>
            {formik.errors.password !== undefined && (
              <div className={[space["m-t--6"]].join(" ")}>
                <Bullet
                  variant={$Bullet.REQUIRED}
                  message={formik.errors.password}
                />
              </div>
            )}
          </div>
          {status === "success" && (
            <div className={[space["m-t--16"]].join(" ")}>
              <Card variant={$Card.SET} />
            </div>
          )}
        </div>
        <div className={[space["m-v--16"]].join(" ")}>
          <Button
            variant={$Button.PRIMARY}
            title="Log in"
            loading={loading}
            block
          />
        </div>
        <div className={[space["m-v--16"]].join(" ")}>
          <Button
            variant={$Button.UNDERLINE}
            title="Forgot password?"
            onClick={redirectTo}
          />
        </div>
        <div className={[space["m-v--16"]].join(" ")}>
          <Button
            variant={$Button.UNDERLINE}
            title="More login options"
            onClick={switchBack}
          />
        </div>
        <div className={[layout["flex"]].join(" ")}>
          <p className={[font["size--14"], space["m-r--8"]].join(" ")}>
            Don't have an account?
          </p>
          <Button
            variant={$Button.UNDERLINE}
            title="Sign up"
            onClick={switchAuth}
          />
        </div>
      </form>
    </div>
  );
};
