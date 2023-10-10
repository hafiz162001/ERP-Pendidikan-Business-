import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewAnalysis = () => {
  return (
    <div>
      <h3>Reviews</h3>
      <p>
        Gosh william I'm telling crikey burke I don't want no agro A bit of
        how's your father bugger all mate off his nut that, what a plonker cuppa
        owt to do
      </p>

      <div className="course__review-rating mb-50">
        <div className="row g-0">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="course__review-rating-info grey-bg text-center">
              <h5>5</h5>
              <ul>
                <li>
                  <a href="#">
                    {" "}
                    <i>
                      <FontAwesomeIcon icon={["fas", "star"]} />
                    </i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i>
                      <FontAwesomeIcon icon={["fas", "star"]} />
                    </i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i>
                      <FontAwesomeIcon icon={["fas", "star"]} />
                    </i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i>
                      <FontAwesomeIcon icon={["fas", "star"]} />
                    </i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i>
                      <FontAwesomeIcon icon={["fas", "star"]} />
                    </i>{" "}
                  </a>
                </li>
              </ul>
              <p>4 Ratings</p>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
            <div className="course__review-details grey-bg">
              <h5>Detailed Rating</h5>
              <div className="course__review-content mb-20">
                <div className="course__review-item d-flex align-items-center justify-content-between">
                  <div className="course__review-text">
                    <span>5 stars</span>
                  </div>
                  <div className="course__review-progress">
                    <div
                      className="single-progress w-100"
                      data-width="100%"
                    ></div>
                  </div>
                  <div className="course__review-percent">
                    <h5>100%</h5>
                  </div>
                </div>
                <div className="course__review-item d-flex align-items-center justify-content-between">
                  <div className="course__review-text">
                    <span>4 stars</span>
                  </div>
                  <div className="course__review-progress">
                    <div
                      className="single-progress w-30"
                      data-width="30%"
                    ></div>
                  </div>
                  <div className="course__review-percent">
                    <h5>30%</h5>
                  </div>
                </div>
                <div className="course__review-item d-flex align-items-center justify-content-between">
                  <div className="course__review-text">
                    <span>3 stars</span>
                  </div>
                  <div className="course__review-progress">
                    <div
                      className="single-progress w-none"
                      data-width="0%"
                    ></div>
                  </div>
                  <div className="course__review-percent">
                    <h5>0%</h5>
                  </div>
                </div>
                <div className="course__review-item d-flex align-items-center justify-content-between">
                  <div className="course__review-text">
                    <span>2 stars</span>
                  </div>
                  <div className="course__review-progress">
                    <div
                      className="single-progress w-none"
                      data-width="0%"
                    ></div>
                  </div>
                  <div className="course__review-percent">
                    <h5>0%</h5>
                  </div>
                </div>
                <div className="course__review-item d-flex align-items-center justify-content-between">
                  <div className="course__review-text">
                    <span>1 stars</span>
                  </div>
                  <div className="course__review-progress">
                    <div
                      className="single-progress w-none"
                      data-width="0%"
                    ></div>
                  </div>
                  <div className="course__review-percent">
                    <h5>0%</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAnalysis;
