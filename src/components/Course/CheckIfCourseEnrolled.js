import React from "react";
import { Link } from "react-router-dom";
import { useFetchMyFreeCourse } from "../../api/mycourse";
import Loading from "../SideComponents/Loading/Loading";

const CheckIfCourseEnrolled = ({ id }) => {
  const {
    isLoading: loadingMyCourse,
    isError,
    data: myCourse,
    error,
    refetch,
  } = useFetchMyFreeCourse(id);

  if (isError) return <h1>{error.message}</h1>;
  if (loadingMyCourse) return <Loading />;
  return (
    <>
      {loadingMyCourse && <Loading />}
      {myCourse.row_count >= 1 ? (
        <Link
          to={"/myfreecoursedetails/" + myCourse.data[0].id_customer_course}
        >
          <div className="d-grid gap-2">
            <button className="btn btn-altwarning fw-bold">Masuk</button>
          </div>
        </Link>
      ) : (
        <Link to={"/checkout/" + id}>
          <div className="d-grid gap-2">
            <button className="btn btn-altdanger fw-bold">Daftar</button>
          </div>
        </Link>
      )}
    </>
  );
};

export default CheckIfCourseEnrolled;
