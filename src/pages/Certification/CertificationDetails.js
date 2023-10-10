import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CertificationCourseCard from "../../components/Certification/CertificationCourseCard";
import { photoUrl } from "../../api/baseUrl";
import useFetchData from "../../hooks/useFetchData";
import { Link, useParams } from "react-router-dom";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import numberWithCommas from "../../utils/numberWithCommas";
import Wrapper from "../../components/Layout/Wrapper";
import Loading from "../../components/SideComponents/Loading/Loading";
import { useUser } from "../../auth/useUser";
import { coursedetails } from "../../api/basePath";
import { base64UrlDecode } from "../../utils/base64UrlConverter";
import {
  useFetchCertification,
  useFetchCertificationReqCourse,
} from "../../api/certification";

// const dummyData = {
//   nama: "Pelatihan + Sertifikasi Internasional Internet of Things Specialist for Business Professionals Association (IOTBIZ)",
//   info_singkat:
//     "Program ini merupakan program pelatihan dan sertifikasi kompetensi tingkat internasional. Dimana anda akan mengikuti pelatihan selama 3 hari penuh secara online langsung dengan instruktur, kemudian anda akan mengikuti Ujian Try Out selama 1 hari dan Ujian International Certification Internet of Things Specialist for Business Professionals Association (IOTBIZ).",
//   deskripsi:
//     "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32",
//   harga: 20000,
//   nama_partner: "Bisa Business Academy",
// };

function CertificationDetails() {
  let { id } = useParams();

  const user = useUser("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const { data: certificationData, loading: loadingCertificationData } =
  //   useFetchData(
  //     "certification/get_certification?is_aktif=1&id_certification=" + id
  //   );

  const { isLoading: loadingCertificationData, data: certificationData } =
    useFetchCertification(id);

  // const { data: courseRequiredData, loading: loadingCourseRequiredData } =
  //   useFetchData("certification/get_cert_req_course?id_certification=" + id);

  const { isLoading: loadingCourseRequiredData, data: courseRequiredData } =
    useFetchCertificationReqCourse(id);

  const {
    data: courseRequiredCustomer,
    loading: loadingCourseRequiredCustomer,
  } = useFetchDataWithAuth(
    "certification/check_my_req_course?is_aktif=1&id_certification=" + id,
    false
  );

  const { data: certificationCustomer, loading: loadingCertificationCustomer } =
    useFetchDataWithAuth(
      "certification/get_customer_certification?id_certification=" + id,
      false
    );

  if (loadingCertificationData || loadingCourseRequiredData) return <Loading />;

  const dummyData = certificationData?.data[0];

  let eligible = 1;
  courseRequiredCustomer?.data?.map((data) => {
    if (data.status === "FAIL") {
      eligible = 0;
    }
  });

  if (courseRequiredCustomer?.row_count === 0) {
    eligible = 0;
  }

  return (
    <Wrapper>
      <div className="certification_details__header--background">
        <div className="container">
          <div className="row align-items-center pt-120 pb-10">
            <div className="col-4">
              <img
                className="img-thumbnail img-fluid"
                src={photoUrl.certificationPhoto + dummyData.foto}
                alt="img not found"
              />
            </div>
            <div className="col-8">
              <h4 className="fw-bold">{dummyData.nama}</h4>
              <span className="fst-normal">
                <div
                  dangerouslySetInnerHTML={{
                    __html: dummyData.info_singkat,
                  }}
                />
              </span>
              <div className="mt-5 row">
                <div className="row align-items-center">
                  <div className="col">
                    <span className="fw-bold">Harga</span>
                    <h4 className="fw-bold">
                      Rp. {numberWithCommas(dummyData.harga)}
                    </h4>
                  </div>
                  <div className="col">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <img
                          className="img-fluid"
                          src={
                            photoUrl.certificationPartnerPhoto +
                            dummyData.foto_partner
                          }
                          alt="img not found"
                          style={{ width: "6rem" }}
                        />
                      </div>
                      <div className="col-auto">
                        <span className="fw-bold">Offered by</span>
                        <h6 className="fw-bold">{dummyData.nama_partner}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {eligible === 0 ? (
                <h4 className="mt-10">
                  <span className="badge bg-danger">
                    Selesaikan semua course di bawah terlebih dahulu.
                  </span>
                </h4>
              ) : (
                <>
                  {certificationCustomer.row_count >= 1 ? (
                    <Link to={"/mycertificationdetails/" + id}>
                      <div className="d-grip gap-2">
                        <button className="btn btn-altdanger w-25">
                          <b>Masuk</b>
                        </button>
                      </div>
                      <small>
                        * Harga yang tertera akan ditambahkan nominal kode unik
                        saat pembayaran bila kursus berbayar.
                      </small>
                    </Link>
                  ) : (
                    <Link to={"/checkoutcertification/" + id}>
                      <div className="d-grip gap-2">
                        <button className="btn btn-altdanger w-25">
                          Daftar
                        </button>
                      </div>
                      <small>
                        * Harga yang tertera akan ditambahkan nominal kode unik
                        saat pembayaran bila kursus berbayar.
                      </small>
                    </Link>
                  )}
                </>
              )}
              <div className="mt-10">
                <small>
                  {dummyData.jumah_peserta} pengguna telah mengikuti sertifikasi
                  ini.
                </small>
              </div>
            </div>
          </div>
          <div>
            <div className="row pt-20 pb-20">
              <div className="col-4"></div>
              <div className="col-8"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <div className="container mt-3 card shadow-sm border-0 rounded-3">
          <Tabs>
            <div className="course__tab-2 course__tab-3 mb-20 mt-20">
              <ul className="navs nav-tabss" id="courseTab" role="tablist">
                <TabList>
                  <Tab>
                    <button className="nav-link" type="button">
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={["fas", "course"]} />
                      </i>{" "}
                      <span>Courses</span>{" "}
                    </button>
                  </Tab>
                  <Tab>
                    <button className="nav-link" type="button" role="tab">
                      <i>
                        <FontAwesomeIcon icon={["fas", ""]} />
                      </i>{" "}
                      <span>Deskripsi</span>{" "}
                    </button>
                  </Tab>
                  <Tab>
                    <button className="nav-link" type="button">
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={["fas", ""]} />
                      </i>{" "}
                      <span>FAQ</span>{" "}
                    </button>
                  </Tab>
                </TabList>
              </ul>
            </div>
            <div className="course__tab-content mb-10">
              <div className="tab-contents">
                <TabPanel>
                  <div className="row">
                    {/* <div className="col-12">
                      <div class="alert alert-danger" role="alert">
                        Selesaikan course di bawah terlebih dahulu!
                      </div>
                    </div> */}

                    {!user
                      ? courseRequiredData?.data?.map((course) => (
                          <div
                            className="col-6"
                            key={course.id_certification_req_course}
                          >
                            <Link to={coursedetails(course.id_course)}>
                              <CertificationCourseCard data={course} />
                            </Link>
                          </div>
                        ))
                      : courseRequiredCustomer?.data?.map((course) => (
                          <div
                            className="col-6"
                            key={course.id_certification_req_course}
                          >
                            <Link to={coursedetails(course.id_course)}>
                              <CertificationCourseCard data={course} />
                            </Link>
                          </div>
                        ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="course__description">
                    <p>
                      {
                        <div
                          dangerouslySetInnerHTML={{
                            __html: dummyData.deskripsi,
                          }}
                        />
                      }
                    </p>
                  </div>
                </TabPanel>
                <TabPanel></TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </Wrapper>
  );
}

export default CertificationDetails;
