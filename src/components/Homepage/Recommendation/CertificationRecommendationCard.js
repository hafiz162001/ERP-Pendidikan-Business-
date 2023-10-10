import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { certificationdetails } from "../../../api/basePath";
import { photoUrl } from "../../../api/baseUrl";
import numberWithCommas from "../../../utils/numberWithCommas";

const dummyData = {
  deskripsi:
    "<p> Siapapun dapat mengambil Professional Certificate ini. Diharapkan setelah mengikuti program ini, anda dapat memahami dasar – dasar Data Science, Eksplorasi Data, Machine Learning, Deep Learning dan kasus Data Science. Soal tersusun atas 40 soal yang terbagi kedalam 4 subbab. Diharapkan anda dapat menjawab dengan benar soal ini guna mendapatkan e-certificate dari Bakerspice Academy (PT Bisa Artifisial Indonesia). Mulai karir Data Science kamu sekarang. Setelah mengikuti sertifikasi ini, kompetensi yang kamu miliki adalah sebagai berikut: </p>\n<ul>\n<li> Statistika dan Probabilitas</li>\n<li> Dasar Pemrograman Python</li>\n<li> Data Mining Algorithm</li>\n<li> Machine Learning </li>\n<li> Deep Learning </li>\n<li> Data Science</li>\n</ul>\n\nUntuk dapat mengikuti sertifikasi ini, anda dapat menyelesaikan semua course yang dibutuhkan.",
  foto: "educloud.jpg",
  foto_partner: "2022-06-09_134557_foto_partner_sertifikasi.png",
  foto_sertifikat: null,
  harga: 100000,
  harga_diskon: 0,
  id_certification: 1,
  id_certification_category: 1,
  id_certification_partner: 1,
  info_singkat:
    "Mulai karir Data Science kamu di bidang Data Science seperti Exploratory Data Analysis, Pemrograman Python, Machine Learning, Deep Learning hingga studi kasus data science. Untuk mengikuti Professional Certificate ini, anda perlu enroll di beberapa course.",
  is_aktif: 1,
  is_diskon: 2,
  jumah_peserta: 0,
  jumlah_rating: 0,
  jumlah_ujian: 4,
  nama: "Data Science Professional Certificate by Bakerspice Educloud - Beginner Level",
  nama_partner: "IAIE",
  rating_sertifikasi: 0.0,
  tipe: 1,
};

const CertificationRecommendationCard = ({ dummyData }) => {
  return (
    <Link to={certificationdetails(dummyData.id_certification)}>
      <div className="course__item white-bg mb-60 shadow-sm fix">
        <div className="course__thumb w-img p-relative fix">
          <img
            src={photoUrl.certificationPhoto + dummyData.foto}
            alt="img not found"
          />
        </div>
        <div className="course__content">
          <h6 className="fw-bolder mt-1">{dummyData.nama}</h6>
          <div className="course__teacher d-flex align-items-center">
            {/* <div className="course__teacher-thumb mr-15">
                    <img src="assets/img/course/teacher/teacher-1.jpg" alt="img not found"/>
                </div> */}
            <h6 className="mb-1">
              Offered by <span className="">{dummyData.nama_partner} </span>
            </h6>
          </div>
          <div className="course__meta d-flex align-items-center justify-content-between">
            <div className="course__rating">
              <span>
                <i>
                  {/* <FontAwesomeIcon icon={["fas", "star"]} /> */}
                  <FontAwesomeIcon icon={["fas", "users"]} />
                </i>
                {/* {props.freeCourseList ? props.freeCourseList.rating : "4.5"}*/}
                ({dummyData.jumah_peserta})
              </span>
            </div>
            {/* <div className="course__lesson">
            <span>
              <i>
                <FontAwesomeIcon icon={["fas", "book"]} />
              </i>
              {dummyData.jumlah_ujian}
            </span>
          </div> */}
          </div>
        </div>
        <div className="course__more d-flex justify-content-between align-items-center">
          <div className="course__status">
            <h6 className="text-danger fw-bolder mt-2">
              Rp. {numberWithCommas(dummyData.harga)}
            </h6>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CertificationRecommendationCard;
