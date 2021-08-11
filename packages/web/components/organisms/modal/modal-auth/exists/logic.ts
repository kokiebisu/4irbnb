import { useFormik } from "formik";
import { useState } from "react";
import { validateExists as validate } from "@helper/auth";

export const useExistsPrototype = () => {
  const [loading, setLoading] = useState(false);

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

  return {
    handleSubmit: formik.handleSubmit,
    handlePasswordChange: formik.handleChange,
    handleLoading: (state: boolean) => setLoading(state),
    password: formik.values.password,
    passwordErrors: formik.errors.password,
    loading,
  };
};
