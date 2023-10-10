import React from "react";
import axios from "axios";
import Wrapper from "../../components/Layout/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { useToken } from "../../auth/useToken";
import PaidPayment from "../../components/Checkout/PaidPayment";
import randomNumberGenerator from "../../utils/randomNumberGenerator";
import { baseUrl, photoUrl } from "../../api/baseUrl";
import Loading from "../../components/SideComponents/Loading/Loading";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

function CheckoutPage() {
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/myfreecourse";

  const { id } = useParams();
  const [token] = useToken();
  const { data: dataCourse, loading: loadingCourse } = useFetchData(
    "course/get_course?id=" + id
  );
  if (loadingCourse) return <Loading />;

  let unique_code = randomNumberGenerator(100, 999);

  if (dataCourse.data[0].price === 0) {
    unique_code = 0;
  }

  const insertCourseFree = async () => {
    const url = baseUrl.baseUrl + "/academy/insert_customer_course";
    const payload = {
      id_course: id,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    };

    try {
      const response = await axios.post(url, payload, header);
      if (response.data.status_code === 200) {
        toast.success("Berhasil membeli course");
      } else {
        toast.error("Gagal membeli");
      }
      setTimeout(() => {
        navigate(from);
      }, 1000);
    } catch (e) {
      toast.error("Gagal: " + JSON.stringify(e.response.data.description));
      // alert(JSON.stringify(response.data.description));
      // console.log(response);
    } finally {
      // toast.success("HAI");
      // setSubmitting(true);
    }
  };

  const freePay = (
    <>
      <form onSubmit={handleSubmit(insertCourseFree)}>
        <div className="d-grid gap-2 mt-3">
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
            Daftar Gratis
          </button>
        </div>
      </form>
    </>
  );

  let disc = 0;

  return (
    <Wrapper>
      <div className="bg-light">
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
          className="heading-mycoursepage pt-120"
          style={{ zIndex: 1, position: "relative" }}
        >
          <div className="container">
            <h2 className="fw-bold">Checkout</h2>
            {/* <span className="d-block p-2 bg-dark text-white pt-50">Pembelajaran Saya</span> */}
          </div>
        </div>
        <div className="container">
          {/* <h2 className='fw-bold'>Checkout</h2> */}
          <div
            className="row mt-20"
            style={{ position: "relative", top: "-160px", zIndex: 2 }}
          >
            <div className="col-4">
              <div className="card border-0 shadow-0 rounded">
                <div className="card-body">
                  <img
                    className="img-fluid rounded"
                    src={photoUrl.coursePhoto + dataCourse.data[0].photo}
                    alt="img not found"
                  />
                  <h4 className="fw-bold mt-3">{dataCourse.data[0].name}</h4>
                  <h5 className="">
                    {dataCourse.data[0].price === 0
                      ? "Gratis"
                      : "Rp." + dataCourse.data[0].price}
                  </h5>
                  <h6 className="fw-light mt-3">
                    Offered by{" "}
                    <span className="fw-bolder">
                      {dataCourse.data[0].arranged_by}
                    </span>
                  </h6>
                  {/* <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__rating">
                      <span>
                        <i>
                          <FontAwesomeIcon icon={["fas", "star"]} />
                        </i>
                        44
                      </span>
                    </div>
                    <div className="course__lesson">
                      <span>
                        <i>
                          <FontAwesomeIcon icon={["fas", "book"]} />
                        </i>
                        {dataCourse.data[0].number_of_syllabus} Lesson
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card border-0 shadow-0 rounded">
                <div className="card-body">
                  <h4 className="fw-bold mb-3">Pembayaran</h4>

                  {/* coupon */}
                  <div className="row">
                    <div className="col">
                      <h6>Harga</h6>
                      <h6>Kode Unik</h6>
                      {/* <h6>Kupon</h6> */}
                      <h6 className="fw-bold">Harga Total</h6>
                    </div>
                    <div className="col text-end">
                      <h6>Rp.{dataCourse.data[0].price}</h6>
                      <h6>Rp.{unique_code}</h6>
                      {/* <h6>Rp.{disc}</h6> */}
                      <h6 className="fw-bold">
                        Rp.{dataCourse.data[0].price - disc + unique_code}
                      </h6>
                    </div>
                  </div>
                  {dataCourse.data[0].price === 0 ? (
                    freePay
                  ) : (
                    <PaidPayment
                      id_course={id}
                      course_name={dataCourse.data[0].name}
                      unique_code={unique_code}
                      total_payment={
                        dataCourse.data[0].price - disc + unique_code
                      }
                      type="Course"
                      isUsingCoupon="Yes"
                    />
                  )}
                </div>
              </div>
              <div className="card border-0 shadow-0 rounded mt-20">
                <div className="card-body">
                  <h4 className="fw-bold mb-3">Informasi Course</h4>
                  <div className="row">
                    <p>
                      {dataCourse ? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: dataCourse.data[0].description,
                          }}
                        ></span>
                      ) : (
                        "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum."
                      )}
                    </p>
                  </div>
                  <div className="row">
                    <div className="col">
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
                              {dataCourse
                                ? dataCourse.data[0].number_of_students
                                : "0"}
                            </h5>
                          </div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="course__video-icon">
                            <i>
                              <FontAwesomeIcon icon={["fas", "home"]} />
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
                      </ul>
                    </div>
                    <div className="col">
                      <ul>
                        <li className="d-flex align-items-center">
                          <div className="course__video-icon">
                            <i>
                              <FontAwesomeIcon icon={["fas", "book"]} />
                            </i>
                          </div>
                          <div className="course__video-info">
                            <h5>
                              <span>Jumlah Silabus :</span>
                              {dataCourse
                                ? dataCourse.data[0].number_of_syllabus
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default CheckoutPage;
