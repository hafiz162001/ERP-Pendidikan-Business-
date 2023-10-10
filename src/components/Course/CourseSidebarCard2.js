import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import textCrop from "../../utils/textCrop";
import { photoUrl } from "../../api/baseUrl";
import { coursedetails } from "../../api/basePath";

function CourseSidebarCard2(props) {
  return (
    <div className="col-xxl-12">
      <div className="course__item white-bg mb-30 card shadow-sm fix">
        <div className="row gx-0">
          <div className="col-xxl-3 col-xl-3 col-lg-3">
            <div className="course__thumb course__thumb-list w-img p-relative fix">
              <Link to={coursedetails(props.freeCourseList.key)}>
                <img
                  src={
                    props.freeCourseList
                      ? photoUrl.coursePhoto + props.freeCourseList.foto
                      : "/assets/img/course/course-1.jpg"
                  }
                  alt="img not found"
                />
              </Link>
              {/* <div className="course__tag">
                            <Link to="/course-details">Art & Design</Link>
                        </div> */}
            </div>
          </div>
          <div className="col-xxl-9 col-xl-9 col-lg-9">
            <div className="course__right">
              <div className="course__content course__content-4">
                <div className="row">
                  <div className="col-xxl-10 col-xl-10 mt-2">
                    <h5 className="fw-bolder">
                      <Link to="/course-details">
                        {props.freeCourseList
                          ? props.freeCourseList.nama
                          : "The Complete 2022 Web Development Bootcamp"}
                      </Link>
                    </h5>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: textCrop(props.freeCourseList.deskripsi, 150),
                      }}
                    ></span>
                    {/* <span>{props.freeCourseList ? props.freeCourseList.deskripsi : "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum."}</span> */}
                  </div>
                  <div className="col-xxl-2 col-xl-2">
                    <div className="course__status d-flex text-end">
                      <span>
                        {props.freeCourseList
                          ? props.freeCourseList.harga === 0
                            ? "Gratis"
                            : props.freeCourseList.harga
                          : "Free"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="course__teacher d-flex align-items-center mt-10">
                  {/* <div className="course__teacher-thumb mr-15">
                                <img src="assets/img/course/teacher/teacher-1.jpg" alt="img not found"/>
                            </div> */}
                  <h6>
                    Offered by{" "}
                    <Link to="/instructor-details">
                      {props.freeCourseList
                        ? props.freeCourseList.penyedia
                        : "Jim Séchen"}
                    </Link>
                  </h6>
                </div>
                <div className="course__meta d-flex align-items-center gap-4 mt-1">
                  <div className="course__rating">
                    <span>
                      <i>
                        <FontAwesomeIcon icon={["fas", "star"]} />
                      </i>
                      {/* {props.freeCourseList
                        ? props.freeCourseList.rating
                        : "4.5"}{" "}
                      ( */}
                      (
                      {props.freeCourseList
                        ? props.freeCourseList.jml_pengguna
                        : "44"}
                      )
                    </span>
                  </div>
                  <div className="course__lesson mr-20">
                    <span>
                      <i>
                        <FontAwesomeIcon icon={["fas", "book"]} />
                      </i>
                      {props.freeCourseList
                        ? props.freeCourseList.silabus
                        : "8"}{" "}
                      Lesson
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSidebarCard2;
