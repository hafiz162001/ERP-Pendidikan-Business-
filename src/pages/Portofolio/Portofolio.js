import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Layout/Wrapper";
import PortofolioCard from "../../components/Portofolio/PortofolioCard";
import Breadcrumb3 from "../../components/Breadcrumb/Breadcrumb3";
import { Link } from "react-router-dom";
import Select from "../../components/Elements/Select";
import Search from "../../components/Elements/Search";
import useFetchData from "../../hooks/useFetchData";
import SelectPortofolioCategory from "../../components/Portofolio/SelectPortofolioCategory";
import SelectPortofolioCourse from "../../components/Portofolio/SelectPortofolioCourse";
import SelectPortofolioStatus from "../../components/Portofolio/SelectPortofolioStatus";
import Loading from "../../components/SideComponents/Loading/Loading";
import { baseUrl } from "../../api/baseUrl";
import axios from "axios";
import { useQuery } from "react-query";
import { useSessionStorage } from "react-use";
import Pagination from "../../components/Elements/Pagination";
import { useFetchPortofolios } from "../../api/portofolio";
import useWindowScrollPosition from "../../hooks/useWindowScrollPosition";
import { portofoliodetails } from "../../api/basePath";

const dummyData = {
  status: ["Terbaru", "Terpopuler"],
  category: ["Artificial Intellegencial", "Blockchain"],
  course: ["Master Class Cyber Security", "Master Class Fullstack"],
  portofolios: [
    {
      carousel1: "2022-05-10_084152_72969_carousel_portofolio_1.png",
      carousel2: "2022-05-10_084152_39466_carousel_portofolio_2.png",
      carousel3: "2022-05-10_084152_68958_carousel_portofolio_3.png",
      deskripsi_kategori_portofolio: "Deskripsi Advance",
      deskripsi_lengkap:
        '<h2 style="margin-left:0px;">Where can I get some?</h2><p style="margin-left:0px;text-align:justify;">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>',
      deskripsi_singkat:
        "t is a long established fact that a reader will be distracted by the readable content of a page when",
      email: "kevintesting01@gmail.com",
      foto_portofolio: "2022-05-07_114414_83838_foto_portofolio.png",
      foto_user: "2022-05-11_0141015.jpg",
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
      sosmed_instagram: "https://www.instagram.com/bisa.ai/",
      sosmed_linkedin: "https://www.linkedin.com/company/bisa-ai/",
      status_portofolio: 2,
      waktu_approve: "Wed, 18 May 2022 16:10:21 GMT",
      waktu_submit: "Wed, 18 May 2022 16:06:07 GMT",
    },
    {
      carousel1: "2022-05-10_084152_85571_carousel_portofolio_1.png",
      carousel2: "2022-05-10_084152_94282_carousel_portofolio_2.png",
      carousel3: "2022-05-10_084152_71329_carousel_portofolio_3.png",
      deskripsi_kategori_portofolio: "Deskripsi Advance",
      deskripsi_lengkap:
        '<h2 style="margin-left:0px;">Where can I get some?</h2><p style="margin-left:0px;text-align:justify;">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><h2 style="margin-left:0px;">Where can I get some?</h2><p style="margin-left:0px;text-align:justify;">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>',
      deskripsi_singkat: "Singkat Cerita nih",
      email: "kevintesting01@gmail.com",
      foto_portofolio: "2022-05-10_084152_23923_foto_portofolio.png",
      foto_user: "2022-05-11_0141015.jpg",
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
      sosmed_instagram: "https://www.instagram.com/bisa.ai/",
      sosmed_linkedin: "https://www.linkedin.com/company/bisa-ai/",
      status_portofolio: 2,
      waktu_approve: "Wed, 18 May 2022 16:10:21 GMT",
      waktu_submit: "Wed, 18 May 2022 16:06:07 GMT",
    },
  ],
};

const Portofolio = () => {
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [course, setCourse] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useSessionStorage("portofoliopage", 1);

  // const getData = async () => {
  //   const header = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const { data } = await axios.get(
  //     baseUrl.baseUrl +
  //       "/portofolio/get_portofolio_landing?mode=2&order_by=" +
  //       status +
  //       "&page=" +
  //       page +
  //       "&id_kategori_portofolio=" +
  //       category +
  //       "&id_course=" +
  //       course +
  //       "&search=" +
  //       search,
  //     header
  //   );
  //   return data;
  // };

  const {
    isLoading: loadingPortofolio,
    isError,
    data: dataPortofolio,
    error,
    refetch,
  } = useFetchPortofolios({ search, category, course, status, page });

  useWindowScrollPosition("Portofolio_ScrollY", !loadingPortofolio);
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const dummyData = {
    portofolios: dataPortofolio?.data,
    row_count: dataPortofolio?.row_count,
  };

  const persistScrollPosition = (id) => {
    sessionStorage.setItem("scroll-position-product-id-marker", id);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
    setPage(1);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };
  const courseHandler = (e) => {
    setCourse(e.target.value);
    setPage(1);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const breadcrumbContent = {
    title: "Portofolio",
  };
  return (
    <Wrapper>
      <Breadcrumb3 content={breadcrumbContent} />
      <div className="bg-light">
        <div className="container pt-30 pb-30">
          <div className="row mb-3">
            <div className="col-3">
              <SelectPortofolioStatus
                value={status}
                // options={dummyData.status}
                selectHandler={statusHandler}
              />
            </div>
            <div className="col-3">
              <SelectPortofolioCategory
                value={category}
                // options={kategoriPortofolio.data}
                selectHandler={categoryHandler}
              />
            </div>
            <div className="col-3">
              <SelectPortofolioCourse
                value={course}
                // options={dummyData.course}
                selectHandler={courseHandler}
              />
            </div>
            <div className="col-3">
              <Search placeholder="Pencarian" searchHandler={searchHandler} />
            </div>
          </div>

          {loadingPortofolio ? (
            <Loading />
          ) : (
            <>
              <div className="row">
                {dummyData.portofolios.map((portofolio) => (
                  <div key={portofolio.id_portofolio} className="col-4">
                    <Link to={portofoliodetails(portofolio.id_portofolio)}>
                      <PortofolioCard portofolio={portofolio} />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="row">
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
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Portofolio;
