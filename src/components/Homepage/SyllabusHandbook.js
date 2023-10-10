import React from "react";
import { additionalUrl } from "../../api/baseUrl";
import SyllabusHandbookImg from "../../assets/img/syllabus_handbook.png";

const SyllabusHandbook = () => {
  return (
    <section className="bg-light pt-100 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <span className="fw-bold">Unduh Silabus</span>
            <h3 className="fw-bold mb-3">
              Unduh Silabus dan Buku Panduan Pelatihan Bakerspice Academy
            </h3>
            <p>
              Baru mulai belajar di Bakerspice Academy? Unduh Silabus lengkap untuk
              setiap pembelajaran di Bakerspice Academy
            </p>
            <a href={additionalUrl.handbook}>
              <button className="btn btn-altdanger">Download</button>
            </a>
          </div>
          <div className="col-6">
            <img
              className="img-fluid"
              src={SyllabusHandbookImg}
              alt="img not found"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyllabusHandbook;
