import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useFetchDataWithAuth from "../../../hooks/useFetchDataWithAuth";
import Loading from "../../SideComponents/Loading/Loading";
import TestimonialCourseCard from "../../Testimonial/TestimonialCourseCard";

const TestimonialCourseDetails = ({ id }) => {
  const { data: dataTestimonialCustomer, loading: loadingTestimonialCustomer } =
    useFetchDataWithAuth(
      "academy/get_customer_testimoni_and_rating?id_customer_course=" + id
    );
  if (loadingTestimonialCustomer) return <Loading />;
  return (
    <>
      {!dataTestimonialCustomer?.data[0]?.rating ? (
        <></>
      ) : (
        <>
          <h5 className="fw-bold">Review Saya</h5>
          <TestimonialCourseCard
            testimonial={dataTestimonialCustomer?.data[0]}
          />
        </>
      )}
    </>
  );
};

export default TestimonialCourseDetails;
