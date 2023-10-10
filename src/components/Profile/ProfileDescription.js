// TODO add warning component when user input more than 10mb file, and not image file.
// TODO define new function that is string replace the first myImage

import React, { useRef, useState } from "react";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import base64Converter from "../../utils/base64Converter";
import axios from "axios";
import { useToken } from "../../auth/useToken";
import { baseUrl, photoUrl } from "../../api/baseUrl";
import Loading from "../SideComponents/Loading/Loading";
import refreshPage from "../../utils/refreshPage";
import blankImage from "../../assets/img/blank_profile.png";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

// dummyData
  // const myProfile ={
  //   data : [
  //     {
  //       name: "Dummy",
  //       email: "dummy@gmail.com"
  //     }
  //   ]
  // }

const ProfileDescription = () => {
  const formRef = useRef();
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const [token] = useToken();
  const [myImage, setMyImage] = useState("");

  const handleFileUploads = async (e) => {
    const file = e.target.files[0];
    if (!file && !file.name) {
      window.alert("Please select a file");
      return false;
    }
    if (file.size > 2e6) {
      window.alert("Please upload a file smaller than 2 MB");
      formRef.current.reset();
      return false;
    }
    if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      window.alert("Your file type is not image");
      formRef.current.reset();
      return false;
    }
    const base64 = await base64Converter(file);
    // console.log(file.name);

    setMyImage(base64);
  };

  const submitHandler = async () => {
    const url = baseUrl.baseUrl + "/users/update_customer";
    const payload = {
      photo: myImage.replace(/^data:image\/[a-z]+;base64,/, ""),
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    };

    try {
      const response = await axios.put(url, payload, header);
      if (response.data.status_code === 200) {
        toast.success("Berhasil ganti photo profile");
        // refreshPage();
        // setMyImage("");
      }
    } catch (e) {
      toast.error("Gagal: " + JSON.stringify(e.response.data.description));
      // console.log(e);
    } finally {
      // setSubmitting(false);
    }
  };

  const { data: myProfile, loading: loadingMyProfile } =
    useFetchDataWithAuth("users/get_profile");
  if (loadingMyProfile) return <Loading />;
  // console.log(myProfile);

  

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
      <div className="user-profile">
        <h4 className="card-title mb-30 fw-bolder"> Ganti Foto </h4>
        <div className="user-avatar">
          <img
            className="shadow-sm img-fluid"
            style={{ objectFit: "cover" }}
            src={
              myProfile.data[0].photo
                ? myImage || photoUrl.profilePhoto + myProfile.data[0].photo
                : blankImage
            }
            alt=""
          />
        </div>
        <form onSubmit={handleSubmit(submitHandler)} ref={formRef}>
          <input
            type="file"
            className="form-control form-control-sm"
            name="myImage"
            accept=".jpeg, .png, .jpg"
            onChange={(e) => handleFileUploads(e)}
          />
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
              Ganti Foto
            </button>
          </div>
        </form>
        <h5 className="mt-20">{myProfile.data[0].name}</h5>
        <h6 className="">{myProfile.data[0].email}</h6>
      </div>
    </>
  );
};

export default ProfileDescription;
