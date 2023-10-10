import React, { useState } from "react";
import MyCourseTaskFinalUpload from "./MyCourseTaskFinalUpload";
import useFetchDataWithAuth from "../../../hooks/useFetchDataWithAuth";
import axios from "axios";
import { useToken } from "../../../auth/useToken";
import { Link } from "react-router-dom";
import { baseUrl, fileUrl } from "../../../api/baseUrl";
import Loading from "../../../components/SideComponents/Loading/Loading";
import { useForm } from "react-hook-form";

function MyFreeCourseDetailsTask({ id, status }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [token] = useToken();
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const { data: customerCourse, loading: loadingCustomerCourse } =
    useFetchDataWithAuth(
      "academy/get_customer_course?id_customer_course=" + id
    );
  if (loadingCustomerCourse) return <Loading />;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitTask = async () => {
    // e.preventDefault();
    const url =
      baseUrl.baseUrl + "/academy/update_customer_course?start_task=1";
    const payload = {
      id_customer_course: customerCourse.data[0].id_customer_course,
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
        setIsOpen(true);
      }
    } catch (e) {
      alert(JSON.stringify(e.response.data.error));
    } finally {
      // setSubmitting(false);
    }
  };

  return (
    <>
      <h5 className="fw-bold pb-2">Tugas Akhir</h5>
      <div className="border-top border-bottom pt-10 mb-3">
        <p
          dangerouslySetInnerHTML={{
            __html: customerCourse.data[0].task_description_course,
          }}
        />
      </div>
      {status ? (
        <>
          {customerCourse.data[0].task_final !== null && (
            <>
              <div>
                Filename :{" "}
                <a
                  href={
                    fileUrl.taskFinalCourse + customerCourse.data[0].task_final
                  }
                >
                  {customerCourse.data[0].task_final}
                </a>
              </div>
              <div>
                Waktu Submit : {customerCourse.data[0].task_time_submit}
              </div>{" "}
            </>
          )}
          <form onSubmit={handleSubmit(submitTask)} className="mt-3">
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
                Submit
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="alert alert-danger mt-20" role="alert">
          {" "}
          Tugas Akhir akan tersedia bila Anda sudah menyelesaikan seluruh
          silabus yang tersedia.
        </div>
      )}
      <MyCourseTaskFinalUpload
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        id={customerCourse.data[0].id_customer_course}
        token={token}
      />
    </>
  );
}

export default MyFreeCourseDetailsTask;
