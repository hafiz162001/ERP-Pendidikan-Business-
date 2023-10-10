import React, { useRef, useState } from "react";
import Modal from "react-modal";
import useFetchDataWithAuth from "../../../hooks/useFetchDataWithAuth";
import DownloadCertificate from "../DownloadCertiifcate/DownloadCertificate";
import Loading from "../../SideComponents/Loading/Loading";
import AddTestimonial from "./AddTestimonial";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    minWidth: "25%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    zIndex: "10",
  },
};

Modal.setAppElement("#root");

const ReviewCourse = ({ id }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const { data: dataTestimonialCustomer, loading: loadingTestimonialCustomer } =
    useFetchDataWithAuth(
      "academy/get_customer_testimoni_and_rating?id_customer_course=" + id
    );
  if (loadingTestimonialCustomer) return <Loading />;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitTaskFinal = () => {};

  const modal = (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel=""
    >
      <div className="modal-header">
        <h5
          className="me-3 modal-title"
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          Tulis Review
        </h5>
        <button className="btn-close" onClick={closeModal} />
      </div>
      <div className="modal-body">
        <AddTestimonial id={id} />
      </div>
    </Modal>
  );

  // console.log(dataTestimonialCustomer);

  return (
    <>
      <div>
        <div className="card border-0">
          <div className="card-body text-center">
            {modal}
            {!dataTestimonialCustomer?.data[0]?.rating ? (
              <>
                <p>Belum ada review</p>
                <button onClick={openModal} className="btn btn-altwarning">
                  Tambahkan
                </button>
              </>
            ) : (
              <>
                <DownloadCertificate id={id} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCourse;
