import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CourseCard from "../Course/CourseCard";
import CourseSidebarCard2 from "../Course/CourseSidebarCard2";

function CoursePrakerja({ dummyData }) {
  return (
    <>
      <Tabs>
        <div className="course__tab-inner bg-pale-black mb-20">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="course__tab-wrapper d-flex align-items-center">
                <div className="course__tab-btn">
                  <TabList>
                    <Tab>
                      <button
                        className="nav-link active"
                        id="grid-tab"
                        type="button"
                      >
                        <svg className="grid" viewBox="0 0 24 24">
                          <rect
                            x="3"
                            y="3"
                            className="st0"
                            width="7"
                            height="7"
                          />
                          <rect
                            x="14"
                            y="3"
                            className="st0"
                            width="7"
                            height="7"
                          />
                          <rect
                            x="14"
                            y="14"
                            className="st0"
                            width="7"
                            height="7"
                          />
                          <rect
                            x="3"
                            y="14"
                            className="st0"
                            width="7"
                            height="7"
                          />
                        </svg>
                      </button>
                    </Tab>
                    <Tab>
                      {/* <button
                      className="nav-link list"
                      id="list-tab"
                      type="button"
                    >
                      <svg className="list" viewBox="0 0 512 512">
                        <g id="Layer_2_1_">
                          <path
                            className="st0"
                            d="M448,69H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,69,448,69z"
                          />
                          <circle className="st0" cx="64" cy="100" r="31" />
                          <path
                            className="st0"
                            d="M448,225H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,225,448,225z"
                          />
                          <circle className="st0" cx="64" cy="256" r="31" />
                          <path
                            className="st0"
                            d="M448,381H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,381,448,381z"
                          />
                          <circle className="st0" cx="64" cy="412" r="31" />
                        </g>
                      </svg>
                    </button> */}
                    </Tab>
                  </TabList>
                </div>
                <div className="course__view">
                  <h4> {dummyData.length} Course</h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="course__sort d-flex justify-content-sm-end">
                {/* <div className="course__sort-inner">
                          <select>
                              <option>Default</option>
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                              <option>Option 4</option>
                              <option>Option 5</option>
                              <option>Option 6</option>
                          </select>
                      </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="course__tab-conent">
              <TabPanel>
                <div className="row">
                  {dummyData ? (
                    dummyData.map((data) => {
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
                        <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                          {" "}
                          <CourseCard
                            key={freeCourseList.key}
                            freeCourseList={freeCourseList}
                          />{" "}
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                      {" "}
                      <CourseCard />{" "}
                    </div>
                  )}
                </div>
              </TabPanel>
              <TabPanel>
                {/* <div className="row">
                      {props.freeCourseList ? props.freeCourseList.map((data)=> {
                          const freeCourseList= {
                              key: data.id_course,
                              nama: data.name,
                              info: data.info,
                              harga: data.price,
                              rating : data.rating,
                              silabus : data.number_of_syllabus,
                              penyedia : data.client_name,
                              jml_pengguna : data.number_of_students,
                              foto : data.photo,
                              deskripsi : data.description, 
                          }
                          return <CourseSidebarCard2 key={freeCourseList.key} freeCourseList = {freeCourseList}/>
                      }) : <CourseSidebarCard2/>}                                                                                                                                                                                            
                  </div> */}
              </TabPanel>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
}

export default CoursePrakerja;
