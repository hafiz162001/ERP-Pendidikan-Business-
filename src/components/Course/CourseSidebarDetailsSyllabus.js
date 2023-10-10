import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CourseSidebarDetailsSyllabus(props) {
  return (
    <div>
      <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
        <div className="course__curriculum-info">
          <svg className="document" viewBox="0 0 24 24">
            <path
              className="st0"
              d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z"
            />
            <polyline className="st0" points="14,2 14,8 20,8 " />
            <line className="st0" x1="16" y1="13" x2="8" y2="13" />
            <line className="st0" x1="16" y1="17" x2="8" y2="17" />
            <polyline className="st0" points="10,9 9,9 8,9 " />
          </svg>
          <h3>
            {" "}
            <span className="mr-3">
              {props.syllabusNumber ? props.syllabusNumber : "Reading"}
            </span>
            {". "}
            {props.syllabusName ? props.syllabusName : "Lorem Ipsum"}
          </h3>
        </div>
        {/* <div className="course__curriculum-meta">
          <span className="time">
            {" "}
            <i>
              <FontAwesomeIcon icon={["fas", "clock"]} />
            </i>{" "}
            14 minutes
          </span>
          <span className="question">2 questions</span>
        </div> */}
      </div>
    </div>
  );
}

export default CourseSidebarDetailsSyllabus;
