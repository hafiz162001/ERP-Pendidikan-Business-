import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "../Elements/TextField";
import BlankImage from "../../assets/img/blank_image.jpg";
import MyPortofolioEditorPhotoHandler from "./MyPortofolioEditorPhotoHandler";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SelectMyPortofolioCourse from "./SelectMyPortofolioCourse";
import SelectMyPortofolioCategory from "./SelectMyPortofolioCategory";
import Editor from "./QuillEditor/Editor";
import MyPortofolioEditorQuill from "./MyPortofolioEditorQuill";
import { baseUrl } from "../../api/baseUrl";
import axios from "axios";
import { useToken } from "../../auth/useToken";
import base64RemoveMime from "../../utils/base64RemoveMime";
import toast, { Toaster } from "react-hot-toast";

const MyPortofolioEditorForm = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/myportofolio";
  const [token] = useToken("");
  const navigate = useNavigate();

  const [photo1, setPhoto1] = useState(BlankImage);
  const [photo2, setPhoto2] = useState(BlankImage);
  const [photo3, setPhoto3] = useState(BlankImage);
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [course, setCourse] = useState("");
  const [thumbnail, setThumbnail] = useState(BlankImage);

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const courseHandler = (e) => {
    setCourse(e.target.value);
  };

  // const handleSummary = (event, editor) => {
  //   const data = editor.getData();
  //   setSummary(data);
  //   // console.log({ event, editor, data });
  // };

  // const handleDescription = (event, editor) => {
  //   const data = editor.getData();
  //   // console.log({ event, editor, data });
  //   setDescription(data);
  // };

  const initialValues = {
    portofolio_name: "",
    course: "Excel",
    category: "New York",
  };

  const validationSchema = Yup.object({
    portofolio_name: Yup.string()
      .max(50, "Judul tidak boleh lebih dari 50 karakter")
      .required("Tidak boleh kosong"),
  });

  const submitHandler = async (values, { setSubmitting, resetForm }) => {
    const payload = {
      id_kategori_portofolio: category,
      id_customer_course: course,
      nama_portofolio: values.portofolio_name,
      deskripsi_singkat: summary,
      deskripsi_lengkap: description,
      carousel1: base64RemoveMime(photo1),
      carousel2: base64RemoveMime(photo2),
      carousel3: base64RemoveMime(photo3),
      foto_portofolio: base64RemoveMime(thumbnail),
    };

    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
      };
      const url = baseUrl.baseUrl + "/portofolio/insert_portofolio";
      const response = await axios.post(url, payload, header);
      toast.success(JSON.stringify(response.data.description));
      if (response.data.status_code === 200) {
        setTimeout(() => {
          navigate("/myportofolio");
        }, 1000);
      }
    } catch (e) {
      toast.error(JSON.stringify(e.response.data?.description));
      // alert(JSON.stringify(e.response.data?.description));
      // console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="container pt-120">
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
        <Link to={from}>
          <button className="btn btn-altwarning mb-3"> Kembali </button>
        </Link>
        <div className="row mb-30">
          <h3 className="fw-bold">Tambah Portofolio Baru</h3>
          <div className="row g-3 mb-30">
            <div className="col-4">
              <MyPortofolioEditorPhotoHandler
                myImage={photo1}
                setMyImage={setPhoto1}
              />
            </div>
            <div className="col-4">
              <MyPortofolioEditorPhotoHandler
                myImage={photo2}
                setMyImage={setPhoto2}
              />
            </div>
            <div className="col-4">
              <MyPortofolioEditorPhotoHandler
                myImage={photo3}
                setMyImage={setPhoto3}
              />
            </div>
          </div>
          <h4 className="fw-bold">Detail Portofolio</h4>
          <div className="card-body shadow-sm rounded-3 border border-1">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={submitHandler}
            >
              {({ isSubmitting }) => (
                <Form>
                  <TextField
                    label="Nama Portofolio"
                    name="portofolio_name"
                    type="text"
                  />
                  <div className="mb-3"></div>
                  <div className="mb-3">
                    <label className="mb-2">Deskripsi Singkat</label>
                    <MyPortofolioEditorQuill
                      value={summary}
                      setValue={setSummary}
                      withPhoto={false}
                    />
                  </div>
                  <div className="mb-3">
                    <SelectMyPortofolioCourse
                      label="Course yang berhasil lulus"
                      value={course}
                      // options={dummyData.course}
                      selectHandler={courseHandler}
                    />
                  </div>
                  <div className="row text-center d-flex justify-content-center mb-3">
                    <div className="col-4">
                      <MyPortofolioEditorPhotoHandler
                        myImage={thumbnail}
                        setMyImage={setThumbnail}
                        label={"Foto Portofolio (max 2MB)"}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <SelectMyPortofolioCategory
                      label="Kategori"
                      value={category}
                      // options={kategoriPortofolio.data}
                      selectHandler={categoryHandler}
                    />
                  </div>
                  {/* <Editor value={description} setValue={setDescription} /> */}
                  <div className="mb-3">
                    <label className="mb-2">Deskripsi Lengkap</label>
                    <MyPortofolioEditorQuill
                      value={description}
                      setValue={setDescription}
                    />
                  </div>
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
                    Simpan
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPortofolioEditorForm;
