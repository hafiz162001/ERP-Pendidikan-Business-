import React from "react";
import { photoUrl } from "../../api/baseUrl";
import textCrop from "../../utils/textCrop";

const LearningPathCard = ({ learningPath }) => {
  return (
    <div className="white-bg card rounded-3  border-1 mb-20">
      <div className="row align-items-center gx-0">
        <div className="col-xxl-2 col-xl-3 col-lg-3">
          <img
            className="img-fluid rounded-start"
            src={photoUrl.learningPathPhoto + learningPath.photo}
            alt="img not found"
          />
        </div>
        <div className="col-xxl-9 col-xl-8 col-lg-8">
          <div className="course__right">
            <div className="course__content course__content-4">
              <div className="row">
                <h5 className="fw-bolder">{learningPath.name}</h5>
                <span
                  dangerouslySetInnerHTML={{
                    __html: textCrop(learningPath.description, 150),
                  }}
                ></span>
              </div>
              <div className="mt-10 row">
                <div className="col-auto">
                  <span>Jumlah Course : </span>
                  <span className="fw-bold">
                    {learningPath.number_of_course}
                  </span>
                </div>
                <div className="col-auto">
                  <span>Harga : </span>
                  <span className="fw-bold">
                    {learningPath.price === 0
                      ? "Gratis"
                      : "Rp." + learningPath.free}
                  </span>
                </div>
                <span>Jumlah Peserta : {"Masih perbaikan"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathCard;
