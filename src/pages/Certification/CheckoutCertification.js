import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useToken } from "../../auth/useToken";
import PaidPayment from "../../components/Checkout/PaidPayment";
import Wrapper from "../../components/Layout/Wrapper";
import randomNumberGenerator from "../../utils/randomNumberGenerator";
import { baseUrl, photoUrl } from "../../api/baseUrl";
import useFetchData from "../../hooks/useFetchData";
import numberWithCommas from "../../utils/numberWithCommas";
import { number } from "prop-types";
import Loading from "../../components/SideComponents/Loading/Loading";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

// const dummyData = {
//   nama: "Pelatihan + Sertifikasi Internasional Internet of Things Specialist for Business Professionals Association (IOTBIZ)",
//   info_singkat:
//     "Program ini merupakan program pelatihan dan sertifikasi kompetensi tingkat internasional. Dimana anda akan mengikuti pelatihan selama 3 hari penuh secara online langsung dengan instruktur, kemudian anda akan mengikuti Ujian Try Out selama 1 hari dan Ujian International Certification Internet of Things Specialist for Business Professionals Association (IOTBIZ).",
//   deskripsi:
//     "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32",
//   harga: 20000,
//   nama_partner: "Bisa Business Academy",
// };

const CheckoutCertification = () => {
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken();

  const { data: certificationData, loading: loadingCertificationData } =
    useFetchData(
      "certification/get_certification?is_aktif=1&id_certification=" + id
    );

  if (loadingCertificationData) return <Loading />;

  const dummyData = certificationData?.data[0];

  const from = location.state?.from?.pathname || "/myfreecourse";

  const unique_code = randomNumberGenerator(100, 999);

  const insertCourseFree = async () => {
    const url =
      baseUrl.baseUrl + "/certification/insert_customer_certification";
    const payload = {
      id_certification: id,
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
      // setSubmitting(false);
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
      <div className="bg-light pt-120">
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
        <div className="container"></div>
        <div className="container pt-120">
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
                    src={photoUrl.certificationPhoto + dummyData.foto}
                    alt="img not found"
                  />
                  <h4 className="fw-bold mt-3">{dummyData.nama}</h4>
                  <h5 className="">
                    {dummyData.harga === 0
                      ? "Gratis"
                      : "Rp. " + numberWithCommas(dummyData.harga)}
                  </h5>
                  <h6 className="fw-light mt-3">
                    Offered by{" "}
                    <span className="fw-bolder">{dummyData.nama_partner}</span>
                  </h6>
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
                      <h6>Kupon</h6>
                      <h6 className="fw-bold">Harga Total</h6>
                    </div>
                    <div className="col text-end">
                      <h6>Rp. {numberWithCommas(dummyData.harga)}</h6>
                      <h6>Rp. {numberWithCommas(unique_code)}</h6>
                      <h6>Rp. {numberWithCommas(disc)}</h6>
                      <h6 className="fw-bold">
                        Rp.
                        {numberWithCommas(dummyData.harga - disc + unique_code)}
                      </h6>
                    </div>
                  </div>
                  {dummyData.harga === 0 ? (
                    freePay
                  ) : (
                    <PaidPayment
                      id_course={id}
                      course_name={dummyData.nama}
                      unique_code={unique_code}
                      total_payment={dummyData.harga - disc + unique_code}
                      type="Certification"
                      isUsingCoupon="No"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CheckoutCertification;
