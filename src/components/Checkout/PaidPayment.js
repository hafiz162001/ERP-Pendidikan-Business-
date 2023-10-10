// TODO lanjut pembayaran via coupon.

import axios from "axios";
import React, { useState } from "react";
import Checkbox from "../Elements/Checkbox";
import { serviceCode } from "../../utils/serviceCode";
import { useToken } from "../../auth/useToken";
import { useNavigate } from "react-router-dom";
import ImagePaymentShopeePay from "../../assets/img/payment_shopeepay.png";
import ImagePaymentDana from "../../assets/img/payment_dana.png";
import ImagePaymentLinkAja from "../../assets/img/payment_linkaja.png";
import ImagePaymentBayarind from "../../assets/img/payment_bayarind.png";
import { baseUrl, paymentUrl } from "../../api/baseUrl";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

const PaidPayment = ({
  id_course,
  course_name,
  unique_code,
  total_payment,
  type,
  isUsingCoupon = "No",
}) => {
  const navigate = useNavigate();
  const [token] = useToken("");
  const [payment, setPayment] = useState("");
  const [useCupon, setUseCupon] = useState(false);
  const [couponName, setCouponName] = useState("");
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  let linkCoupon;
  let linkPaid;
  if (type === "Course") {
    linkCoupon = paymentUrl.courseWithCouponOrFree;
    linkPaid = paymentUrl.courseWithPaid;
  } else if (type === "Certification") {
    linkCoupon = paymentUrl.certification;
    linkPaid = paymentUrl.certification;
  } else if (type === "LearningPath") {
    linkCoupon = paymentUrl.learningPath;
  }

  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  const useCuponHandler = () => {
    setUseCupon(!useCupon);
  };

  const nameCouponHandler = (e) => {
    setCouponName(e.target.value);
  };

  let serviceCodeNow;
  if (payment === "DANA") {
    serviceCodeNow = serviceCode.DANA;
  }
  if (payment === "SHOPEEPAY") {
    serviceCodeNow = serviceCode.SHOPEEPAY;
  }
  // if (payment === "LINKAJA") {
  //   serviceCodeNow = serviceCode.LINKAJA;
  // }
  if (payment === "BAYARIND") {
    serviceCodeNow = serviceCode.BAYARIND;
  }
  console.log(serviceCodeNow);

  const payWithCoupon = async (e) => {
    let payload;
    if (type === "Certification") {
      payload = {
        id_certification: id_course,
        coupon: couponName,
        service_code: serviceCodeNow,
        kode_unik_sprint: unique_code,
      };
    } else {
      payload = {
        id_course: id_course,
        coupon: couponName,
      };
    }

    // console.log(payload);
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      };
      const response = await axios.post(linkCoupon, payload, {
        headers: headers,
      });
      if (response.data.status_code === 200) {
        toast.success(
          JSON.stringify(response.data.description) + " Redirecting..."
        );
      }
      // alert(JSON.stringify(response.data.description));
      setTimeout(() => {
        navigate("/myfreecourse", { replace: true });
      }, 1000);
    } catch (e) {
      toast.error("Gagal: " + JSON.stringify(e.response.data.description));
      // alert("Gagal memperbaharui data");
      // console.log(e);
    } finally {
    }
  };

  const handlePaymentAPI = async () => {
    let payload;
    if (type === "Certification") {
      payload = {
        id_certification: id_course,
        service_code: serviceCodeNow,
        kode_unik_sprint: unique_code,
      };
    } else {
      payload = {
        id_course: id_course,
        service_code: serviceCodeNow,
        kode_unik_sprint: unique_code,
      };
    }

    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      };
      const response = await axios.post(linkPaid, payload, {
        headers: headers,
      });
      // alert(JSON.stringify(response.data.description));
      toast.success("Redirecting...");
      window.location.replace(response.data.data[0].redirect_url);
    } catch (e) {
      toast.error("Gagal: " + JSON.stringify(e.response.data.description));
      // alert("Gagal memperbaharui data");
      console.log(e);
    } finally {
    }
  };

  const paymentUsingCupon = (
    <>
      <div className="row g-3">
        <div className="col mb-3">
          <input
            type="text"
            onChange={nameCouponHandler}
            className="form-control"
          />
          {/* <div  class="form-text">Coupon berhasil dipasang</div> */}
        </div>
        {/* <div className='col-auto'>
                <button type="submit" className="btn btn-primary mb-3">Apply</button>
            </div> */}
      </div>
      <form
        onSubmit={handleSubmit(payWithCoupon)}
        className="d-grid gap-2 mt-3"
      >
        <button
          type="submit"
          className="btn btn-altdanger"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <span
              className="spinner-border spinner-border-sm me-1"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          Bayar
        </button>
      </form>
    </>
  );

  const paymentWithBayarind = (
    <>
      <div className="mt-3">
        <img
          className="img-fluid"
          style={{ width: "10rem" }}
          src={ImagePaymentBayarind}
          alt="img not found"
        />
        <h4 className="fw-bold mt-3">Cara Pembayaran</h4>
        <ol className="list-group list-group-numbered">
          <li className="">Pilih pembayaran menggunakan Bayarind</li>
          <li className="">Klik tombol Pilih Pembayaran</li>
          <li className="">
            memasukkan nomor telepon yang berhubungan dengan akun bayarind anda
          </li>
          <li className="">Cek kembali total biaya dan lakukan pembayaran</li>
        </ol>
      </div>
      <div className="">
        <h4 className="fw-bold mt-3">Keterangan</h4>
        Anda akan terdaftar pada kursus {course_name}, silahkan lakukan
        pembayaran dengan nominal Rp.{total_payment} melalui Bayarind
      </div>
      <form onSubmit={handleSubmit(handlePaymentAPI)}>
        <div className="d-grid gap-2 mt-3">
          <button
            type="submit"
            className="btn btn-altdanger"
            disabled={isSubmitting}
          >
            Bayar
            {isSubmitting && (
              <span
                className="spinner-border spinner-border-sm me-1"
                role="status"
                aria-hidden="true"
              ></span>
            )}
          </button>
        </div>
      </form>
    </>
  );

  const paymentWithDana = (
    <>
      <div className="mt-3">
        <img
          className="img-fluid"
          style={{ width: "10rem" }}
          src={ImagePaymentDana}
          alt="img not found"
        />
        <h4 className="fw-bold mt-3">Cara Pembayaran</h4>
        <ol className="list-group list-group-numbered">
          <li className="">Pilih pembayaran menggunakan Dana</li>
          <li className="">Klik tombi Pilih Pembayaran</li>
          <li className="">
            memasukkan nomor telepon yang berhubungan dengan akun Dana anda
          </li>
          <li className="">Cek kembali total biaya dan lakukan pembayaran</li>
        </ol>
      </div>
      <div className="">
        <h4 className="fw-bold mt-3">Keterangan</h4>
        Anda akan terdaftar pada kursus {course_name}, silahkan lakukan
        pembayaran dengan nominal Rp.{total_payment} melalui Dana
      </div>
      <form onSubmit={handleSubmit(handlePaymentAPI)}>
        <div className="d-grid gap-2 mt-3">
          <button
            type="submit"
            className="btn btn-altdanger"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <span
                className="spinner-border spinner-border-sm me-1"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Bayar
          </button>
        </div>
      </form>
    </>
  );

  const paymentWithLinkAja = (
    <>
      <div className="mt-3">
        <img
          className="img-fluid"
          style={{ width: "10rem" }}
          src={ImagePaymentLinkAja}
          alt="img not found"
        />
        <h4 className="fw-bold mt-3">Cara Pembayaran</h4>
        <ol className="list-group list-group-numbered">
          <li className="">Pilih pembayaran menggunakan Link Aja</li>
          <li className="">Klik tombol Pilih Pembayaran</li>
          <li className="">
            memasukkan nomor telepon yang berhubungan dengan akun Link Aja anda
          </li>
          <li className="">Cek kembali total biaya dan lakukan pembayaran</li>
        </ol>
      </div>
      <div className="">
        <h4 className="fw-bold mt-3">Keterangan</h4>
        Anda akan terdaftar pada kursus {course_name}, silahkan lakukan
        pembayaran dengan nominal Rp.{total_payment} melalui Bayarind
      </div>
      <form onSubmit={handleSubmit(handlePaymentAPI)}>
        <div className="d-grid gap-2 mt-3">
          <button
            type="submit"
            className="btn btn-altdanger"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <span
                className="spinner-border spinner-border-sm me-1"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Bayar
          </button>
        </div>
      </form>
    </>
  );

  const paymentWithShopeePay = (
    <>
      <div className="mt-3">
        <img
          className="img-fluid"
          style={{ width: "10rem" }}
          src={ImagePaymentShopeePay}
          alt="img not found"
        />
        <h4 className="fw-bold mt-3">Cara Pembayaran</h4>
        <ol className="list-group list-group-numbered">
          <li className="">Pilih pembayaran menggunakan Shopee Pay</li>
          <li className="">Klik tombol Pilih Pembayaran</li>
          <li className="">
            memasukkan nomor telepon yang berhubungan dengan akun Shopee Pay
            anda
          </li>
          <li className="">Cek kembali total biaya dan lakukan pembayaran</li>
        </ol>
      </div>
      <div className="">
        <h4 className="fw-bold mt-3">Keterangan</h4>
        Anda akan terdaftar pada kursus{course_name}, silahkan lakukan
        pembayaran dengan nominal Rp.{total_payment} melalui Shopee Pay
      </div>
      <form onSubmit={handleSubmit(handlePaymentAPI)}>
        <div className="d-grid gap-2 mt-3">
          <button
            type="submit"
            className="btn btn-altdanger"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <span
                className="spinner-border spinner-border-sm me-1"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Bayar
          </button>
        </div>
      </form>
    </>
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
      <div className="mb-2 mt-3">
        {isUsingCoupon === "Yes" ? (
          <Checkbox
            label="Gunakan Kupon"
            value={useCupon}
            onChange={useCuponHandler}
          />
        ) : (
          <></>
        )}
      </div>
      {useCupon ? (
        paymentUsingCupon
      ) : (
        <>
          <div className="mt-2">
            <label className="from-label mb-2">Pembayaran via</label>
            <select
              value={payment}
              onChange={handlePayment}
              className="form-select"
              // defaultValue={"Open this select menu"}
            >
              <option selected> Lihat list pembayaran </option>
              <option value="DANA">DANA</option>
              <option value="SHOPEEPAY">Shopee Pay</option>
              <option value="BAYARIND">Bayarind</option>
              {/* <option value="LINKAJA">Link Aja</option> */}
            </select>
          </div>
          {payment === "BAYARIND" && paymentWithBayarind}
          {payment === "DANA" && paymentWithDana}
          {payment === "SHOPEEPAY" && paymentWithShopeePay}
          {/* {payment === "LINKAJA" && paymentWithLinkAja} */}
        </>
      )}
    </>
  );
};

export default PaidPayment;
