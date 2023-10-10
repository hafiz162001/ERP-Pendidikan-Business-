import React from "react";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";

const CheckCourseRequiredCustomer = ({ id }) => {
  const {
    data: courseRequiredCustomer,
    loading: loadingCourseRequiredCustomer,
  } = useFetchDataWithAuth(
    "certification/check_my_req_course?is_aktif=1&id_certification=" + id
  );
  return (
    <>
      {/* courseRequiredCustomer?.data?.map((course) => (
      <div className="col-6" key={course.id_certification_req_course}>
        <Link to={coursedetails(course.id_course)}>
          <CertificationCourseCard data={course} />
        </Link>
      </div>
      )) */}
    </>
  );
};

export default CheckCourseRequiredCustomer;
