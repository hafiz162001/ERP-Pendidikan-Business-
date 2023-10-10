import React, { useEffect } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import Wrapper from "../../components/Layout/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyFreeCourseDetailsSyllabusCard from "../../components/MyCourse/MyFreeCourseDetailsSyllabusCard";
import { Link, useLocation, useParams } from "react-router-dom";
import MyFreeCourseDetailsTask from "../../components/MyCourse/MyCourseTask/MyFreeCourseDetailsTask";
import MyFreeCourseDetailsInfo from "../../components/MyCourse/MyCourseInfo/MyFreeCourseDetailsInfo";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import MyFreeCourseDetailsSyllabus from "./MyFreeCourseDetailsSyllabus";
import { photoUrl } from "../../api/baseUrl";
import ReviewCourse from "../../components/MyCourse/AddReview/ReviewCourse";
import Loading from "../../components/SideComponents/Loading/Loading";
import TestimonialCourseDetails from "../../components/MyCourse/MyCourseInfo/TestimonialCourseDetails";
import MyCourseDiscussion from "../../components/MyCourse/MyCourseDiscussion/MyCourseDiscussion";

function MyFreeCourseDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: myCourse, loading: loadingMyCourse } = useFetchDataWithAuth(
    "academy/get_customer_course?id_customer_course=" + id
  );
  if (loadingMyCourse) return <Loading />;
  const progress =
    (myCourse.data[0].total_finished_syllabus /
      myCourse.data[0].total_syllabus) *
      100 +
    "%";
  return (
    <Wrapper>
      <div className="bg-light">
        <div
          className="heading-mycoursepage bg-cream-bb pt-120"
          style={{ zIndex: 1, position: "relative" }}
        >
          <div className="container">
            <h3 className="fw-bold">
              {myCourse.data[0]?.course_name
                ? myCourse.data[0].course_name
                : ""}
            </h3>
            {/* <h2 className='fw-bold'>Disini gambarnya ya nanti wkwk</h2> */}
            {/* <span className="d-block p-2 bg-dark text-white pt-50">Pembelajaran Saya</span> */}
          </div>
        </div>
        <div className="container">
          <div
            className="card border-0 shadow-sm rounded-3 pt-20 pl-20 pr-20 pb-10"
            style={{ position: "relative", top: "-140px", zIndex: 2 }}
          >
            <div className="row mb-10">
              {/*  */}
              <div className="row mb-20 align-items-center">
                <div className="col-2">
                  <div className="card border-1">
                    <img
                      className="img-fluid rounded float-start"
                      src={photoUrl.coursePhoto + myCourse.data[0].photo_course}
                      alt="img not found"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mt-10">
                    <div>
                      <FontAwesomeIcon icon="fa-solid fa-window-restore" />{" "}
                      Offered by <b>{myCourse.data[0].arranged_by}</b>{" "}
                    </div>
                    <div>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" />{" "}
                      {myCourse.data[0].class === 3 && "Sulit"}{" "}
                      {myCourse.data[0].class === 1 && "Mudah"}{" "}
                      {myCourse.data[0].class === 2 && "Sedang"}{" "}
                    </div>
                    {/* <ul>
                      <FontAwesomeIcon icon="fa-solid fa-list-check" /> Progress{" "}
                    </ul> */}
                    <div>
                      {/* <div className='row'>
                    <div className='col-10'>
                      <div className="progress mt-10 mb-10">                      
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{"width": "50%", "ariaValuenow":"50", "ariaValuemin":"0", "ariaValuemax":"100"}}></div>
                      </div>
                    </div>
                    <div className='col-2 mt-2'>
                      90%
                    </div>
                  </div> */}
                      <FontAwesomeIcon icon={["fas", "book"]} />{" "}
                      {myCourse.data[0].total_finished_syllabus} dari{" "}
                      {myCourse.data[0].total_syllabus} modul telah selesai
                      <div className="progress" style={{ height: "3px" }}>
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{
                            width: progress,
                            ariaValuenow: "50",
                            ariaValuemin: "0",
                            ariaValuemax: "100",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <ReviewCourse id={myCourse.data[0].id_customer_course} />
                </div>
              </div>
            </div>
            {/* sillabus part */}
            <div className="mb-20">
              <Tabs>
                <div className="course__tab-2 course__tab-4 mb-20">
                  <ul className="navs nav-tabss" id="courseTab" role="tablist">
                    <TabList>
                      <Tab>
                        <button className="nav-link" type="button" role="tab">
                          <span>Silabus</span>{" "}
                        </button>
                      </Tab>
                      <Tab>
                        <button className="nav-link" type="button" role="tab">
                          <span>Tugas</span>{" "}
                        </button>
                      </Tab>
                      <Tab>
                        <button className="nav-link" type="button" role="tab">
                          <span>Diskusi</span>{" "}
                        </button>
                      </Tab>
                      <Tab>
                        <button className="nav-link" type="button" role="tab">
                          <span>Info</span>{" "}
                        </button>
                      </Tab>
                    </TabList>
                  </ul>
                </div>
                <div className="course__tab-content mb-50 ">
                  <TabPanel>
                    {myCourse.data[0].is_ojt === 1 ? (
                      <MyFreeCourseDetailsSyllabus
                        id={myCourse.data[0].id_customer_course}
                        isOJT={1}
                      />
                    ) : (
                      <MyFreeCourseDetailsSyllabus
                        id={myCourse.data[0].id_customer_course}
                        isOJT={0}
                      />
                    )}
                  </TabPanel>
                  <TabPanel>
                    <MyFreeCourseDetailsTask
                      id={myCourse.data[0].id_customer_course}
                      status={
                        myCourse.data[0].total_finished_syllabus ===
                        myCourse.data[0].total_syllabus
                      }
                    />
                  </TabPanel>
                  <TabPanel>
                    <MyCourseDiscussion id={id} />
                  </TabPanel>
                  <TabPanel>
                    <MyFreeCourseDetailsInfo
                      idCustomerCourse={myCourse.data[0].id_customer_course}
                    />
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='container page__title-area pt-100 pb-10 mb-100' style={{"backgroundImage": "https://gate.bisaai.id/bisa_business_prod/course/media/2022-02-21_110812_course.png", "height": "100vh"}}>
  
      <div className="card mb-50">
        <div className="card-body d-flex align-item-center">
          <h3>{courseSyllabus.data[0].name}</h3>
          <input className="btn btn-warning position-absolute top-50 end-0 translate-middle-y mr-20" type="submit" value="Beri Ulasan"></input>
        </div>
      </div>

      <div className="row mb-50">
        <div className='col-2 ml-20 mycourse__image'>
          <img className='img-fluid rounded float-start' src="https://gate.bisaai.id/bisa_business_prod/course/media/2022-02-21_110812_course.png"/>
        </div>
        <div className='col mycourse__details ml-40'>
          <li>
            <ul><FontAwesomeIcon icon="fa-solid fa-window-restore" /> Offered by <b>Bakerspice</b> </ul>
            <ul><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" /> Semua tingkat </ul>
            <ul><FontAwesomeIcon icon="fa-solid fa-list-check" /> Progress </ul>
            <ul>
              <div className='row'>
                <div className='col-10'>
                  <div className="progress mt-10 mb-10">                      
                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{"width": "50%", "ariaValuenow":"50", "ariaValuemin":"0", "ariaValuemax":"100"}}></div>
                  </div>
                </div>
                <div className='col-2 mt-2'>
                  90%
                </div>
              </div>
            </ul>
          </li>
        </div>
      </div>

    
      <Tabs>
        <div className="course__tab-2 mb-20">
          <ul className="navs nav-tabss" id="courseTab" role="tablist">
          <TabList>
            <Tab>
              <button className="nav-link" type="button" role="tab"><span>Silabus</span> </button>
            </Tab>
            <Tab>
              <button className="nav-link" type="button" role="tab"><span>Tugas</span> </button>
            </Tab>
            <Tab>
              <button className="nav-link" type="button" role="tab"><span>Diskusi</span> </button>
            </Tab>
            <Tab>
              <button className="nav-link" type="button" role="tab"><span>Info</span> </button>
            </Tab>        
          </TabList>
          </ul>
        </div>
        <div className="course__tab-content mb-50 mr-20 ml-20 ">
          <TabPanel>
            <ul className="list-group ml-10 mr-10">
            { loadingCourseSyllabus ?  <Loading /> : 
              courseSyllabus.data.map((data)=> {
                  return  <Link to={"/myfreecoursesyllabus/" + data.id_syllabus} key={data.id_syllabus} ><MyFreeCourseDetailsSyllabusCard key={data.id_syllabus} myCourseSyllabus={data}/> </Link>})}
            </ul>
          </TabPanel>
          <TabPanel>
            <MyFreeCourseDetailsTask id={id}/>
          </TabPanel>
          <TabPanel>
            <div>Diskusi</div>
          </TabPanel>
          <TabPanel>
            <MyFreeCourseDetailsInfo id={id}/>
          </TabPanel>
        </div>
      </Tabs> 
    </div> */}
    </Wrapper>
  );
}

export default MyFreeCourseDetails;
