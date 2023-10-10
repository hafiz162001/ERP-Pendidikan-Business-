import React from "react";
import { Link } from "react-router-dom";
import { learningpathdetails } from "../../api/basePath";
import { photoUrl } from "../../api/baseUrl";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import Loading from "../SideComponents/Loading/Loading";

const dummyData = [
  {
    course_count: 5,
    created_at: "Tue, 21 Jun 2022 01:23:52 GMT",
    description: "",
    foto_sertifikat: null,
    id_customer: 149,
    id_customer_learning_path: 27,
    id_learning_path: 3,
    name_customer: "I Putu Ananta Wijaya",
    name_learning_path: "Jr. UI/UX Developer",
    no_sertifikat: null,
    number_of_course: 5,
    photo_learning_path: "2022-06-20_084302_learning_path.png",
    point: 100,
    price: 0,
    rating: null,
    status: 1,
    syllabus_count: 36,
    testimonial: null,
  },
];

const MyLearningPath = () => {
  const { data: learningPath, loading: loadingLearningPathData } =
    useFetchDataWithAuth("customer_learning_path/get_customer_learning_path");

  if (loadingLearningPathData) return <Loading />;

  const dummyData = {
    learningPaths: learningPath.data,
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 me-1">
      {dummyData.learningPaths.map((learningPath) => (
        <Link to={learningpathdetails(learningPath.id_learning_path)}>
          <div className="card rounded-3 h-100 border-0 shadow-sm pb-2">
            <img
              className="img-fluid rounded-top"
              src={
                photoUrl.learningPathPhoto + learningPath.photo_learning_path
              }
              alt="img not found"
            />
            <div className="ms-3 me-3 mb-2">
              <h5 className="fw-bold mt-3">
                {learningPath.name_learning_path}
              </h5>
              <h6 className="fw-light">
                Jumlah Course :{" "}
                <Link to="/instructor-details" className="fw-bolder text-reset">
                  {learningPath.number_of_course}
                </Link>
              </h6>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MyLearningPath;
