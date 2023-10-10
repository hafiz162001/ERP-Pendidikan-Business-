import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useToken } from "../../auth/useToken";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import { TextField } from "../Elements/TextField";
import axios from "axios";
import DatePicker from "../Elements/DatePicker";
import { baseUrl } from "../../api/baseUrl";
import Loading from "../SideComponents/Loading/Loading";
import toast, { Toaster } from "react-hot-toast";

//   dummyData
// const myProfile = {
//     data: [{
//         name: "dummyData",
//         date_of_birth: "2020-03-21",
//         phone: "09328948374",
//         address: "Jl Dummy ",
//         gender: 1
//     }]
// }

function EditProfile() {
  const convertDate = (dateValue) => {
    var date = new Date(dateValue),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  const [token] = useToken("");
  const { data: myProfile, loading: loadingMyProfile } =
    useFetchDataWithAuth("cek_credential");
  if (loadingMyProfile) return <Loading />;
  // console.log(myProfile);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(phoneRegExp, "Phone number is invalid")
      .nullable(),
    birthDate: Yup.date().required("Required").nullable(),
  });

  const updateHandler = async (values, { setSubmitting }) => {
    // console.log(values);
    const payload = {
      name: values.name,
      address: values.address,
      phone: values.phoneNumber,
      // dateofbirth: JSON.parse(JSON.stringify(values.birthDate)),
      dateofbirth: convertDate(values.birthDate),
      gender: "" + values.gender,
      sosmed_linkedin: values.sosmed_linkedin,
      sosmed_instagram: values.sosmed_instagram,
      educational_background: values.educational_background,
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
      toast.success(JSON.stringify(response.data.description));
    } catch (e) {
      toast.error("Gagal memperbaharui data");
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
          name: myProfile.data[0].name,
          birthDate: new Date(convertDate(myProfile.data[0].date_of_birth)),
          phoneNumber: myProfile.data[0].phone || "",
          address: myProfile.data[0].address || "",
          gender: "" + myProfile.data[0].gender,
          sosmed_linkedin: myProfile.data[0].sosmed_linkedin,
          sosmed_instagram: myProfile.data[0].sosmed_instagram,
          educational_background: myProfile.data[0].educational_background,
        }}
        validationSchema={validate}
        onSubmit={updateHandler}
      >
        {({ isSubmitting }) => (
          <Form className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <TextField label="Nama" name="name" type="text" />
              <TextField
                label="Linked In"
                name="sosmed_linkedin"
                placeholder="https://linkedin.com/bisaai"
                type="text"
              />
              <TextField
                label="Nomor Handphone"
                name="phoneNumber"
                type="text"
              />
              <DatePicker
                control="date"
                label="Tanggal Lahir"
                name="birthDate"
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <TextField label="Alamat" name="address" type="text" />
              <TextField
                label="Instagram"
                name="sosmed_instagram"
                type="text"
                placeholder="https://instagram.com/bisaai"
              />
              <TextField
                label="Riwayat Kerja"
                name="educational_background"
                type="text"
              />
              <div id="my-radio-group"> Jenis Kelamin </div>
              <div
                className="mt-10"
                role="group"
                aria-labelledby="my-radio-group"
              >
                <span className="mr-20">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="1"
                    id="gender1"
                  />
                  <label className="form-check-label" htmlFor="gender1">
                    Laki-laki
                  </label>
                </span>
                <span>
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="2"
                    id="gender2"
                  />
                  <label className="form-check-label" htmlFor="gender2">
                    Perempuan
                  </label>
                </span>
              </div>
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
                Perbaharui
              </button>
              {/* <button className="btn btn-danger mt-3 ml-3" type="reset">Get My Data</button> */}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default EditProfile;
