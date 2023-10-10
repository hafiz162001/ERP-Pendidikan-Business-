import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../api/baseUrl";
import { useToken } from "../../../auth/useToken";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const dummyData = {
  id_syllabus: 2,
  name: "Pre Test",
  index: 1,
  score: 90,
  status: 2,
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    zIndex: "10",
  },
};

Modal.setAppElement("#root");

const MyMCOJTSyllabusCard = ({ myCourseSyllabus, index }) => {
  const navigate = useNavigate();
  const [token] = useToken("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const dummyData = {
    ...myCourseSyllabus,
    index,
  };

  const url =
    baseUrl.baseUrl + "/academy/update_customer_syllabus?start_time_task=1";
  const startTask = async () => {
    const payload = {
      id_customer_syllabus: myCourseSyllabus.id_customer_syllabus,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    };

    try {
      const response = await axios.put(url, payload, header);
      // console.log(response.data);
      if (response.data.status_code === 200) {
        toast.success("Memulai");
        // alert("Memulai");
        setTimeout(() => {
          navigate("/mysyllabusuploadtask/" + dummyData.id_customer_syllabus);
        }, 1000);
      }
    } catch (e) {
      toast.error(JSON.stringify(e.response.data.error));
      // console.log(response);
    } finally {
      // setSubmitting(false);
    }
  };

  let subtitle;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "";
  }

  const confirmationPopup = (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel=""
    >
      <div className="card">
        Apakah anda ingin memulai mengerjakan tugas ?
        <button onClick={closeModal} className="btn btn-altdanger">
          Batal
        </button>
        <form onSubmit={handleSubmit(startTask)}>
          <button
            className="btn btn-altwarning w-100"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting && (
              <span
                className="spinner-border spinner-border-sm me-1"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Lanjutkan
          </button>
        </form>
      </div>
    </Modal>
  );

  return (
    <>
      <Toaster
        containerStyle={{
          top: 80,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        position="top-center"
        reverseOrder={false}
      />
      <div
        className={`container card mb-2 shadow-sm border-0 ${
          dummyData.status === 2 ? "bg-primary text-white" : ""
        }`}
      >
        <Link to={"/myfreecoursesyllabus/" + dummyData.id_customer_syllabus}>
          <div className="d-flex justify-content-between pt-3 pb-2">
            <div className="">
              <h6 className="fw-bold">
                {" "}
                {dummyData.index + 1}. {dummyData.name}{" "}
              </h6>
              <span className="container"> Score : {dummyData.score} </span>
            </div>
            {dummyData.status === 2 ? (
              <div className="">
                <small>
                  Lulus <FontAwesomeIcon icon="fa-solid fa-circle-check" />{" "}
                </small>
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
        <div className="">
          {dummyData.status === 2 ? (
            <div onClick={openModal} className="btn btn-altwarning mb-10">
              Upload tugas
            </div>
          ) : (
            <></>
          )}
        </div>
        {confirmationPopup}
      </div>
    </>
  );
};

export default MyMCOJTSyllabusCard;
