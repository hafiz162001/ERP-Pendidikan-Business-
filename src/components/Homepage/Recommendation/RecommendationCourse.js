import React, { useState } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CourseCard from "../../Course/CourseCard";
import useFetchData from "../../../hooks/useFetchData";
import Loading from "../../SideComponents/Loading/Loading";

function RecommendationCourse() {
  const [freeCourseRecommendation, setFreeCourseRecommendation] = useState("");

  // const {data, loading} = useFetchData('course/get_course?is_limit=3&order_by_numer_of_student=asc');
  const { data: free, loadingFree } = useFetchData(
    "course/get_course?is_free=1&is_limit=3&is_aktif=1&order_by_numer_of_student=asc"
  );
  const { data: master, loadingMaster } = useFetchData(
    "course/get_course?is_free=0&is_limit=3&is_aktif=1&order_by_numer_of_student=asc&is_ojt=2"
  );
  const { data: ojt, loadingOjt } = useFetchData(
    "course/get_course?is_free=0&is_limit=3&is_aktif=1&order_by_numer_of_student=asc&is_ojt=1"
  );
  // console.log(free.data);
  // setFreeCourseRecommendation(free.data);

  // const recommendedCourse = data.data;
  return (
    <section className="course__area pt-30 pb-20 bg-light">
      <Tabs variant="enclosed" id="react-tabs-276">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="section__title-wrapper mb-20">
                <h2 className="section__title heading">
                  Rekomendasi{" "}
                  <span className="link-warning">Course Academy</span>
                </h2>
                <p>
                  Pembelajaran Online atau Offline melalui platform BakerSpice Academy dengan Materi Pilihan, Instruktur Profesional
                  dan Learning Path Belajar yang menarik.
                </p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="course__menu d-flex justify-content-lg-end mb-60">
                <div className="masonary-menu filter-button-group">
                  <TabList>
                    <Tab>
                      <img
                        className="rec-image"
                        src="/assets/img/homepage/freecourse.png"
                      ></img>
                      <button>Free Course</button>
                    </Tab>
                    <Tab>
                      <img
                        className="rec-image"
                        src="/assets/img/homepage/masterclass.png"
                      />
                      <button>Master Class</button>
                    </Tab>
                    <Tab>
                      <img
                        className="rec-image"
                        src="/assets/img/homepage/masterclassojt.png"
                      />
                      <button>Master Class + OJT</button>
                    </Tab>
                  </TabList>
                </div>
              </div>
            </div>
          </div>
          <TabPanel>
            <div className="row">
              {free.data && !loadingFree ? (
                free.data.map((data) => {
                  const freeCourseList = {
                    key: data.id_course,
                    nama: data.name,
                    info: data.info,
                    harga: data.price,
                    rating: data.rating,
                    silabus: data.number_of_syllabus,
                    penyedia: data.client_name,
                    jml_pengguna: data.number_of_students,
                    foto: data.photo,
                  };
                  return (
                    <div
                      key={freeCourseList.key}
                      className="col-xxl-3 col-xl-4 col-lg-4 col-md-6"
                    >
                      <CourseCard freeCourseList={freeCourseList} />{" "}
                    </div>
                  );
                })
              ) : (
                <Loading />
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
              {master.data && !loadingMaster ? (
                master.data.map((data) => {
                  const freeCourseList = {
                    key: data.id_course,
                    nama: data.name,
                    info: data.info,
                    harga: data.price,
                    rating: data.rating,
                    silabus: data.number_of_syllabus,
                    penyedia: data.client_name,
                    jml_pengguna: data.number_of_students,
                    foto: data.photo,
                  };
                  return (
                    <div
                      key={freeCourseList.key}
                      className="col-xxl-3 col-xl-4 col-lg-4 col-md-6"
                    >
                      <CourseCard freeCourseList={freeCourseList} />
                    </div>
                  );
                })
              ) : (
                <Loading />
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
              {ojt.data && !loadingOjt ? (
                ojt.data.map((data) => {
                  const freeCourseList = {
                    key: data.id_course,
                    nama: data.name,
                    info: data.info,
                    harga: data.price,
                    rating: data.rating,
                    silabus: data.number_of_syllabus,
                    penyedia: data.client_name,
                    jml_pengguna: data.number_of_students,
                    foto: data.photo,
                  };
                  return (
                    <div
                      key={freeCourseList.key}
                      className="col-xxl-3 col-xl-4 col-lg-4 col-md-6"
                    >
                      <CourseCard freeCourseList={freeCourseList} />
                    </div>
                  );
                })
              ) : (
                <Loading />
              )}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </section>
  );
}

export default RecommendationCourse;
