import React, { useState } from "react";
import Router from "next/router";
import { useFormik } from "formik";

/** components */
import { Bullet } from "../../../components/atoms/bullet/bullet.component";
import { Button } from "../../../components/atoms/button/button.component";
import { Input } from "../../../components/atoms/input/input.component";

/** props */
import { ExistsTemplateProps } from "./props";

/** Helpers */
import { validateExists as validate } from "../../../helper/auth";

/** hooks */
import { useFetch } from "../../../hooks/useFetch";

/** styles **/
import space from "../../../styles/space.module.scss";
import shape from "../../../styles/shape.module.scss";
import font from "../../../styles/font.module.scss";
import layout from "../../../styles/layout.module.scss";

/** stories */
import {
  primary,
  underline,
} from "../../../components/atoms/button/button.stories";

export const ExistsTemplate: React.FC<ExistsTemplateProps> = ({
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
      const doFetch = useFetch({
        url: "/api/users/signin",
        method: "post",
        body: values,
        triggerLoading(state) {
          setLoading(state);
        },
        onSuccess() {
          Router.reload();
        },
      });
      doFetch();
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
            variant="password"
            handleChange={formik.handleChange}
            value={formik.values.password}
            errors={formik.errors.password !== undefined}
          />
        </div>
        <div className={[space["m-v--16"]].join(" ")}>
          <Button {...primary.args} loading={loading} title="Log in" />
        </div>
        <div>
          {formik.errors.password !== undefined && (
            <div className={[space["m-t--6"]].join(" ")}>
              <Bullet variant="required" message={formik.errors.password} />
            </div>
          )}
        </div>
      </form>
      <div className={[space["m-v--16"]].join(" ")}>
        <Button
          {...underline.args}
          title="Login with a different account"
          onClick={() => alert("button pressed")}
        />
      </div>
      <div className={[space["m-v--16"]].join(" ")}>
        <Button
          {...underline.args}
          title="Forgot password?"
          onClick={() => alert("button pressed")}
        />
      </div>
    </div>
  );
};
