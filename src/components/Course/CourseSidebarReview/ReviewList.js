import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useFetchData from "../../../hooks/useFetchData";
import Loading from "../../SideComponents/Loading/Loading";
import { ratings } from "../../Testimonial/utils/Stars";

const dummyData = {
  address: "Kp.susukan rt03/rw02 No.41  desa susukan kecamatan bojonggede",
  date_of_birth: "Mon, 11 Dec 2000 00:00:00 GMT",
  email: "murdikaw@upnvj.ac.id",
  gender: 1,
  id_course: 5,
  id_customer: 287,
  id_customer_course: 783,
  id_customer_graduate: 783,
  instansi: null,
  is_aktif: 1,
  nama_course: "Manajemen",
  nama_user: "Murdika wahyuda",
  phone: "085891285462",
  photo: "2022-06-15_165603288.jpg",
  rating: 5,
  testimonial: "seru sekali mengerjakan course nya",
  waktu_input: "Fri, 17 Jun 2022 10:21:10 GMT",
};

const ReviewList = ({ id }) => {
  const { data: dataTestimonialCourse, loading: loadingTestimonialCourse } =
    useFetchData(
      "academy/get_customer_testimoni_and_rating_landing?page=1&id_course=" + id
    );
  if (loadingTestimonialCourse) return <Loading />;

  return (
    <div className="course__comment mb-75">
      <div className="container">
        <h4 className="fw-bold">
          {dataTestimonialCourse.row_count} Testimonial
        </h4>
      </div>
      {dataTestimonialCourse.data.map((dummyData) => (
        <div className="course__comment-box ">
          {/* <div className="course__comment-thumb float-start">
              <img
                src="/assets/img/course/comment/course-comment-1.jpg"
                alt="img not found"
              />
            </div> */}
          <div className="course__comment-content">
            {/* remove ml-70 */}
            <div className="course__comment-wrapper fix">
              <div className="course__comment-info float-start">
                <h6 className="fw-bold">{dummyData.nama_user}</h6>
              </div>
              <div className="course__comment-rating float-start float-sm-end">
                {ratings[5]}
              </div>
            </div>
            {/* remove ml-70 */}
            <div className="course__comment-text ">
              <p>{dummyData.testimonial}</p>
            </div>
            <small className="">{dummyData.waktu_input}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
