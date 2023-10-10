import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "../Elements/TextField";
import axios from "axios";
import { useToken } from "../../auth/useToken";
import { useNavigate, useLocation } from "react-router-dom";
import { baseUrl } from "../../api/baseUrl";

import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [token, setToken] = useToken();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 charaters")
      .required("Password is required"),
  });

  const loginHandler = async (values, { setSubmitting }) => {
    // console.log(values);
    const payload = {
      username: values.email,
      password: values.password,
    };

    try {
      const response = await axios.post(baseUrl.baseUrl + "/auth", payload);
      setToken(response.data.access_token);
      navigate(from);
    } catch (e) {
      if (e.response.data.status_code === 401) {
        toast.error("Email/password salah");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={loginHandler}
    >
      {({ isSubmitting }) => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Login</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <div>
              <small>
                Anda belum punya akun?{" "}
                <a className="link-altdanger" href="/signup">
                  {" "}
                  Daftar Sekarang
                </a>{" "}
                atau
                <a className="link-altdanger" href="/lupa_password">
                  {" "}
                  lupa password
                </a>{" "}
                ?
              </small>
            </div>
            <button
              disabled={isSubmitting}
              className="btn btn-altdanger mt-3"
              type="submit"
            >
              {isSubmitting && (
                <span
                  className="spinner-border spinner-border-sm me-1"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              Login
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
}

export default Login;
