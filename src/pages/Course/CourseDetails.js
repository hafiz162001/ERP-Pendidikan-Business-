import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Wrapper from "../../components/Layout/Wrapper";
import CourseDetailsSidebar from "./CourseDetailsSidebar";
import CourseSidebarDetailsSyllabus from "../../components/Course/CourseSidebarDetailsSyllabus";
import useFetchData from "../../hooks/useFetchData";
import CourseSidebarDetailsReviews from "../../components/Course/CourseSidebarReview/CourseSidebarDetailsReviews";
import { baseUrl } from "../../api/baseUrl";
import Loading from "../../components/SideComponents/Loading/Loading";
import CoursePortofolioRecommendation from "../../components/Course/CourseSidebarPortofolio/CoursePortofolioRecommendation";
import CourseSidebarDetailsRecommendation from "../../components/Course/CourseSidebarCourseRecommendation/CourseRecommendation";
import { useFetchFreeCourse, useFetchSyllabus } from "../../api/course";
import { base64UrlDecode } from "../../utils/base64UrlConverter";

function CourseDetails() {
  // const navigate = useNavigate();
  let { id } = useParams();
  id = base64UrlDecode(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    isLoading: loadingSyllabus,
    isError: isSyllabusError,
    data: dataSyllabus,
    error: syllabusError,
    refetch: syllabusRefetch,
  } = useFetchSyllabus(id);

  const {
    isLoading: loadingFreeCourse,
    isError,
    data: dataDetailsFreeCourse,
    error,
    refetch,
  } = useFetchFreeCourse(id);

  if (isError) {
    return <h1>{error}</h1>;
  }

  if (loadingFreeCourse) return <Loading />;

  const freeCourseDetails = {
    id: dataDetailsFreeCourse.data[0].id_course,
    nama: dataDetailsFreeCourse.data[0].name,
    info: dataDetailsFreeCourse.data[0].info,
    harga: dataDetailsFreeCourse.data[0].price,
    rating: dataDetailsFreeCourse.data[0].rating,
    silabus: dataDetailsFreeCourse.data[0].number_of_syllabus,
    penyedia: dataDetailsFreeCourse.data[0].client_name,
    jml_pengguna: dataDetailsFreeCourse.data[0].number_of_students,
    foto: dataDetailsFreeCourse.data[0].photo,
    deskripsi: dataDetailsFreeCourse.data[0].description,
    info: dataDetailsFreeCourse.data[0].info,
    poin: dataDetailsFreeCourse.data[0].point,
    photo_client: dataDetailsFreeCourse.data[0].photo_client,
  };

  const baseURL = baseUrl.baseUrl + "/course/get_course?id=" + id;

  return (
    <>
      <Wrapper>
        <main className="bg-light">
          {/* course tab-start */}
          <section className="page__title-area pt-120 pb-90">
            <div className="page__title-shape">
              {/* <img className="page-title-shape-5 d-none d-sm-block" src="/assets/img/page-title/page-title-shape-1.png" alt="img not found"/> */}
              {/* <img className="page-title-shape-6" src="/assets/img/page-title/page-title-shape-6.png" alt="img not found"/> */}
              {/* <img className="page-title-shape-7" src="/assets/img/page-title/page-title-shape-4.png" alt="img not found"/> */}
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="course__wrapper">
                    <div className="page__title-content mb-25">
                      <div className="page__title-breadcrumb">
                        <nav aria-label="breadcrumb">
                          {/* <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/"><a>Home</a></Link></li>
                                                <li className="breadcrumb-item"><Link to="/course-grid"><a>Courses</a></Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">The business Intelligence analyst Course 2022</li>
                                            </ol> */}
                        </nav>
                      </div>
                      {/* <span className="badge bg-red rounded-pill"><FontAwesomeIcon icon="fa-solid fa-fire" /> Hot Course</span> */}
                      <h2 className="fw-bolder">
                        {freeCourseDetails
                          ? freeCourseDetails.nama
                          : "The Complete 2022 Web Development Bootcamp"}
                      </h2>
                      <p>
                        {freeCourseDetails ? (
                          <div
                            className="course-desc"
                            dangerouslySetInnerHTML={{
                              __html: freeCourseDetails.deskripsi,
                            }}
                          ></div>
                        ) : (
                          "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum."
                        )}
                      </p>
                      <div className="row justify-content-between">
                        {/* <div className="col-auto">
                          <div className="course__rating-2 mb-30">
                            <div className="course__rating-inner d-flex">
                              <ul>
                                <li>
                                  <a href="#">
                                    {" "}
                                    <i>
                                      <FontAwesomeIcon icon={["fas", "star"]} />
                                    </i>{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    {" "}
                                    <i>
                                      <FontAwesomeIcon icon={["fas", "star"]} />
                                    </i>{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    {" "}
                                    <i>
                                      <FontAwesomeIcon icon={["fas", "star"]} />
                                    </i>{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    {" "}
                                    <i>
                                      <FontAwesomeIcon icon={["fas", "star"]} />
                                    </i>{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    {" "}
                                    <i>
                                      <FontAwesomeIcon icon={["fas", "star"]} />
                                    </i>{" "}
                                  </a>
                                </li>
                              </ul>
                              <span className="rating-sum">
                                {freeCourseDetails
                                  ? freeCourseDetails.rating
                                  : "4.5"}{" "}
                              </span>
                            </div>
                          </div>
                        </div> */}
                        {/* <div className="col-auto">
                          <p>
                            <FontAwesomeIcon icon="fa-solid fa-users" />{" "}
                            <span>
                              {freeCourseDetails
                                ? freeCourseDetails.jml_pengguna
                                : "44"}{" "}
                              peserta{" "}
                            </span>
                          </p>
                        </div> */}
                        <div className="col-auto">
                          <p>
                            {/* <img
                              className="img-fluid me-3"
                              style={{ maxWidth: "10%" }}
                              src={
                                "https://portal2.bisaai.id:8080/bisa_business_dev/client/media/" +
                                freeCourseDetails.photo_client
                              }
                            /> */}
                            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />{" "}
                            Offered by{" "}
                            <span className="link-red-bb fw-bold">
                              {" "}
                              {freeCourseDetails
                                ? freeCourseDetails.penyedia
                                : "Bakerspice"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="course__img w-img mb-30">
                                    <img src="assets/img/course/details/course-details-1.jpg" alt="img not found"/>
                                </div> */}
                    <Tabs>
                      <div className="course__tab-2 course__tab-4 mb-20">
                        <ul
                          className="navs nav-tabss"
                          id="courseTab"
                          role="tablist"
                        >
                          <TabList>
                            <Tab>
                              <button
                                className="nav-link"
                                type="button"
                                role="tab"
                              >
                                <i>
                                  <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                                </i>{" "}
                                <span>Deskripsi</span>{" "}
                              </button>
                            </Tab>
                            <Tab>
                              <button className="nav-link" type="button">
                                {" "}
                                <i>
                                  <FontAwesomeIcon icon={["fas", "book"]} />
                                </i>{" "}
                                <span>Silabus</span>{" "}
                              </button>
                            </Tab>
                            <Tab>
                              {/* <Tab className="nav-item"> */}
                              <button className="nav-link" type="button">
                                {" "}
                                <i>
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                </i>{" "}
                                <span>Review</span>{" "}
                              </button>
                            </Tab>
                            <Tab>
                              <button className="nav-link" type="button">
                                {" "}
                                <i>
                                  <FontAwesomeIcon icon="fa-solid fa-lightbulb" />
                                </i>{" "}
                                <span>Portofolio</span>{" "}
                              </button>
                            </Tab>
                          </TabList>
                        </ul>
                      </div>
                      <div className="course__tab-content mb-95">
                        <div className="tab-contents">
                          <TabPanel>
                            <div className="course__description">
                              {freeCourseDetails ? (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: freeCourseDetails.info,
                                  }}
                                />
                              ) : (
                                <>
                                  <p>Tidak ada data</p>
                                </>
                              )}
                              {/* <div className="course__tag-2 mb-35 mt-35">
                                                    <i><FontAwesomeIcon icon={['fas', 'tags']} /></i>
                                                    <Link to="/course-details"><a>Big data,</a></Link>
                                                    <Link to="/course-details"><a>Data analysis,</a></Link>
                                                    <Link to="/course-details"><a>Data modeling</a></Link>
                                                    </div> */}
                              <div className="course__description-list mb-45">
                                {/* <h4>What is the Target Audience?</h4>
                                                    <ul>
                                                        <li> <i><FontAwesomeIcon icon={['fas', 'check']} /></i> Business's managers, leaders</li>
                                                        <li> <i><FontAwesomeIcon icon={['fas', 'check']} /></i> Downloadable lectures, code and design assets for all projects</li>
                                                        <li> <i><FontAwesomeIcon icon={['fas', 'check']} /></i> Anyone who is finding a chance to get the promotion</li>
                                                    </ul> */}
                              </div>
                              <div className="course__instructor mb-45"></div>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            {loadingSyllabus ? (
                              <Loading />
                            ) : (
                              dataSyllabus.data.map((data, index) => {
                                return (
                                  <CourseSidebarDetailsSyllabus
                                    key={data.id_syllabus}
                                    syllabusName={data.name}
                                    syllabusNumber={index + 1}
                                  />
                                );
                              })
                            )}
                          </TabPanel>
                          <TabPanel>
                            <CourseSidebarDetailsReviews
                              id={freeCourseDetails.id}
                            />
                          </TabPanel>
                          <TabPanel>
                            <div className="course__related">
                              <div className="row">
                                <div className="col-xxl-12">
                                  <div className="section__title-wrapper mb-20">
                                    <h2 className="fw-bolder">
                                      Portofolio Terkait
                                    </h2>
                                    <p>
                                      Lihat portofolio yang dihasilkan setelah
                                      menyelesaikan kelas ini
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xxl-12">
                                  <CoursePortofolioRecommendation
                                    idCourse={id}
                                  />
                                </div>
                              </div>
                            </div>
                          </TabPanel>

                          {/* <div className="course__share">
                              <h3>Share :</h3>
                              <ul>
                                  <li><a href="#" className="fb"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a></li>
                                  <li><a href="#" className="tw"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a></li>
                                  <li><a href="#" className="pin"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a></li>
                              </ul>
                          </div> */}
                        </div>
                      </div>
                    </Tabs>
                    <div className="course__related">
                      <div className="row">
                        <div className="col-xxl-12">
                          <div className="section__title-wrapper mb-20">
                            <h2 className="fw-bolder">Course Terkait</h2>
                            <p> Silahkan mencoba juga course berikut ini</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xxl-12">
                          <CourseSidebarDetailsRecommendation idCourse={id} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <CourseDetailsSidebar
                    freeCourseDetails={freeCourseDetails}
                    idCourse={id}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* course tab-end */}

          {/* cta-start */}
          {/* <Cta /> */}
          {/* cta-end */}
        </main>
      </Wrapper>
    </>
  );
}

export default CourseDetails;
