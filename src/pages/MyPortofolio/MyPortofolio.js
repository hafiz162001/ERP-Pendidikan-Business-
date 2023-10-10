import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Elements/Pagination";
import Search from "../../components/Elements/Search";
import Select from "../../components/Elements/Select";
import Wrapper from "../../components/Layout/Wrapper";
import MyPortofolioCard from "../../components/MyPortofolio/MyPortofolioCard";
import Loading from "../../components/SideComponents/Loading/Loading";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import SelectMyPortofolioStatusAdmin from "../../components/MyPortofolio/SelectMyPortofolioStatusAdmin";
import { useSessionStorage } from "react-use";

const dummyData = {
  portofolios: [
    {
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
    },
    {
      address: "Jalan Hehe",
      carousel1: "2022-05-10_084152_85571_carousel_portofolio_1.png",
      carousel2: "2022-05-10_084152_94282_carousel_portofolio_2.png",
      carousel3: "2022-05-10_084152_71329_carousel_portofolio_3.png",
      date_of_birth: "Thu, 30 Jan 1992 00:00:00 GMT",
      deskripsi_kategori_portofolio: "Deskripsi Advance",
      deskripsi_lengkap:
        '<h2 style="margin-left:0px;">Where can I get some?</h2><p style="margin-left:0px;text-align:justify;">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><h2 style="margin-left:0px;">Where can I get some?</h2><p style="margin-left:0px;text-align:justify;">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>',
      deskripsi_singkat: "Singkat Cerita nih",
      email: "kevintesting01@gmail.com",
      foto_portofolio: "2022-05-10_084152_23923_foto_portofolio.png",
      foto_user: "2022-05-11_0141015.jpg",
      gender: 1,
      id_course: 370,
      id_customer: 3,
      id_customer_course: 3,
      id_kategori_portofolio: 2,
      id_portofolio: 1,
      is_delete: 0,
      jumlah_like: 1,
      nama_course: "Python Data Science untuk Pemula",
      nama_kategori_portofolio: "Advance",
      nama_portofolio: "UX Sample",
      nama_user: "Kevin Testing Satu",
      phone: "081234345454",
      sosmed_instagram: "https://www.instagram.com/bisa.ai/",
      sosmed_linkedin: "https://www.linkedin.com/company/bisa-ai/",
      status_portofolio: 2,
      waktu_approve: "Wed, 18 May 2022 16:10:21 GMT",
      waktu_submit: "Wed, 18 May 2022 16:06:07 GMT",
    },
  ],
  status: ["Semua Status", "Menunggu Approval", "Approved"],
  page: ["1", "2"],
};

const MyPortofolio = () => {
  const [status, setStatus] = useState("");
  const [page, setPage] = useSessionStorage("myporto", 1);
  const [search, setSearch] = useState("");

  const { data: dataPortofolio, loading: loadingPortofolio } =
    useFetchDataWithAuth(
      "portofolio/get_customer_portofolio?status_portofolio=" +
        status +
        "&search=" +
        search
    );
  if (loadingPortofolio) return <Loading />;

  const dummyData = {
    portofolios: dataPortofolio.data,
    row_count: dataPortofolio.row_count,
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const pageHandler = (e) => {
    setPage(e.target.value);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  return (
    <Wrapper>
      <div className="bg-light pt-120">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="fw-bold">Daftar Portofolio</h4>
            </div>
            <div className="col d-flex justify-content-end">
              <Link to="/myportofolio/add">
                <button className="btn btn-altdanger">Tambah Portofolio</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="row">
              <div className="col-4">
                <SelectMyPortofolioStatusAdmin
                  label="Status Portofolio"
                  value={status}
                  // options={dummyData.status}
                  selectHandler={statusHandler}
                />
              </div>
              <div className="col-4">
                <Search label="Pencarian" searchHandler={searchHandler} />
              </div>
              <div className="col-4">
                {/* <Select
                  label="Pilih Halaman"
                  value={page}
                  // options={dummyData.page}
                  selectHandler={pageHandler}
                /> */}
              </div>
            </div>
          </div>
          <div className="row">
            {dummyData.portofolios.map((portofolio) => (
              <div key={portofolio.id_portofolio} className="col-4">
                <Link to={"/myportofoliodetails/" + portofolio.id_portofolio}>
                  <MyPortofolioCard portofolio={portofolio} />
                </Link>
              </div>
            ))}
          </div>
          <div className="row mt-10">
            <div className="col-6 text-start">
              Total {dummyData.row_count} data
            </div>
            <div className="col-6 text-end">
              <Pagination
                page={page}
                setPage={setPage}
                dummyData={dummyData.portofolios}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MyPortofolio;
