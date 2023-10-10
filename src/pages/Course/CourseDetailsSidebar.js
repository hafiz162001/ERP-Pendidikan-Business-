import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import { photoUrl } from "../../api/baseUrl";
import numberWithCommas from "../../utils/numberWithCommas";
import { useFetchMyFreeCourse } from "../../api/mycourse";
import { useToken } from "../../auth/useToken";
import Loading from "../../components/SideComponents/Loading/Loading";
import { useUser } from "../../auth/useUser";
import CheckIfCourseEnrolled from "../../components/Course/CheckIfCourseEnrolled";

function CourseDetailsSidebar(props) {
  const user = useUser("");
  // const [token] = useToken();
  // const { data: myCourse, loading: loadingMyCourse } = useFetchDataWithAuth(
  //   "academy/get_customer_course?order_by=DESC&id_course=" + props.idCourse,
  //   false
  // );

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  // const {
  //   isLoading: loadingMyCourse,
  //   isError,
  //   data: myCourse,
  //   error,
  //   refetch,
  // } = useFetchMyFreeCourse(props.idCourse);

  // if (isError) return <h1>{error.message}</h1>;
  // if (loadingMyCourse) return <Loading />

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={onCloseModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "70%",
            padding: "unset",
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)",
          },
          closeButton: {
            background: "yellow",
          },
        }}
        center
      >
        <ReactPlayer
          url="https://youtu.be/es4x5R-rV9s"
          width="100%"
          height="calc(100vh - 100px)"
        />
      </Modal>

      <div className="course__sidebar pl-30">
        <div className="course__shape">
          {/* <img className="course-dot" src="assets/img/course/course-dot.png" alt="img not found"/> */}
        </div>
        <div className="course__sidebar-widget-2 white-bg p-relative shadow-md">
          <div className="course__video">
            <div className="course__video-thumb w-img mb-20">
              <img
                src={
                  props.freeCourseDetails
                    ? photoUrl.coursePhoto + props.freeCourseDetails.foto
                    : "/assets/img/course/video/course-video.jpg"
                }
                alt="img not found"
              />
              {/* <div className="course__video-play">
                <a href="#!" className="play-btn" onClick={onOpenModal}>
                  {" "}
                  <i>
                    <FontAwesomeIcon icon={["fas", "play"]} />
                  </i>{" "}
                </a>
              </div> */}
            </div>
            <div className="course__video-meta mb-20 d-flex align-items-center justify-content-between">
              <div className="course__video-price d-flex">
                <h5 className="fw-bolder">
                  {props.freeCourseDetails
                    ? props.freeCourseDetails.harga === 0
                      ? "Gratis"
                      : "Rp. " + numberWithCommas(props.freeCourseDetails.harga)
                    : "$74.<span>00</span>"}{" "}
                </h5>
                {/* <h5 className="old-price">Rp.55000</h5> */}
              </div>
              {/* <div className="course__video-discount">
                    <span>68% OFF</span>
                </div> */}
            </div>
            <div className="row">
              {!user ? (
                <Link to={"/checkout/" + props.freeCourseDetails.id}>
                  <div className="d-grid gap-2">
                    <button className="btn btn-altdanger fw-bold">
                      Daftar
                    </button>
                  </div>
                </Link>
              ) : (
                <CheckIfCourseEnrolled id={props.idCourse} />
              )}
            </div>
            {props.freeCourseDetails.harga !== 0 ? (
              <div className="course__payment mb-30 mt-30">
                <h5 className="">Pembayaran via:</h5>
                <div className="row justify-content-around">
                  <div className="col">
                    {" "}
                    <img
                      className="bayar-icon img-fluid"
                      src="https://bayarind.id//asset/img/logo-bayarind.png"
                      alt="img not found"
                    />
                  </div>
                  <div className="col">
                    <img
                      className="bayar-icon img-fluid"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1200px-Logo_dana_blue.svg.png"
                      alt="img not found"
                    />
                  </div>
                  <div className="col">
                    <img
                      className="bayar-icon img-fluid"
                      src="https://www.steelytoe.com/static/assets/shopeepay-logo/1-shopeepay-rectangle-orange.png"
                      alt="img not found"
                    />
                  </div>
                  <div className="col">
                    <img
                      className="bayar-icon img-fluid"
                      src="https://seeklogo.com/images/L/link-aja-logo-F029ED0939-seeklogo.com.png"
                      alt="img not found"
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* <div className="course__enroll-btn">
                <Link to="/"><a className="e-btn e-btn-7 w-100">Daftar <i><FontAwesomeIcon icon={['fas', 'arrow-right']} /></i></a></Link>
            </div> */}

            <div className="course__video-content mb-35 mt-20">
              {/* <h5 className="fw-bolder mb-4">Keuntungan</h5> */}
              <ul>
                <li className="d-flex align-items-center">
                  <div className="course__video-icon">
                    <i>
                      <FontAwesomeIcon icon="fa-solid fa-users" />
                    </i>
                  </div>
                  <div className="course__video-info">
                    <h5>
                      <span>Mengikuti : </span>
                      {props.freeCourseDetails
                        ? props.freeCourseDetails.jml_pengguna
                        : "14"}
                    </h5>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="course__video-icon">
                    <i>
                      <FontAwesomeIcon icon="fa-solid fa-infinity" />
                    </i>
                  </div>
                  <div className="course__video-info">
                    <h5>
                      <span>Akses kursus selamanya</span>
                    </h5>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="course__video-icon">
                    <i>
                      <FontAwesomeIcon icon="fa-solid fa-file-circle-check" />
                    </i>
                  </div>
                  <div className="course__video-info">
                    <h5>
                      <span>Sertifikat </span>
                    </h5>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="course__video-icon">
                    <i>
                      <FontAwesomeIcon icon={["fas", "book"]} />
                    </i>
                  </div>
                  <div className="course__video-info">
                    <h5>
                      <span>Jumlah Silabus :</span>
                      {props.freeCourseDetails
                        ? props.freeCourseDetails.silabus
                        : "14"}
                    </h5>
                  </div>
                </li>

                <li className="d-flex align-items-center">
                  <div className="course__video-icon">
                    <i>
                      <FontAwesomeIcon icon="fa-solid fa-layer-group" />
                    </i>
                  </div>
                  <div className="course__video-info">
                    <h5>
                      <span>Tingkat :</span> Semua tingkat
                    </h5>
                  </div>
                </li>
                {/* <li className="d-flex align-items-center">
                  <div className="course__video-icon">
                    <i>
                      <FontAwesomeIcon icon={["fas", "globe"]} />
                    </i>
                  </div>
                  <div className="course__video-info">
                    <h5>
                      <span>Bahasa :</span>Indonesia
                    </h5>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CourseDetailsSidebar;
