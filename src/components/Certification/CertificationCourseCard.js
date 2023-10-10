import React from "react";
import { photoUrl } from "../../api/baseUrl";
import slicingDescription from "../../utils/slicingDescription";

// const dummyData = {
//   foto_course:
//     "https://gate.bisaai.id/bisa_business_prod/course/media/2022-02-21_110931_course.png",
//   nama_course: "Internet Of Things Kelas Master",
//   deskripsi_course:
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
// status: "FAIL"
// };
const CertificationCourseCard = ({ data: dummyData }) => {
  return (
    <div className="white-bg card rounded-3 border-1 mb-30">
      <div className="row gx-0">
        <div className="col-xxl-3 col-xl-4 col-lg-4">
          <div className="">
            <img
              className="rounded img-fluid"
              src={photoUrl.certificationCoursePhoto + dummyData.foto_course}
              alt="img not found"
            />
          </div>
        </div>
        <div className="col-xxl-9 col-xl-8 col-lg-8">
          <div className="ml-10 mr-10 mt-10">
            <h5 className="fw-bolder">
              {dummyData.nama_course}{" "}
              {dummyData.status === "FAIL" ? (
                <span className="badge badge-sm bg-danger">✖ NEED TO PASS</span>
              ) : (
                <span className="badge  badge-sm bg-success">
                  ✔ {dummyData.status}
                </span>
              )}
            </h5>
            <span>
              <div
                dangerouslySetInnerHTML={{
                  __html: slicingDescription(dummyData.deskripsi_course, 120),
                }}
              />
            </span>
          </div>
          <div className="mt-10 row"></div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCourseCard;
