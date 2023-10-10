import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "../Elements/TextField";
import BlankImage from "../../assets/img/blank_image.jpg";
import MyPortofolioEditorPhotoHandler from "./MyPortofolioEditorPhotoHandler";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import SelectMyPortofolioCourse from "./SelectMyPortofolioCourse";
import SelectMyPortofolioCategory from "./SelectMyPortofolioCategory";
import Editor from "./QuillEditor/Editor";
import MyPortofolioEditorQuill from "./MyPortofolioEditorQuill";
import { baseUrl, photoUrl } from "../../api/baseUrl";
import axios from "axios";
import { useToken } from "../../auth/useToken";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import base64RemoveMime from "../../utils/base64RemoveMime";

const dummyData = {
  address: "Jalan Hehe",
  carousel1: "2022-05-10_084152_72969_carousel_portofolio_1.png",
  carousel2: "2022-05-10_084152_39466_carousel_portofolio_2.png",
  carousel3: "2022-05-10_084152_68958_carousel_portofolio_3.png",
  date_of_birth: "Thu, 30 Jan 1992 00:00:00 GMT",
  deskripsi_kategori_portofolio: "Deskripsi Advance",
  deskripsi_lengkap:
    '<h2 style="margin-left:0px;">Where can I get some?</h2><p style="margin-left:0px;text-align:justify;">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>',
  deskripsi_singkat:
    "t is a long established fact that a reader will be distracted by the readable content of a page when",
  email: "kevintesting01@gmail.com",
  foto_portofolio: "2022-05-07_114414_83838_foto_portofolio.png",
  foto_user: "2022-05-11_0141015.jpg",
  gender: 1,
  id_course: 370,
  id_customer: 3,
  id_customer_course: 3,
  id_kategori_portofolio: 2,
  id_portofolio: 2,
  is_delete: 0,
  jumlah_like: 1,
  nama_course: "Python Data Science untuk Pemula",
  nama_kategori_portofolio: "Advance",
  nama_portofolio: "Lorem Ipsum Dolor",
  nama_user: "Kevin Testing Satu",
  phone: "081234345454",
  sosmed_instagram: "https://www.instagram.com/bisa.ai/",
  sosmed_linkedin: "https://www.linkedin.com/company/bisa-ai/",
  status_portofolio: 2,
  waktu_approve: "Wed, 18 May 2022 16:10:21 GMT",
  waktu_submit: "Wed, 18 May 2022 16:06:07 GMT",
};

const MyPortofolioEditorFormUpdate = ({ dummyData }) => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/myportofolio";
  const [token] = useToken("");
  const navigate = useNavigate();

  const [photo1, setPhoto1] = useState(
    photoUrl.carousellPortofolioPhoto + dummyData.carousel1
  );
  const [photo2, setPhoto2] = useState(
    photoUrl.carousellPortofolioPhoto + dummyData.carousel2
  );
  const [photo3, setPhoto3] = useState(
    photoUrl.carousellPortofolioPhoto + dummyData.carousel3
  );
  const [summary, setSummary] = useState(dummyData.deskripsi_singkat);
  const [description, setDescription] = useState(dummyData.deskripsi_lengkap);
  const [category, setCategory] = useState(dummyData.id_kategori_portofolio);
  const [course, setCourse] = useState(dummyData.id_customer_course);
  const [thumbnail, setThumbnail] = useState(
    photoUrl.thumbnailPortofolioPhoto + dummyData.foto_portofolio
  );

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
    portofolio_name: dummyData.nama_portofolio,
    // course: "Excel",
    // category: "New York",
  };

  const validationSchema = Yup.object({
    portofolio_name: Yup.string()
      .max(50, "Judul tidak boleh lebih dari 50 karakter")
      .required("Tidak boleh kosong"),
  });

  const submitHandler = async (values, { setSubmitting, resetForm }) => {
    // console.log("Lihat hasil value");
    const payload = {
      id_portofolio: dummyData.id_portofolio,
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

    // console.log(payload);
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      };
      const response = await axios.put(
        baseUrl.baseUrl + "/portofolio/update_portofolio",
        payload,
        {
          headers: headers,
        }
      );

      alert(JSON.stringify(response.data.description));
      if (response.data.status_code === 200) {
        navigate("/myportofolio");
      }
    } catch (e) {
      alert("Gagal memperbaharui data");
      // console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="container pt-120">
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
              {(formik) => (
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
                  <button className="btn btn-altdanger" type="submit">
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

export default MyPortofolioEditorFormUpdate;
