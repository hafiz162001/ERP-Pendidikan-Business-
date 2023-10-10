import React, { useEffect } from "react";
import { photoUrl } from "../../api/baseUrl";
import Wrapper from "../../components/Layout/Wrapper";
import { Link } from "react-router-dom";
import PortofolioDetailsSidebarSlideshow from "../../components/Portofolio/PortofolioDetailsSidebarSlideshow";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import { useParams } from "react-router-dom";
import Loading from "../../components/SideComponents/Loading/Loading";

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

const MyPortofolioDetails = () => {
  const { id } = useParams("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data: dataPortofolio, loading: loadingPortofolio } =
    useFetchDataWithAuth(
      "portofolio/get_customer_portofolio?id_portofolio=" + id
    );

  if (loadingPortofolio) return <Loading />;

  const dummyData = dataPortofolio.data[0];

  return (
    <Wrapper>
      <div className="certification_details__header--background">
        <div className="container pt-100">
          <div className="row">
            <div className="col-8">
              <dispatchEvent className="g-3">
                <Link to="/myportofolio">
                  <button className="btn btn-altdanger">Kembali</button>
                </Link>
                <Link to={"/myportofolioupdate/" + dummyData.id_portofolio}>
                  <button className="btn btn-light">Edit</button>
                </Link>
              </dispatchEvent>
              <div className="mt-10 mb-10">
                <h4 className="fw-bold">{dummyData.nama_portofolio}</h4>
                {/* <h5 className="fw-bold">Summary</h5> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: dummyData.deskripsi_singkat,
                  }}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="col-6 mr-3 mb-20 ">
                <img
                  src={
                    photoUrl.thumbnailPortofolioPhoto +
                    dummyData.foto_portofolio
                  }
                  className="img-fluid img-thumbnail"
                  alt="img not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light pt-20">
        <div className="container">
          <h1>Detail Portofolio</h1>
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-3 mb-20">
                <div className="card-body ">
                  <h3 className="fw-bold">Gallery Project</h3>
                  <div className="border border-bottom"></div>
                  <PortofolioDetailsSidebarSlideshow
                    carousel1={dummyData.carousel1}
                    carousel2={dummyData.carousel2}
                    carousel3={dummyData.carousel3}
                  />
                  <h3 className="fw-bold mt-3">Description</h3>
                  <div className="border border-bottom"></div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: dummyData.deskripsi_lengkap,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MyPortofolioDetails;
