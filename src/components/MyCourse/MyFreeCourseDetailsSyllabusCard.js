import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function MyFreeCourseDetailsSyllabusCard(props) {
  return (
    // {props.myCourseSyllabus.status}
    <div
      className={`container card mb-2  shadow-sm  ${
        props.myCourseSyllabus.status === 2
          ? "bg-primary text-white"
          : "border-warning border-start border-3"
      }`}
    >
      <Link
        to={
          "/myfreecoursesyllabus/" + props.myCourseSyllabus.id_customer_syllabus
        }
      >
        <div className="d-flex justify-content-between pt-3 pb-2">
          <div className="">
            <h6 className="fw-bold">
              {" "}
              {props.index + 1}. {props.myCourseSyllabus.name}{" "}
            </h6>
            <span className="container">
              {" "}
              Score : {props.myCourseSyllabus.score}{" "}
            </span>
          </div>
          {props.myCourseSyllabus.status === 2 ? (
            <div className="">
              <small>
                Lulus <FontAwesomeIcon icon="fa-solid fa-circle-check" />{" "}
              </small>{" "}
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
}

export default MyFreeCourseDetailsSyllabusCard;
