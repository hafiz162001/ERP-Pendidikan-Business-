import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "../Elements/TextField";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../api/baseUrl";
import toast, { Toaster } from "react-hot-toast";
import { basePath } from "../../api/basePath";

export const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || basePath.login;

  const handleRegister = async (values, { setSubmitting, resetForm }) => {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
      agree: 1,
    };
    try {
      const response = await axios.post(
        baseUrl.baseUrl + "/users/register",
        payload
      );
      if (response.data.status_code === 200) {
        toast.success("Pendaftaran Berhasil. Redirecting...");
      }
      setTimeout(() => {
        navigate(from);
      }, 1000);
    } catch (e) {
      toast.error("Gagal: " + JSON.stringify(e.response.data.description));
    } finally {
      setSubmitting(false);
    }
  };
  const validate = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={handleRegister}
    >
      {({ isSubmitting }) => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Registrasi Akun</h1>
          <Form>
            <TextField label="Nama" name="name" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Konfirmasi Password"
              name="confirmPassword"
              type="password"
            />
            <button
              className="btn btn-altdanger mt-3"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <span
                  className="spinner-border spinner-border-sm me-1"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              Register
            </button>
          </Form>
          <Toaster
            containerStyle={{
              top: 80,
              left: 20,
              bottom: 20,
              right: 20,
            }}
            position="top-center"
            reverseOrder={false}
          />
        </div>
      )}
    </Formik>
  );
};
