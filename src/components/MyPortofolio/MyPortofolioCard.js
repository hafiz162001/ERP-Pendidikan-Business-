import React from "react";
import { photoUrl } from "../../api/baseUrl";

const dummyData = {
  nama_portofolio: "Tampil.id Website Redesign",
  foto_portofolio:
    "https://gate.bisaai.id/bisa_design_prod/portofolio/media/foto_portofolio/2022-06-06_125005_55055_foto_portofolio.png",
  nama_user: "Victor Gemilang Cahyo Widodo",
  deskripsi_singkat:
    "TAMPIL merupakan platform penyelenggara webinar atau event komunitas dan partner menggunakan layananjadfhkhjkfdshdjfhfdjk",
  jumlah_like: 3,
  nama_course: "UI/UX",
  nama_kategori_portofolio: "Graphic Design",
};
const MyPortofolioCard = ({ portofolio }) => {
  const dummyData = {
    ...portofolio,
  };
  return (
    <div className="card border-0 rounded-3 shadow-sm">
      <div className="course__item fix">
        <div className="course__thumb w-img p-relative fix">
          <img
            src={photoUrl.thumbnailPortofolioPhoto + dummyData.foto_portofolio}
            className="img-fluid rounded-top"
            alt="img not found"
          />
        </div>
      </div>
      <div className="card-body">
        <h5 className="fw-bold">{dummyData.nama_portofolio}</h5>
        <span>Course: {dummyData.nama_course}</span>
        <p>Kategori: {dummyData.nama_kategori_portofolio}</p>
        <div className="">
          {dummyData.status_portofolio === 1 && (
            <span className="badge bg-warning">Menunggu</span>
          )}
          {dummyData.status_portofolio === 2 && (
            <span className="badge bg-success">Aktif</span>
          )}

          {/* <span className="badge bg-danger">Gagal</span> */}
        </div>
      </div>
    </div>
  );
};

export default MyPortofolioCard;
