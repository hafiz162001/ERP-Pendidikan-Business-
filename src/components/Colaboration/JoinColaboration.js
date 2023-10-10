import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { additionalUrl } from "../../api/baseUrl";

function JoinColaboration() {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row pt-100 pb-100">
          <div className="col-xxl-12">
            <div className="brand__content text-center">
              <h2 className="mb-20"> Mari Berkolaborasi Dengan Kami </h2>
              <Link to="/prakerjaform">
                <button className="btn btn-lg btn-altwarning pl-70 pr-70 pt-10 pb-10 fw-bold mb-100">
                  Daftar Sekarang
                </button>
              </Link>
              <h5 className="mb-20">
                {" "}
                Informasi lebih lanjut dapat mengubungi{" "}
              </h5>
              <a
                className="btn btn-lg btn-success mr-30"
                href={additionalUrl.cp_whatsapp}
              >
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> Whatsapp
              </a>
              <a
                className="btn btn-lg btn-secondary"
                href={additionalUrl.cp_email}
              >
                <FontAwesomeIcon icon="fa-solid fa-envelope" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinColaboration;
