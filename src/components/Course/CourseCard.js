import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { photoUrl } from "../../api/baseUrl";
import numberWithCommas from "../../utils/numberWithCommas";
import { coursedetails } from "../../api/basePath";

function CourseCard(props) {
  // console.log(props.freeCourseList);
  return (
    <Link to={coursedetails(props.freeCourseList.key)}>
      <div className="course__item white-bg mb-60 shadow-sm fix">
        <div className="course__thumb w-img p-relative fix">
          <img
            src={
              props.freeCourseList
                ? photoUrl.coursePhoto + props.freeCourseList.foto
                : "/assets/img/course/course-1.jpg"
            }
            alt="img not found"
          />
        </div>
        <div className="course__content">
          <h6 className="fw-bolder mt-1">
            {props.freeCourseList
              ? props.freeCourseList.nama
              : "The Complete 2022 Web Development Bootcamp"}
          </h6>
          <div className="course__teacher d-flex align-items-center">
            {/* <div className="course__teacher-thumb mr-15">
                    <img src="assets/img/course/teacher/teacher-1.jpg" alt="img not found"/>
                </div> */}
            <h6 className="mb-1">
              {props.freeCourseList?.penyedia ? (
                <>
                  Offered by {/* <Link to="/instructor-details"> */}
                  <span className=""> {props.freeCourseList.penyedia} </span>
                  {/* </Link> */}
                </>
              ) : (
                ""
              )}
            </h6>
          </div>
          <div className="course__meta d-flex align-items-center justify-content-between">
            <div className="course__rating">
              <span>
                <i>
                  {/* <FontAwesomeIcon icon={["fas", "star"]} /> */}
                  <FontAwesomeIcon icon={["fas", "users"]} />
                </i>
                {/* {props.freeCourseList ? props.freeCourseList.rating : "4.5"}*/}
                (
                {props.freeCourseList
                  ? props.freeCourseList.jml_pengguna
                  : "44"}
                )
              </span>
            </div>
            <div className="course__lesson">
              <span>
                <i>
                  <FontAwesomeIcon icon={["fas", "book"]} />
                </i>
                {props.freeCourseList ? props.freeCourseList.silabus : "8"}{" "}
                Lesson
              </span>
            </div>
          </div>
        </div>
        <div className="course__more d-flex justify-content-between align-items-center">
          <div className="course__status">
            <h6 className="text-danger fw-bolder mt-2">
              {props.freeCourseList
                ? props.freeCourseList.harga === 0
                  ? "Gratis"
                  : "Rp. " + numberWithCommas(props.freeCourseList.harga)
                : "Free"}
            </h6>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
