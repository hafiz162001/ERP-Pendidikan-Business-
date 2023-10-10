import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { photoUrl } from "../../api/baseUrl";
import numberWithCommas from "../../utils/numberWithCommas";

// const dummyData = {
//   nama: "Pelatihan + Microsoft International Certification Series – Microsoft Excel",
//   harga: 2500000,
//   info_singkat:
//     "Parenting to help your children develop a healthy brain, self esteem and trust. nurture their talents and bond with them",
//   nama_partner: "Bakerspice Academy",
//   foto: "https://gate.bisaai.id:8080/kelas_koding_prod/certification/media/foto_certification/2021-10-07_212807_foto_sertifikasi.png",
//   foto_partner:
//     "https://gate.bisaai.id/bisa_business_prod/certification/media/foto_partner/2022-01-14_143554_foto_partner_sertifikasi.png",
// };
function CertificationCard({ data: dummyData }) {
  return (
    <div className="white-bg card rounded-3 shadow-sm border-0 mb-30">
      <div className="row align-items-center gx-0">
        <div className="col-xxl-3 col-xl-4 col-lg-4">
          <div className="">
            <img
              className="img-fluid"
              src={photoUrl.certificationPhoto + dummyData.foto}
              alt="img not found"
            />
          </div>
        </div>
        <div className="col-xxl-9 col-xl-8 col-lg-8">
          <div className="course__right">
            <div className="course__content course__content-4">
              <div className="row">
                <h5 className="fw-bolder">{dummyData.nama}</h5>
                <span
                  dangerouslySetInnerHTML={{
                    __html: dummyData.info_singkat.slice(0, 200) + "...",
                  }}
                />
              </div>
              <div className="row">
                <div className="col-auto align-items-center">
                  <img
                    className="img-fluid"
                    src={
                      photoUrl.certificationPartnerPhoto +
                      dummyData.foto_partner
                    }
                    alt="img not found"
                    style={{ height: "3rem" }}
                  />
                </div>
                <div className="col-auto">
                  <span>Offered by </span>
                  <h6>{dummyData.nama_partner}</h6>
                </div>
                <div className="col-auto">
                  <span>Harga </span>
                  <h6>Rp. {numberWithCommas(dummyData.harga)}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationCard;
