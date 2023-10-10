import axios from "axios";
import React, { useState } from "react";
import { baseUrl, photoUrl } from "../../api/baseUrl";
import numberWithCommas from "../../utils/numberWithCommas";
import redirectUrl from "../../utils/redirectUrl";
import Modal from "react-modal";
import { useToken } from "../../auth/useToken";
import refreshPage from "../../utils/refreshPage";
import PurchaseHistoryPhotoHandler from "../MyCourse/PurchaseHistory/PurchaseHistoryPhotoHandler";
import SelectPurchaseMethod from "../MyCourse/PurchaseHistory/SelectPurchaseMethod";
import base64RemoveMime from "../../utils/base64RemoveMime";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

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

const MyCertificationPurchaseHistoryCard = ({ dummyData }) => {
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

  const submitHandler = async (e) => {
    const payload = {
      id_transaction: dummyData.id_certification_transaction,
      photo: base64RemoveMime(image),
      invoice_number: dummyData.invoice_number,
    };
    // console.log(payload);
    const url =
      baseUrl.baseUrl + "/certification/update_data_certification_transaction";

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
        toast.success("Berhasil");
        setTimeout(() => {
          refreshPage();
        }, 1000);
      }
    } catch (e) {
      toast.error("Gagal: " + JSON.stringify(e.response.data.description));
    } finally {
      // setSubmitting(false);
    }
  };

  const submitHandlerBU = async (e) => {
    const payload = {
      id_transaction: dummyData.id_certification_transaction,
      service_code: paymentMethod,
      invoice_number: dummyData.invoice_number,
    };
    // console.log(payload);
    const url =
      baseUrl.baseUrl + "/certification/update_certification_transaction";

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    };

    try {
      const response = await axios.put(url, payload, header);
      if (response.data.status_code === 200) {
        toast.success("Redirecting...");
        redirectUrl(response.data.data.redirect_url);
      }
    } catch (e) {
      toast.error("Gagal: " + JSON.stringify(e.response.data.description));
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
        {dummyData.photo ? (
          <img
            src={photoUrl.transactionPhoto + dummyData.photo}
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
                    className="btn btn-altdanger"
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
                  className="btn btn-altdanger"
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
        className={`card card-body mb-3 border border-1 ${
          dummyData.status === 2 ? "border-success" : "border-danger"
        }`}
      >
        <div className="row">
          <div className="col-3">
            <h5 className="fw-bold">
              {dummyData.status === 2 && "Transaksi Berhasil"}
              {dummyData.status === 3 && "Transaksi Gagal"}
              {dummyData.status === 1 && "Belum Bayar"}
            </h5>
          </div>
          <div className="col-6">
            <span className="text-muted">
              Invoice No : {dummyData.invoice_number}
            </span>
            <h5 className="fs-5 fw-bold">{dummyData.nama_sertifikasi}</h5>
            {dummyData.status === 2 ? "" : <></>}
            <span className="text-muted">
              Invoice Berlaku sampai : {dummyData.expired_at}
            </span>
            {modal}
            {dummyData.status === 3 || dummyData.status === 1 ? (
              dummyData.photo ? (
                <button onClick={openModal} className="btn btn-altdanger">
                  Lihat Bukti Transfer
                </button>
              ) : (
                <button onClick={openModal} className="btn btn-altdanger">
                  Kirim Bukti Transfer
                </button>
              )
            ) : (
              <></>
            )}
          </div>
          <div className="col-3 text-end">
            <h5>
              {dummyData.total_price === 0
                ? "Gratis"
                : "Rp " + numberWithCommas(dummyData.total_price)}
            </h5>
            {bayarUlang}

            {dummyData.status === 3 || dummyData.status === 1 ? (
              dummyData.status === 2 ? (
                <></>
              ) : (
                <button onClick={openModalBU} className="btn btn-altwarning">
                  Bayar Ulang
                </button>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCertificationPurchaseHistoryCard;
