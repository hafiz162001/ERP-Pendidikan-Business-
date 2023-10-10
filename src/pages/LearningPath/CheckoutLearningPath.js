import axios from "axios";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { baseUrl, photoUrl } from "../../api/baseUrl";
import { useToken } from "../../auth/useToken";
import PaidPayment from "../../components/Checkout/PaidPayment";
import Wrapper from "../../components/Layout/Wrapper";
import Loading from "../../components/SideComponents/Loading/Loading";
import useFetchData from "../../hooks/useFetchData";
import randomNumberGenerator from "../../utils/randomNumberGenerator";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

const dummyData = {
  description:
    "loerem impesiun dolor sit amet loerem impesiun dolor sit amet loerem impesiun dolor sit ametloerem impesiun dolor sit amet",
  id_client: 1,
  id_learning_path: 1,
  is_aktif: 1,
  number_of_course: 3,
  name: "Python",
  photo: "2020-06-19_204727_learning_path.png",
  price: 0,
};

const CheckoutLearningPath = () => {
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken();

  const { data: learningPathData, loading: loadingLearningPathData } =
    useFetchData("learning_path/get_learning_path?id_learning_path" + id);

  if (loadingLearningPathData) return <Loading />;

  const dummyData = learningPathData.data[0];

  const from = location.state?.from?.pathname || "/myfreecourse";

  let unique_code = randomNumberGenerator(100, 999);

  const insertCourseFree = async () => {
    const url =
      baseUrl.baseUrl + "/customer_learning_path/insert_customer_learning_path";
    const payload = {
      id_learning_path: id,
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

  if (dummyData.price === 0) {
    unique_code = 0;
  }

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
                    src={photoUrl.learningPathPhoto + dummyData.photo}
                    alt="img not found"
                  />
                  <h4 className="fw-bold mt-3">{dummyData.name}</h4>
                  <h5 className="">
                    {dummyData.price === 0 ? "Gratis" : "Rp." + dummyData.price}
                  </h5>
                  {/* <h6 className="fw-light mt-3">
                    Offered by{" "}
                    <span className="fw-bolder">{dummyData.nama_partner}</span>
                  </h6> */}
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
                      <h6>Rp.{dummyData.price}</h6>
                      <h6>Rp.{unique_code}</h6>
                      <h6>Rp.{disc}</h6>
                      <h6 className="fw-bold">
                        Rp.{dummyData.price - disc + unique_code}
                      </h6>
                    </div>
                  </div>
                  {dummyData.price === 0 ? (
                    freePay
                  ) : (
                    <PaidPayment
                      id_course={id}
                      course_name={dummyData.nama}
                      unique_code={unique_code}
                      total_payment={dummyData.harga - disc + unique_code}
                      type="LearningPath"
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

export default CheckoutLearningPath;
