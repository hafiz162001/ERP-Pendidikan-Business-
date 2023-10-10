import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ratings } from "./utils/Stars";

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

const TestimonialCourseCard = ({ testimonial }) => {
  const dummyData = testimonial;

  return (
    <div className="card border-0 shadow-sm rounded-3 mb-2">
      <div className="card-body">
        <h5>
          {dummyData.nama_course} -{ratings[dummyData.rating]}
        </h5>
        <h6> {dummyData.nama_user} </h6>
        <p> {dummyData.testimonial}</p>
        <small>{dummyData.waktu_input}</small>
      </div>
    </div>
  );
};

export default TestimonialCourseCard;
