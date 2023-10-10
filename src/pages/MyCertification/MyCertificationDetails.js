import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { photoUrl } from "../../api/baseUrl";
import Wrapper from "../../components/Layout/Wrapper";
import Loading from "../../components/SideComponents/Loading/Loading";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";

const dummyData = {
  code_unic: 781,
  created_at: "Tue, 14 Jun 2022 01:35:52 GMT",
  customer_account: null,
  expired_at: "Tue, 14 Jun 2022 04:35:52 GMT",
  foto_partner: "2021-12-01_121230_foto_partner_sertifikasi.png",
  foto_sertifikasi: "2022-01-16_223624_foto_partner_sertifikasi.png",
  foto_sertifikat: null,
  id_certification: 6,
  id_certification_coupon: null,
  id_certification_partner: 1,
  id_certification_transaction: 2,
  id_customer: 113,
  id_customer_certification: 2,
  id_user: 114,
  invoice_number: "69962096350219",
  nama_partner: "Bakerspice",
  nama_sertifikasi:
    "Pelatihan + International Certification Autodesk Certified User AutoCAD (ACU AutoCAD)",
  photo: null,
  redirect_data: null,
  redirect_url:
    "https://m.dana.id/m/portal/cashier/checkout?bizNo=20220614111212800110166231864342543&amp;timestamp=1655145352922&amp;originSourcePlatform=IPG&amp;mid=216620000172352581012&amp;sign=wWrXMTenPFACPN%2Bykzfsy3bxtB5DXc3WBBNMe6vzKJ536YqBn%2FrCiu5YZW03l7jOR2JHzxXRIVJIYNUiQjndBFaT0ibiTw9TFSpycLJNgoYQEcHhc88VFQP5px9JwZwCGSV%2B0zBadH2yduHOXv3PnUK6XaTlDo1zccR6kG5M1RjSlwvHAQ1TlcxAY7x9toHDhsscsNNp295khv2ChB0lLvT8dbNMCkiUQIO%2BMVAT4xwzNz1eIf6vnwa167TR3%2FbZykowNLYOMi%2BKJxTkezRQ9CPreAIXdQaUD3oCikCVkbATxlI7flGtIxuJRXKBDfIkOnCpMnVPQiRxf6KmOuRSCw%3D%3D&ott=",
  service_code: "1084",
  status: 1,
  status_certification: 1,
  tipe_sertifikasi: 1,
  total_price: 2500781,
  user_email: "almanurh26@gmail.com",
  user_name: "Alma Nur Habibah",
  user_phone: "085159660260",
  waktu_melakukan_pembayaran: null,

  nama: "Ujian {{sekarang}} Sertifikasi Samsung",
  info_singkat: "Ini Sertifikasi academy {{sekarang}}",
  passing_grade: "92",
  durasi_ujian: 120,
  deskripsi: "Ini Ujian {{sekarang}} Sertifikasi Samsung",
  urutan: 2,
  quizzes: [
    {
      id: 1,
      name: "Pretest",
      number_of_question: 20,
      status: 2,
      score: 100,
    },
    { id: 2, name: "Test", number_of_question: 50, status: 1, score: null },
    {
      id: 3,
      name: "Posttest",
      number_of_question: 20,
      status: 1,
      score: null,
    },
  ],
};

const MyCertificationDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data: myCertification, loading: loadingMyCertification } =
    useFetchDataWithAuth(
      "certification/get_certification_transaction?id_certification=" + id
    );
  if (loadingMyCertification) return <Loading />;

  const dummyData = myCertification?.data[0];

  return (
    <Wrapper>
      <div className="bg-light">
        <div className="certification_details__header--background">
          <div className="container">
            <div className="row align-items-center pt-120 pb-10">
              <div className="col-3">
                <img
                  className="img-thumbnail img-fluid"
                  src={photoUrl.certificationPhoto + dummyData.foto_sertifikasi}
                  alt="img not found"
                />
              </div>
              <div className="col-8">
                <h4 className="fw-bold">{dummyData.nama_sertifikasi}</h4>
                <span className="fst-normal">{dummyData.info_singkat}</span>
                <div className="mt-5 row">
                  <div className="row">
                    {/* <div className="col">
                      <span className="fw-bold">Harga</span>
                      <h4 className="fw-bold">20000</h4>
                    </div> */}
                    <div className="col">
                      <span className="fw-bold">
                        Tanggal Daftar : {dummyData.created_at}{" "}
                      </span>
                      {/* <h4 className="fw-bold">Bakerspice Academy</h4> */}
                    </div>
                  </div>
                  {/* <div className="d-grip gap-2">
                    <button className="btn btn-altdanger w-25">Daftar</button>
                  </div> */}
                </div>
                {/* <small>
                  * Harga yang tertera akan ditambahkan nominal kode unik saat
                  pembayaran bila kursus berbayar.
                </small> */}
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
        <div className="container">
          <div className="row pt-30">
            <Tabs>
              <div className="course__tab-2 course__tab-4 mb-20">
                <ul className="navs nav-tabss" id="courseTab" role="tablist">
                  <TabList>
                    <Tab>
                      <button className="nav-link" type="button" role="tab">
                        <span>Info</span>
                      </button>
                    </Tab>
                    {/* <Tab>
                      <button className="nav-link" type="button">
                        <span>Sertifikasi</span>
                      </button>
                    </Tab> */}
                  </TabList>
                </ul>
              </div>
              <div className="course__tab-content mb-95">
                <div className="tab-contents">
                  <TabPanel>
                    <h3>Pelaksanaan Sertifikasi</h3>
                    <p>
                      Sertifikasi akan dilaksanakan melalui web penyedia
                      penyelenggara. Kamu akan segara dihubungi oleh{" "}
                      <b>Admin</b> melalui email dan Whatsapp.
                    </p>
                    {/* <p>
                      Sertifikasi akan dilaksanakan melalui web ini.
                      <b>Silahkan klik pada bagian sertifikasi.</b>
                    </p> */}
                    {dummyData.deskripsi}
                    {/* Passing grade : {dummyData.passing_grade} */}
                  </TabPanel>
                  {/* <TabPanel>
                    {dummyData.quizzes.map((quizz, index) => (
                      <div
                        className={`container card mb-2 shadow-sm border-0 ${
                          quizz.status === 2 ? "bg-primary text-white" : ""
                        }`}
                      >
                        <Link to={"/mycertificationquiz/" + quizz.id}>
                          <div className="d-flex justify-content-between pt-3 pb-2">
                            <div className="">
                              <h6 className="fw-bold">
                                {" "}
                                {index + 1}. {quizz.name}{" "}
                              </h6>
                              <span className="container">
                                {" "}
                                Score : {quizz.score}
                              </span>
                            </div>
                            {quizz.status === 2 ? (
                              <div className="">
                                <small>
                                  Lulus
                                  <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                                </small>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </TabPanel> */}
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MyCertificationDetails;
