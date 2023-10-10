import { id } from "date-fns/locale";
import React, { useRef, useState } from "react";
import Modal from "react-modal";
import base64Converter from "../../../utils/base64Converter";
import axios from "axios";
import { baseUrl } from "../../../api/baseUrl";
import base64RemoveMime from "../../../utils/base64RemoveMime";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import refreshPage from "../../../utils/refreshPage";

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

function MyCourseTaskFinalUpload({ modalIsOpen, closeModal, id, token }) {
  const formUpload = useRef();
  const [desc, setDesc] = useState("");
  const [filename, setFilename] = useState("");
  const [myTaskFile, setMyTaskFile] = useState("");
  let subtitle;
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const handleFileUploads = async (e) => {
    const file = e.target.files[0];
    if (!file && !file.name) {
      window.alert("Please select a file");
      return false;
    }
    if (file.size > 2e6) {
      window.alert("Please upload a file smaller than 2 MB");
      formUpload.current.reset();
      return false;
    }
    if (!["application/pdf"].includes(file.type)) {
      window.alert("Your file type is not pdf");
      formUpload.current.reset();
      return false;
    }
    const base64 = await base64Converter(file);
    setMyTaskFile(base64);
  };

  const descHandleChange = (e) => {
    setDesc(e.target.value);
  };

  const filenameHandleChange = (e) => {
    setFilename(e.target.value);
  };

  const submitTaskFinal = async (e) => {
    // e.preventDefault();
    // console.log("desc : " + desc);
    // console.log("taskfile: " + base64RemoveMime(myTaskFile));
    // console.log("filename: " + filename);

    const url = baseUrl.baseUrl + "/academy/update_customer_course";
    const payload = {
      id_customer_course: id,
      task_description: desc,
      task_final: base64RemoveMime(myTaskFile),
      file_name: filename + ".pdf",
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    };

    try {
      const response = await axios.put(url, payload, header);
      if (response.data.status_code === 200) {
        toast.success("Berhasil upload tugas");
        setTimeout(() => {
          closeModal();
          // setMount(false);
          refreshPage();
        }, 1000);
      }
    } catch (e) {
      toast.error("Gagal: " + JSON.stringify(e.response.data.error));
      // alert(JSON.stringify(e.response.data.error));
      // console.log(e);
    } finally {
      // setSubmitting(false);
    }
  };

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=""
      >
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
        <div className="modal-header">
          <h5
            className="me-3 modal-title"
            ref={(_subtitle) => (subtitle = _subtitle)}
          >
            Upload File Tugas
          </h5>
          <button className="btn-close" onClick={closeModal} />
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit(submitTaskFinal)} ref={formUpload}>
            <div className="mb-3">
              <label HTMLfor="desc" className="form-label">
                Deskripsi
              </label>
              <textarea
                type="text"
                rows="2"
                className="form-control"
                id="desc"
                name="desc"
                value={desc}
                onChange={descHandleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">File Tugas</label>
              <input
                type="file"
                className="form-control"
                name="myImage"
                accept=".pdf"
                onChange={(e) => handleFileUploads(e)}
              />
            </div>
            <div className="mb-3">
              <label HTMLfor="filename" className="form-label">
                Nama File
              </label>
              <input
                type="text"
                className="form-control"
                id="filename"
                name="filename"
                value={filename}
                onChange={filenameHandleChange}
              />
            </div>
            <div className="d-grid gap-2">
              <button
                className="btn btn-altdanger"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <span
                    className="spinner-border spinner-border-sm me-1"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                Submit Tugas
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default MyCourseTaskFinalUpload;
