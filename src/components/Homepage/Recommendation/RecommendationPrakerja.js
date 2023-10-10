import React from "react";
import CourseCard from "../../Course/CourseCard";
import { Link } from "react-router-dom";

function RecommendationPrakerja() {
  return (
    <div>
      <section className="course__area pt-50 pb-20 bg-light">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="section__title-wrapper mb-20">
                <div className="clearfix bb-container-head">
                  <span className="tag">Baru</span>
                  <h2 className="section__title bb-title heading">
                    Sekilas Program
                  </h2>
                  <img
                    className="bb-image"
                    src="/assets/img/homepage/kartu_prakerja.png"
                    alt="img not found"
                  />
                </div>
                <p>Ikuti Bakerspice melalui Program Kartu Prakerja</p>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6">
              <div className="mb-30 d-flex justify-content-end">
                <Link to="/prakerja" className="more hover link-red">
                  Lihat Program Prakerja
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
              {/* <CourseCard /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecommendationPrakerja;
