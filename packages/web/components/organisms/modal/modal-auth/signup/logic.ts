import { useState } from "react";
import { useFormik } from "formik";
import { validateSignup as validate } from "@helper/auth";

export const useSignUpPrototype = () => {
  // const authDispatch = useAuthDispatch();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      day: "",
      month: "",
      year: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (_) => {
      // const submit = await usePost({
      //   url: '/api/users/signup',
      //   body: values,
      //   triggerLoading: (state) => {
      //     setLoading(state);
      //   },
      //   onSuccess: () => {
      //     Router.reload();
      //   },
      //   onFail: () => {
      //     authDispatch({ type: 'exists' });
      //   },
      // });
      // await submit();
    },
  });

  return {
    handleSubmit: formik.handleSubmit,
    firstName: formik.values.firstname,
    firstNameErrors: formik.errors.firstname,
    handleFirstNameChange: formik.handleChange,
    lastName: formik.values.lastname,
    lastNameErrors: formik.errors.lastname,
    handleLastNameChange: formik.handleChange,
    day: formik.values.day,
    dayErrors: formik.errors.day,
    handleDayChange: formik.handleChange,
    month: formik.values.month,
    monthErrors: formik.errors.month,
    handleMonthChange: formik.handleChange,
    year: formik.values.year,
    yearErrors: formik.errors.year,
    handleYearChange: formik.handleChange,
    email: formik.values.email,
    handleEmailChange: formik.handleChange,
    emailErrors: formik.errors.email,
    password: formik.values.password,
    handlePasswordChange: formik.handleChange,
    passwordErrors: formik.errors.password,
    loading,
    handleLoadingChange: (state: boolean) => setLoading(state),
  };
};
