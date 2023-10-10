import React, { useState } from "react";
import Modal from "react-modal";
import { saveAs } from "file-saver";
import { photoUrl } from "../../../api/baseUrl";

const customStyles = {
  content: {
    borderRadius: "10px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginTop: "10%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    zIndex: "10000",
  },
};

Modal.setAppElement("#root");

function MyCourseCertificateCard(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  let subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  const image_url = props.myCourseList
    ? photoUrl.certificatePhoto +
      props.myCourseList.id_course +
      "/" +
      props.myCourseList.foto_sertifikat
    : "/assets/img/course/course-1.jpg";

  const downloadImage = () => {
    saveAs(image_url, props.myCourseList.foto_sertifikat);
  };

  return (
    <div className="container">
      <div className="card border-1 mb-3">
        <div className="card-body">
          <div className="row align-items-center">
            <div onClick={openModal} className="col-2">
              <img
                className="img-fluid rounded"
                src={
                  props.myCourseList
                    ? photoUrl.certificatePhoto +
                      props.myCourseList.id_course +
                      "/" +
                      props.myCourseList.foto_sertifikat
                    : "/assets/img/course/course-1.jpg"
                }
                alt="img not found"
              ></img>
            </div>
            <div className="col-10">
              <div className="row align-items-center">
                <div className="col-10">
                  <h5 className="card-title fw-bold">
                    {props.myCourseList.course_name}
                  </h5>
                  <p className="card-text">
                    Total Syllabus : {props.myCourseList.total_syllabus}
                  </p>
                </div>
                <div className="col-2 d-grid gap-2">
                  <button onClick={downloadImage} className="btn btn-altdanger">
                    Download
                  </button>
                  <button onClick={openModal} className="btn btn-altwarning">
                    Lihat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=""
      >
        <div className="">
          {/* <h5 className="text-center fw-bold">Sertifikat</h5> */}
          <img
            className="img-fluid rounded mb-3"
            src={
              props.myCourseList
                ? photoUrl.certificatePhoto +
                  props.myCourseList.id_course +
                  "/" +
                  props.myCourseList.foto_sertifikat
                : "/assets/img/course/course-1.jpg"
            }
          />
          <div className="d-flex justify-content-center gap-4">
            <button onClick={downloadImage} className="btn btn-primary">
              Download
            </button>
            <button onClick={closeModal} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MyCourseCertificateCard;
