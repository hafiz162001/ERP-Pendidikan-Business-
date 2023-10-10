import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { photoUrl } from "../../../api/baseUrl";

function ContinueStudyCard(props) {
  return (
    <Link to={"/myfreecoursedetails/" + props.myCourseList.id_customer_course}>
      <div className="card rounded-3 h-100 border-0 shadow-sm">
        <div className="row">
          <div className="col-4">
            <img
              className="img-fluid rounded-start"
              alt=""
              src={
                props.myCourseList
                  ? photoUrl.coursePhoto + props.myCourseList.photo_course
                  : "/assets/img/course/course-1.jpg"
              }
            ></img>
          </div>
          <div className="col-8">
            <h5 className="fw-bold mt-3">
              {props.myCourseList
                ? props.myCourseList.course_name
                : "Tidak ditemukan data"}
            </h5>
            <h6 className="fw-light">
              {" "}
              Offered by{" "}
              <Link to="/instructor-details" className="fw-bolder text-reset">
                {props.myCourseList
                  ? props.myCourseList.arranged_by
                  : "Tidak ditemukan data"}
              </Link>
            </h6>
            <div className="me-3 mt-3">
              <div className="progress" style={{ height: "3px" }}>
                <div
                  className="progress-bar progress-bar-striped bg-warning"
                  role="progressbar"
                  style={{
                    width: props.progress,
                    ariaValuenow: "50",
                    ariaValuemin: "0",
                    ariaValuemax: "100",
                  }}
                ></div>
              </div>
            </div>
            <small className="fst-normal text-muted">
              {" "}
              <i>
                <FontAwesomeIcon icon={["fas", "book"]} />
              </i>{" "}
              {props.myCourseList
                ? props.myCourseList.total_finished_syllabus
                : "0"}{" "}
              dari{" "}
              {props.myCourseList ? props.myCourseList.total_syllabus : "0"}{" "}
              modul telah selesai
            </small>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ContinueStudyCard;
