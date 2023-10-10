import React, { useEffect } from "react";
import Wrapper from "../../components/Layout/Wrapper";
import useFetchData from "../../hooks/useFetchData";
import { photoUrl } from "../../api/baseUrl";
import { Link } from "react-router-dom";
import Loading from "../../components/SideComponents/Loading/Loading";
import { useParams } from "react-router-dom";
import CheckIfEnrolled from "./CheckIfEnrolled";
import { useUser } from "../../auth/useUser";
import { coursedetails } from "../../api/basePath";
import { base64UrlDecode } from "../../utils/base64UrlConverter";

// const dummyData = {
//   learningPath: [
//     {
//       description:
//         "loerem impesiun dolor sit amet loerem impesiun dolor sit amet loerem impesiun dolor sit ametloerem impesiun dolor sit amet",
//       id_client: 1,
//       id_learning_path: 1,
//       is_aktif: 1,
//       number_of_course: 3,
//       name: "Python",
//       photo: "2020-06-19_204727_learning_path.png",
//       price: 0,
//     },
//   ],
//   learningPathDetails: [
//     {
//       course_description:
//         "Manajemen startup berfungsi untuk dapat merencanakan, mengelola, mengendalikan suatu start-up dengan baik, sehingga startup tersebut dapat berjalan lancar dan dapat di akselerasi menjadi lebih besar sehingga layak mendapatkan pendanaan dari suatu venture capital atau investor lainnya.",
//       course_name: "Manajemen Start-up",
//       course_photo: "2022-04-20_134932_course.png",
//       id_course: 20,
//       id_learning_path: 1,
//       id_learning_path_detail: 2,
//       is_aktif: 1,
//       is_free: 0,
//       number_of_course: 3,
//       urutan: 1,
//     },
//     {
//       course_description:
//         "Customer Relationship Management merupakan suatu strategi bisnis dimana strategi ini dipelajari agar perusahaan dapat mempelajari secara detail mengenai kebutuhan dan keinginan pelanggan juga untuk menjalin tali silaturahmi yang lebih dekat dengan pelanggan.",
//       course_name: "Customer Relationship Management",
//       course_photo: "2022-05-23_072335_course.png",
//       id_course: 21,
//       id_learning_path: 1,
//       id_learning_path_detail: 3,
//       is_aktif: 1,
//       is_free: 0,
//       number_of_course: 3,
//       urutan: 1,
//     },
//     {
//       course_description:
//         "Pitch Deck merupakan sebuah presentasi singkat yang bisa menjelaskan gambaran umum tentang rencana bisnis startup. Dengan adanya pitch deck, startup dapat dengan mudah memperkenalkan bisnisnya kepada calon investor.",
//       course_name: "Pitch Deck",
//       course_photo: "2022-05-23_072450_course.png",
//       id_course: 22,
//       id_learning_path: 1,
//       id_learning_path_detail: 4,
//       is_aktif: 1,
//       is_free: 0,
//       number_of_course: 3,
//       urutan: 1,
//     },
//   ],
// };

const LearningPathDetails = () => {
  const user = useUser("");
  let { id } = useParams();
  id = base64UrlDecode(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    data: learningPathDetailsData,
    loading: loadingLearningPathDetailsData,
  } = useFetchData(
    "learning_path/get_learning_path_detail?is_aktif=1&id_learning_path=" + id
  );

  const { data: learningPathData, loading: loadingLearningPathData } =
    useFetchData(
      "learning_path/get_learning_path?is_aktif=1&id_learning_path=" + id
    );

  if (loadingLearningPathDetailsData || loadingLearningPathData)
    return <Loading />;

  const dummyData = {
    learningPath: learningPathData.data,
    learningPathDetails: learningPathDetailsData.data,
  };

  // console.log(dummyData);

  return (
    <Wrapper>
      <div className="certification_details__header--background pt-120 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h5 className="fw-bolder">{dummyData.learningPath[0].name}</h5>
              <span>{dummyData.learningPath[0].description}</span>
              <div className="">
                <span>Jumlah Course : </span>
                <span className="fw-bold">
                  {dummyData.learningPath[0].number_of_course}
                </span>
              </div>
              <div className="mb-3">
                <span>Harga : </span>
                <span className="fw-bold">
                  Rp.{dummyData.learningPath[0].price}
                </span>
              </div>
              {/* {console.log(user)} */}
              {user ? (
                <CheckIfEnrolled
                  id_learning_path={dummyData.learningPath[0].id_learning_path}
                />
              ) : (
                <></>
              )}

              {/* <Link
                to={
                  "/checkoutlearningpath/" +
                  dummyData.learningPath[0].id_learning_path
                }
              >
                <button className="btn btn-altdanger">Daftar</button>
              </Link> */}
            </div>
            <div className="col-2">
              <img
                className="img-fluid"
                src={
                  photoUrl.learningPathPhoto + dummyData.learningPath[0].photo
                }
                alt="img not found"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container">
          <div className="pt-30 pb-30">
            {dummyData.learningPathDetails.map((learningPathDetail, index) => (
              <div
                className="row align-items-center"
                key={learningPathDetail.id_learning_path_detail}
              >
                <div className="col-1 mb-20 text-center">
                  <span className="badge rounded-pill bg-warning text-dark">
                    {index + 1}
                  </span>
                </div>
                <div className="col-11">
                  <Link to={coursedetails(learningPathDetail.id_course)}>
                    <div className="white-bg card rounded-3 shadow-sm border-0 mb-20">
                      <div className="row gx-0">
                        <div className="col-xxl-2 col-xl-3 col-lg-3">
                          <img
                            className="img-fluid rounded-3"
                            src={
                              photoUrl.coursePhoto +
                              learningPathDetail.course_photo
                            }
                            alt="img not found"
                          />
                        </div>
                        <div className="col-xxl-10 col-xl-9 col-lg-9">
                          <div className="course__right">
                            <div className="course__content course__content-4">
                              <div className="row">
                                <h5 className="fw-bolder">
                                  {learningPathDetail.course_name}
                                </h5>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      learningPathDetail.course_description,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LearningPathDetails;
