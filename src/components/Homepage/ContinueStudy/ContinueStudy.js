import React from "react";
import CourseCard from "../../Course/CourseCard";
import MyCourseCard from "../../MyCourse/MyCourseCard";
import { Link } from "react-router-dom";
import useFetchDataWithAuth from "../../../hooks/useFetchDataWithAuth";
import ContinueStudyCard from "../ContinueStudy/ContinueStudyCard";
import Loading from "../../SideComponents/Loading/Loading";

function ContinueStudy() {
  const { data: myCourse, loading: loadingMyCourse } = useFetchDataWithAuth(
    "academy/get_customer_course"
  );
  if (loadingMyCourse) return <Loading />;
  if (myCourse.row_count === 0) return <span></span>;
  // console.log(myCourse);

  return (
    <div>
      <section className="course__area pt-50 pb-20 bg-light">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-7 col-xl-6 col-lg-6">
              <div className="section__title-wrapper mb-20">
                <h2 className="heading">Lanjutkan Belajar</h2>
                <p>
                  Banyak course yang sudah kamu ikuti, jangan sampai lupa
                  mengerjakannya...
                </p>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="mb-20 d-flex justify-content-lg-end ">
                <Link to="/myfreecourse" className="more hover link-red">
                  Lihat selengkapnya
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {myCourse.data.slice(0, 2).map((data) => {
              let progress =
                (data.total_finished_syllabus / data.total_syllabus) * 100 +
                "%";
              return (
                <div
                  key={data.id_customer_course}
                  className="col-xxl-6 col-xl-6 col-lg-12 col-md-12"
                >
                  <ContinueStudyCard myCourseList={data} progress={progress} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContinueStudy;
