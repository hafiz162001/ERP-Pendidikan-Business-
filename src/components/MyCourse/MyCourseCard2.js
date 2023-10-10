import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { photoUrl } from "../../api/baseUrl";

function MyCourseCard2(props) {
  const courseName = props.myCourseList.course_name;
  return (
    <Link to={"/myfreecoursedetails/" + props.myCourseList.id_customer_course}>
      <div className="bg-light mb-30 fix">
        <div className="row gx-0">
          <div className="col-xxl-2 col-xl-4 col-lg-4">
            <div className="course__thumb course__thumb-list w-img">
              <img
                src={
                  props.myCourseList
                    ? photoUrl.coursePhoto + props.myCourseList.photo_course
                    : "/assets/img/course/course-1.jpg"
                }
                alt="img not found"
              />
            </div>
          </div>
          <div className="col-xxl-9 col-xl-8 col-lg-8">
            <div className="course__right">
              <div className="course__content course__content-4">
                <div className="row">
                  <div className="col-xxl-12 col-xl-12">
                    <h3 className="course__title">
                      <Link to="/mycoursedetails">
                        {props.myCourseList
                          ? props.myCourseList.course_name
                          : "The Complete 2022 Web Development Bootcamp"}
                      </Link>
                    </h3>
                    <div className="progress mt-10 mb-10">
                      <div
                        className="progress-bar progress-bar-striped bg-warning"
                        role="progressbar"
                        style={{
                          width: "50%",
                          ariaValuenow: "50",
                          ariaValuemin: "0",
                          ariaValuemax: "100",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="course__meta d-flex align-items-center">
                  <div className="course__lesson mr-20">
                    <span>
                      <i>
                        <FontAwesomeIcon icon={["fas", "book"]} />
                      </i>{" "}
                      7 dari{" "}
                      {props.myCourseList
                        ? props.myCourseList.total_syllabus
                        : "8"}{" "}
                      modul telah selesai
                    </span>
                  </div>
                </div>
                <div className="course__teacher d-flex align-items-center  ">
                  <h6>
                    Offered by{" "}
                    <Link to="/instructor-details">
                      {props.myCourseList
                        ? props.myCourseList.arranged_by
                        : "Jim Séchen"}
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MyCourseCard2;
