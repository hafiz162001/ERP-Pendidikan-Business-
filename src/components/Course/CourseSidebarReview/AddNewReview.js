import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const AddNewReview = () => {
  return (
    <div className="course__form">
      <h3>Write a Review</h3>
      <div className="course__form-inner">
        <form action="#">
          <div className="row">
            <div className="col-xxl-6">
              <div className="course__form-input">
                <input type="text" placeholder="Your Name" />
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="course__form-input">
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="course__form-input">
                <input type="text" placeholder="Review Title" />
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="course__form-input">
                <div className="course__form-rating">
                  <span>Rating : </span>
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
                      <a href="#" className="no-rating">
                        {" "}
                        <i>
                          <FontAwesomeIcon icon={["fas", "star"]} />
                        </i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-rating">
                        {" "}
                        <i>
                          <FontAwesomeIcon icon={["fas", "star"]} />
                        </i>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <textarea placeholder="Review Summary"></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="course__form-btn mt-10 mb-55">
                <button type="submit" className="e-btn">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
