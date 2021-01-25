import { useState } from "react";
import Router from "next/router";
import { useFormik } from "formik";

import { Bullet, $Bullet } from "@bullet";
import { Button } from "@button";
import { Input } from "@input";

import { validateExists as validate } from "@helper/auth";

import { usePost } from "@hooks/usePost";

import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";
import layout from "@styles/layout.module.scss";

import * as $button from "@button/variants";
import * as $input from "@input/variants";

export const ExistsPrototype: React.FC<{
  data?: {
    imgUrl: string;
    firstname: string;
    email: string;
  };
}> = ({
  data = {
    imgUrl: "https://a0.muscache.com/defaults/user_pic-225x225.png?v=3",
    firstname: "Kenichi",
    email: "a01056715@gmail.com",
  },
}) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
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
      });
      submit();
    },
  });

  return (
    <div className={[space["p--24"]].join(" ")}>
      <div
        className={[
          layout["flex"],
          layout["flex-col"],
          layout["items-center"],
        ].join(" ")}
      >
        <div className={[space["m-v--16"]].join(" ")}>
          <p className={[font["size--13"], font["text--center"]].join(" ")}>
            Looks like you already have an account. Please log in instead.
          </p>
        </div>
        <div className={[space["m-v--16"]].join(" ")}>
          <img
            style={{ width: 120 }}
            className={[shape["br--circle"]].join(" ")}
            src={data.imgUrl}
          />
        </div>
        <div className={[space["m-v--8"]].join(" ")}>
          <div>
            <p className={[font["size--13"], font["text--center"]].join(" ")}>
              {data.firstname}
            </p>
          </div>
          <div>
            <p className={[font["size--13"], font["text--center"]].join(" ")}>
              {data.email}
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className={[space["m-v--16"]].join(" ")}>
          <Input
            variant={$input.PASSWORD}
            handleChange={formik.handleChange}
            value={formik.values.password}
            errors={formik.errors.password !== undefined}
          />
        </div>
        <div className={[space["m-v--16"]].join(" ")}>
          <Button variant={$button.PRIMARY} loading={loading} title="Log in" />
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
      </form>
      <div className={[space["m-v--16"]].join(" ")}>
        <Button
          variant={$button.UNDERLINE}
          title="Login with a different account"
          onClick={() => alert("button pressed")}
        />
      </div>
      <div className={[space["m-v--16"]].join(" ")}>
        <Button
          variant={$button.UNDERLINE}
          title="Forgot password?"
          onClick={() => alert("button pressed")}
        />
      </div>
    </div>
  );
};
