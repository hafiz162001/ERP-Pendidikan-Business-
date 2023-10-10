import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReviewList from "./ReviewList";

function CourseSidebarDetailsReviews({ id }) {
  return (
    <div className="course__review">
      <ReviewList id={id} />
    </div>
  );
}

export default CourseSidebarDetailsReviews;
