import { useFormik } from "formik";
import { validateExists as validate } from "@helper/auth";

export const useForgotPrototype = () => {
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

  return {
    handleSubmit: formik.handleSubmit,
    handleEmailChange: formik.handleChange,
    email: formik.values.email,
    emailErrors: formik.errors.email,
  };
};
