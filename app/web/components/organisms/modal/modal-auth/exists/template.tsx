import { useState } from "react";
import { useFormik } from "formik";
import { Bullet } from "@atoms";
import { Button } from "@atoms";
import { Input } from "@atoms";
import { validateExists as validate } from "@helper/auth";

export interface ExistsPrototypeTemplateProps {
  data: {
    imgUrl: string;
    firstname: string;
    email: string;
  };
}

export const ExistsPrototypeTemplate: React.FC<ExistsPrototypeTemplateProps> = ({
  data = {
    imgUrl: "https://a0.muscache.com/defaults/user_pic-225x225.png?v=3",
    firstname: "Kenichi",
    email: "a01056715@gmail.com",
  },
}) => {
  const [loading, _] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate,
    onSubmit: (_) => {
      // const submit = usePost({
      //   url: '/api/users/signin',
      //   body: values,
      //   triggerLoading(state) {
      //     setLoading(state);
      //   },
      //   onSuccess() {
      //     Router.reload();
      //   },
      // });
      // submit();
    },
  });

  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <div className="my-4">
          <p className="text-sm text-center">
            Looks like you already have an account. Please log in instead.
          </p>
        </div>
        <div className="my-4">
          <img
            style={{ width: 120 }}
            className="rounded-full"
            src={data.imgUrl}
          />
        </div>
        <div className="my-2">
          <div>
            <p className="text-sm text-center">{data.firstname}</p>
          </div>
          <div>
            <p className="text-sm text-center">{data.email}</p>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="my-4">
          <Input
            variant="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            errors={formik.errors.password !== undefined}
          />
        </div>
        <div className="my-4">
          <Button
            variant="primary"
            loading={loading}
            title="Log in"
            size="md"
            color="white"
            stretch
            fill="black"
            onClick={() => alert("clicked")}
          />
        </div>
        <div>
          {formik.errors.password !== undefined && (
            <div className="mt-2">
              <Bullet variant="required" message={formik.errors.password} />
            </div>
          )}
        </div>
      </form>
      <div className="my-4">
        <Button
          variant="underline"
          title="Login with a different account"
          onClick={() => alert("button pressed")}
          font={14}
        />
      </div>
      <div className="my-4">
        <Button
          variant="underline"
          title="Forgot password?"
          onClick={() => alert("button pressed")}
          font={14}
        />
      </div>
    </div>
  );
};
