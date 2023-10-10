import React, { useState } from "react";
import Modal from "react-modal";
import PurchaseHistoryPhotoHandler from "./PurchaseHistoryPhotoHandler";
import blankImage from "./../../../assets/img/blank_image.jpg";
import { baseUrl, photoUrl } from "../../../api/baseUrl";
import axios from "axios";
import { useToken } from "../../../auth/useToken";
import refreshPage from "../../../utils/refreshPage";
import SelectPurchaseMethod from "./SelectPurchaseMethod";
import numberWithCommas from "../../../utils/numberWithCommas";
import { serviceCode } from "../../../utils/serviceCode";
import redirectUrl from "../../../utils/redirectUrl";
import { useForm } from "react-hook-form";

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
    zIndex: "1000",
  },
};

Modal.setAppElement("#root");

function MyCoursePurchaseHistoryCard(props) {
  let urlBayarUlang;
  let urlBuktiTransaksi;

  let subtitle;
  const [image, setImage] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenBU, setIsOpenBU] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const [token] = useToken();

  const paymentMethodHandler = (e) => {
    setPaymentMethod(e.target.value);
  };

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

  function openModalBU() {
    setIsOpenBU(true);
  }

  function closeModalBU() {
    setIsOpenBU(false);
  }

  if (props.type === "Course") {
    urlBayarUlang = "/transaction/update_transaction_sprint";
    urlBuktiTransaksi = "/transaction/update_transaction";
  }

  if (props.type === "LearningPath") {
    urlBayarUlang = "";
    urlBuktiTransaksi = "";
  }

  const submitHandler = async () => {
    // e.preventDefault();
    const url = baseUrl.baseUrl + urlBuktiTransaksi;
    const payload = {
      id_transaction: props.myTransaction.id_transaction,
      photo: image.replace(/^data:image\/[a-z]+;base64,/, ""),
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
        alert("Berhasil");
        refreshPage();
      }
    } catch (e) {
      // toast.error("Gagal: " + JSON.stringify(e.response.data.description));
      console.log(e.response);
    } finally {
      // setSubmitting(false);
    }
  };

  const submitHandlerBU = async () => {
    // e.preventDefault();
    const url = baseUrl.baseUrl + urlBayarUlang;
    const payload = {
      id_transaction: props.myTransaction.id_transaction,
      service_code: paymentMethod,
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
        redirectUrl(response.data.data.redirect_url);
      }
    } catch (e) {
      // toast.error("Gagal: " + JSON.stringify(e.response.data.description));
      // console.log(e.response);
    } finally {
      // setSubmitting(false);
    }
  };

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
          Bukti Transfer
        </h5>
        <button className="btn-close" onClick={closeModal} />
      </div>
      <div className="modal-body">
        {props.myTransaction.photo ? (
          <img
            src={photoUrl.transactionPhoto + props.myTransaction.photo}
            className="show_photo_transaction"
            alt="img not found"
          />
        ) : (
          <>
            <PurchaseHistoryPhotoHandler
              myImage={image}
              setMyImage={setImage}
            />
            <div className="container">
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="row align-items-center">
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
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
  const bayarUlang = (
    <Modal
      isOpen={modalIsOpenBU}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModalBU}
      style={customStyles}
      contentLabel=""
    >
      <div className="modal-header">
        <h5
          className="me-3 modal-title"
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          Ulangi Pembayaran
        </h5>
        <button className="btn-close" onClick={closeModalBU} />
      </div>
      <div className="modal-body">
        <>
          <SelectPurchaseMethod
            value={paymentMethod}
            selectHandler={paymentMethodHandler}
          />
          <div className="container">
            <form onSubmit={handleSubmit(submitHandlerBU)}>
              <div className="row align-items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-altdanger"
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
          </div>
        </>
      </div>
    </Modal>
  );

  return (
    <div className="container">
      <div
        className={`card card-body mb-3 border border-1 ${
          props.myTransaction.status === 2 ? "border-success" : "border-danger"
        }`}
      >
        <div className="row">
          <div className="col-3">
            <h5 className="fw-bold">
              {props.myTransaction.status === 2 && "Transaksi Berhasil"}
              {props.myTransaction.status === 3 && "Transaksi Gagal"}
              {props.myTransaction.status === 1 && "Belum Bayar"}
            </h5>
          </div>
          <div className="col-6">
            <span className="text-muted">
              Invoice No :{" "}
              {props.myTransaction.invoice_number ? (
                <span>-</span>
              ) : (
                <span>props.myTransaction.invoice_number</span>
              )}
            </span>
            <h5 className="fs-5 fw-bold">{props.myTransaction.course_name}</h5>
            <span className="text-muted">
              Invoice Berlaku sampai : {props.myTransaction.expired_at}
            </span>
            {/* {props.myTransaction.status === 2 ? "" : <button className='btn btn-primary'>
                        Unggah bukti transfer
                    </button> } */}
            {modal}
            {props.myTransaction.status === 3 ||
            props.myTransaction.status === 1 ? (
              props.myTransaction.photo ? (
                <button onClick={openModal} className="btn btn-altdanger mt-10">
                  Lihat Bukti Transfer
                </button>
              ) : (
                <button onClick={openModal} className="btn btn-altdanger mt10">
                  Kirim Bukti Transfer
                </button>
              )
            ) : (
              <></>
            )}
          </div>
          <div className="col-3 text-end">
            <h5>
              {props.myTransaction.total_price === 0
                ? "Gratis"
                : "Rp. " + numberWithCommas(props.myTransaction.total_price)}
            </h5>
            {bayarUlang}

            {props.myTransaction.status === 3 ||
            props.myTransaction.status === 1 ? (
              props.myTransaction.status === 2 ? (
                <></>
              ) : (
                <form onSubmit={handleSubmit(openModalBU)}>
                  <button
                    type="submit"
                    className="btn btn-altwarning"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && (
                      <span
                        className="spinner-border spinner-border-sm me-1"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )}
                    Bayar Ulang
                  </button>
                </form>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCoursePurchaseHistoryCard;
