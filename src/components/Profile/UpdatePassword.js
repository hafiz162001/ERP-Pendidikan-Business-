import React from "react";
import * as Yup from "yup";
import { useToken } from "../../auth/useToken";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { TextField } from "../Elements/TextField";
import { baseUrl } from "../../api/baseUrl";
import toast, { Toaster } from "react-hot-toast";

function UpdatePassword() {
  const [token] = useToken("");

  const validate = Yup.object({
    oldPassword: Yup.string()
      .min(5, "Password must be at least 5 charaters")
      .required("Password is required"),
    newPassword: Yup.string()
      .min(5, "Password must be at least 5 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string().when("newPassword", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("newPassword")],
        "Both password need to be the same"
      ),
    }),
  });

  const updateHandler = async (values, { setSubmitting, resetForm }) => {
    // console.log(values);
    const payload = {
      old_password: values.oldPassword,
      password: values.newPassword,
    };
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      };
      const response = await axios.put(
        baseUrl.baseUrl + "/users/update_customer",
        payload,
        {
          headers: headers,
        }
      );
      if (response.data.status_code === 200) {
        toast.success("Berhasil mengganti password");
        resetForm(true);
      }
    } catch (e) {
      toast.error(JSON.stringify(e.response.data.description));
      // console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
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
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={updateHandler}
      >
        {({ isSubmitting }) => (
          <Form className="row">
            <TextField
              label="Password Lama"
              name="oldPassword"
              type="password"
            />
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <TextField
                label="Password Baru"
                name="newPassword"
                type="password"
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <TextField
                label="Konfirmasi Password"
                name="confirmPassword"
                type="password"
              />
            </div>
            <div className="d-grid gap-2">
              <button
                className="btn btn-altdanger"
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
                Ganti Password
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default UpdatePassword;
