import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/SideComponents/Loading/Loading";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";

const CheckIfEnrolled = ({ id_learning_path }) => {
  const { data: learningPath, loading: loadingLearningPathData } =
    useFetchDataWithAuth(
      "customer_learning_path/get_customer_learning_path",
      false
    );

  return (
    <>
      {loadingLearningPathData ? (
        <>
          {/* <Link to={"/checkoutlearningpath/" + id_learning_path}>
            <button className="btn btn-altdanger">Daftar</button>
          </Link> */}
        </>
      ) : (
        <>
          {learningPath.row_count < 1 ? (
            <Link to={"/checkoutlearningpath/" + id_learning_path}>
              <button className="btn btn-altdanger">Daftar</button>
            </Link>
          ) : (
            <></>
            /* <Link to={learningpathdetails(id_learning_path)} {"/learningpathdetails/" +}>
              <button className="btn btn-altdanger">Masuk</button>
            </Link> */
          )}
        </>
      )}
    </>
  );
};

export default CheckIfEnrolled;
