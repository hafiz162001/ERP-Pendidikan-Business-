import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortofolioDetailsSidebarShare from "./PortofolioDetailsSidebarShare";
import { photoUrl } from "../../api/baseUrl";
import PortofolioLikeButton from "./PortofolioLikeButton";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import Loading from "../SideComponents/Loading/Loading";
import { useUser } from "../../auth/useUser";
import { Link } from "react-router-dom";
import { basePath } from "../../api/basePath";
import PortofolioDetailsSidebarRecommendation from "./PortofolioDetailsSidebarRecommendation";

const PortofolioDetailsSidebar = ({ dummyData }) => {
  const user = useUser("");

  return (
    <div>
      <div className="card-body bg-white shadow-sm border-0 rounded-3">
        <img
          className="img-fluid img-thumbnail mb-3"
          src={photoUrl.thumbnailPortofolioPhoto + dummyData.foto_portofolio}
          alt="img not found"
        />
        <div className="d-grid gap-4 d-md-block mb-3">
          <a href={dummyData.sosmed_linkedin} className="btn btn-primary me-2">
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
          </a>
          <a href={dummyData.sosmed_instagram} className="btn btn-altdanger">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
        </div>
        <p>
          <span className="text-danger">❤</span> {dummyData.jumlah_like}{" "}
          menyukai postingan ini
        </p>
        <div className="d-grid gap-2 mb-3">
          {!user ? (
            <Link to={basePath.login}>
              <button className="btn btn-altdanger" type="button">
                Suka
              </button>
            </Link>
          ) : (
            <PortofolioLikeButton id={dummyData.id_portofolio} />
          )}
        </div>
        <div className="row">
          <PortofolioDetailsSidebarShare
            nama_portofolio={dummyData.nama_portofolio}
          />
        </div>
        <h6 className="fw-bold">Informasi Course Terkait</h6>
        <h6>Kategori : {dummyData.nama_kategori_portofolio}</h6>
        <h6>Course : {dummyData.nama_course}</h6>
      </div>
      {!user ? (
        <></>
      ) : (
        <PortofolioDetailsSidebarRecommendation id={dummyData.id_portofolio} />
      )}
    </div>
  );
};

export default PortofolioDetailsSidebar;
