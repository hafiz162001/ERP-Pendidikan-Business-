import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bisaaiImg from "../../assets/img/2022/bisaai.png";
import kelaskodingImg from "../../assets/img/2022/kelaskoding.png";
import puskajImg from "../../assets/img/2022/puskaj.png";
import huaweicloudImg from "../../assets/img/2022/huawei_cloud.png";
import kptkImg from "../../assets/img/2022/kptk.jpg";
import aiImg from "../../assets/img/2022/ai_hitam.png";
import brand1 from "../../assets/img/2022/new/brand (1).jpeg";
import brand2 from "../../assets/img/2022/new/brand (2).jpeg";
import brand3 from "../../assets/img/2022/new/brand (3).jpeg";
import brand4 from "../../assets/img/2022/new/brand (4).jpeg";
import brand5 from "../../assets/img/2022/new/brand (5).jpeg";
import brand6 from "../../assets/img/2022/new/brand (6).jpeg";
import brand7 from "../../assets/img/2022/new/brand (7).jpeg";

import { Link } from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "25%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    zIndex: "10",
  },
};

Modal.setAppElement("#root");

const dummyData = {
  // images: [
  //   bisaaiImg,
  //   kelaskodingImg,
  //   puskajImg,
  //   huaweicloudImg,
  //   kptkImg,
  //   aiImg,
  // ],
  images: [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
  ],
};

function BrandSection() {
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <section className="pt-150 pb-110 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="text-center">
              <h5 className="fw-bold mb-40">
                Beberapa Alumni F&B Startup alumni Bakerspice Academy
              </h5>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {dummyData.images.map((image, index) => {
            return (
              <div key={index} className="col-auto">
                <img
                  style={{ height: "8rem", filter: "grayscale(100%)" }}
                  className="img-fluid"
                  src={image}
                  alt="img not found"
                />
              </div>
            );
          })}
        </div>

        {/* <div className="row">
          <div className="col-xxl-12">
            <div className="brand__more text-center">
              <button className="h5 bg-transparent" onClick={openModal}>
                Lihat semua mitra
              </button>
              <i>
                {" "}
                <FontAwesomeIcon icon={["fas", "arrow-right"]} />
              </i>
            </div>
          </div>
        </div> */}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=""
      >
        <div className="container">
          <h5 className="fw-bold text-center pb-3"> List partner</h5>
          <div className="row justify-content-between">
            <div className="col-auto">
              <img src="assets/img/brand/brand-2.png" alt="img not found" />
            </div>
            <div className="col-auto">
              <img src="assets/img/brand/brand-3.png" alt="img not found" />
            </div>

            <div className="col-auto">
              <img src="assets/img/brand/brand-4.png" alt="img not found" />
            </div>

            <div className="col-auto">
              <img src="assets/img/brand/brand-5.png" alt="img not found" />
            </div>

            <div className="col-auto">
              <img src="assets/img/brand/brand-6.png" alt="img not found" />
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default BrandSection;
