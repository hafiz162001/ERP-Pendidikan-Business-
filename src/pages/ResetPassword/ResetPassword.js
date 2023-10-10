import React, { useEffect, useState } from "react";
import loginImg from "../../assets/img/login.png";
import resetImg from "../../assets/img/email_send.svg";
import Wrapper from "../../components/Layout/Wrapper";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "../../components/Elements/TextField";
import axios from "axios";
import { baseUrl } from "../../api/baseUrl";
import toast, { Toaster } from "react-hot-toast";
import { basePath } from "../../api/basePath";

const ResetPassword = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
  });

  const resetHandler = async (values, { setSubmitting }) => {
    // console.log(values);
    const payload = {
      email: values.email,
    };

    try {
      const response = await axios.post(
        baseUrl.baseUrl + "/users/forgotpassword",
        payload
      );
      if (response.data.status_code === 200) {
        setIsSuccess(!isSuccess);
        // toast.success("Berhasil, silahkan cek email Anda!");
      }
    } catch (e) {
      if (e.response.data.status_code === 400) {
        toast.error("Email belum terdaftar");
      }
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Wrapper>
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
      <div className="bg-light vh-100">
        <section className="signup__area po-rel-z1 pt-100 pb-145">
          <div className="container mt-3">
            {isSuccess ? (
              <div className="bg-light text-center mt-100">
                <h1 className="">Password berhasil direset</h1>
                <img
                  className="img-fluid w-25"
                  src={resetImg}
                  alt="img not found"
                ></img>
                <p className="mt-10">
                  Cek email anda untuk melihat password baru Anda.
                </p>
                <a className="fw-bold link-danger" href={basePath.login}>
                  Kembali ke halaman login
                </a>
              </div>
            ) : (
              <div className="row">
                <div className="col-md-4 mr-50">
                  <h1 className="my-4 font-weight-bold .display-4">
                    Lupa Password
                  </h1>
                  <Formik
                    initialValues={{
                      email: "",
                    }}
                    validationSchema={validate}
                    onSubmit={resetHandler}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <TextField label="Email" name="email" type="email" />
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
                          Kirim
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
                <div className="col-md-7 d-sm-none d-none d-md-block my-auto text-center">
                  <img className="img-fluid w-75" src={loginImg} alt="" />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default ResetPassword;
