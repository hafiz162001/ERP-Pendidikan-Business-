// TODO need more explanation on OJT yes but it's master class ??
// TODO untuk certiifcate page buatkan khusus. soalnya mau fetch api.

import React, { useState, useEffect } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyCourseCard2 from "../../components/MyCourse/MyCourseCard2";
import { Link } from "react-router-dom";
import MyCoursePageFilter from "../../components/MyCourse/MyCoursePageFilter";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import Wrapper from "../../components/Layout/Wrapper";
import Searchbox from "../../components/Elements/Searchbox";
import MyCourseCard from "../../components/MyCourse/MyCourseCard";
import MyCourseCertificateCard from "../../components/MyCourse/MyCertificate/MyCourseCertificateCard";
import MyCourseCertificate from "../../components/MyCourse/MyCertificate/MyCourseCertificate";
import MyCoursePurchaseHistory from "../../components/MyCourse/PurchaseHistory/MyCoursePurchaseHistory";
import MyCertification from "../../components/MyCertification/MyCertification";
import MyLearningPath from "../../components/MyLearningPath/MyLearningPath";
import MyCertificationPurchaseHistory from "../../components/MyCertification/MyCertificationPurchaseHistory";
import Loading from "../../components/SideComponents/Loading/Loading";
import PurchaseHistory from "../../components/MyCourse/PurchaseHistory/PurchaseHistory";
import MyCourseAcademy from "../../components/MyCourse/MyCourseAcademy/MyCourseAcademy";
import useLocalStorageState from "../../hooks/useLocalStorageState";
import { useSessionStorage } from "react-use";

// const myCourse = {
//     data: [{
//         id_customer_course: 1,
//         id_course: 2,
//         photo_couse: null,
//         course_name: "Dr Strange 2",
//         total_syllabus: 9,
//         arranged_by: "Bakerspice Academy"
//     }, {
//         id_customer_course: 2,
//         id_course: 3,
//         photo_couse: null,
//         course_name: "Multiverse of Madness",
//         total_syllabus: 5,
//         arranged_by: "Bakerspice Academy"
//     }
// ]
// }

function MyFreeCoursePage() {
  const [statusCourse, setStatusCourse] = useState("");
  const [courseType, setCourseType] = useSessionStorage("myFCPtype", "1");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // categories
  // const [categories, setCategories] = useState("");
  // const [free, setFree] = useState(false);
  // const [master, setMaster] = useState(false);
  // const [ojt, setOJT] = useState(false);
  // const [nationalCertification, setNationalCertification] = useState(false);
  // const [internationalCertification, setInternationalCertification] =
  //   useState(false);
  // const [learningPath, setLearningPath] = useState(false);

  const statusCourseHandler = (e) => {
    setStatusCourse(e.target.value);
    // console.log(e.target.value);
  };

  const courseTypeHandler = (e) => {
    setCourseType(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <Wrapper>
      <div className="page__title-area pb-90 bg-light">
        <div
          className="heading-mycoursepage bg-cream-bb pt-120"
          style={{ zIndex: 1, position: "relative" }}
        >
          <div className="container">
            <h2 className="fw-bold">Pembelajaran Saya</h2>
            {/* <span className="d-block p-2 bg-dark text-white pt-50">Pembelajaran Saya</span> */}
          </div>
        </div>
        <div className="container">
          <div
            className="card border-0 shadow-sm rounded-3 pt-20 pl-10 pr-10 pb-10"
            style={{ position: "relative", top: "-140px", zIndex: 2 }}
          >
            <Tabs>
              <div className="course__tab-2 course__tab-3  mb-20">
                <ul className="navs nav-tabss" id="courseTab" role="tablist">
                  <TabList>
                    <Tab>
                      <button className="nav-link" type="button" role="tab">
                        <span>All Course</span>{" "}
                      </button>
                    </Tab>
                    <Tab>
                      <button className="nav-link" type="button" role="tab">
                        <span>Certificate</span>{" "}
                      </button>
                    </Tab>
                    <Tab>
                      <button className="nav-link" type="button" role="tab">
                        <span>Purchase History</span>{" "}
                      </button>
                    </Tab>
                  </TabList>
                </ul>
              </div>
              <div className="course__tab-content mb-50">
                <TabPanel>
                  <div className="row">
                    <div className="col-3">
                      <MyCoursePageFilter
                        statusCourse={statusCourse}
                        statusCourseHandler={statusCourseHandler}
                        courseType={courseType}
                        courseTypeHandler={courseTypeHandler}
                      />
                    </div>
                    <div className="col-9">
                      {courseType === "1" && (
                        <MyCourseAcademy
                          status={statusCourse}
                          isOJT={""}
                          isFree={""}
                        />
                      )}
                      {courseType === "2" && (
                        <MyCourseAcademy
                          status={statusCourse}
                          isOJT={2}
                          isFree={0}
                        />
                      )}
                      {courseType === "3" && (
                        <MyCourseAcademy
                          status={statusCourse}
                          isOJT={2}
                          isFree={1}
                        />
                      )}
                      {courseType === "4" && (
                        <MyCourseAcademy
                          status={statusCourse}
                          isOJT={1}
                          isFree={""}
                        />
                      )}

                      {courseType === "5" && <MyCertification />}
                      {courseType === "6" && (
                        <MyCertification type="International" />
                      )}
                      {courseType === "7" && (
                        <MyCertification type="National" />
                      )}

                      {courseType === "8" && <MyLearningPath />}
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <MyCourseCertificate />
                </TabPanel>
                <TabPanel>
                  <PurchaseHistory />
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MyFreeCoursePage;
