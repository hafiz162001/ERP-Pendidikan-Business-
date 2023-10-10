import React from "react";
import { photoUrl } from "../../api/baseUrl";
import slicingDescription from "../../utils/slicingDescription";

const dummyData = {
  nama_portofolio: "Tampil.id Website Redesign",
  foto_portofolio:
    "https://gate.bisaai.id/bisa_design_prod/portofolio/media/foto_portofolio/2022-06-06_125005_55055_foto_portofolio.png",
  name: "Victor Gemilang Cahyo Widodo",
  deskripsi_singkat:
    "TAMPIL merupakan platform penyelenggara webinar atau event komunitas dan partner menggunakan layananjadfhkhjkfdshdjfhfdjk",
  jumlah_like: 3,
  nama_kategori_portofolio: "UI/UX",
};

const PortofolioCard = ({ portofolio, isRec = false }) => {
  const dummyData = { ...portofolio };
  return (
    <div
      className={`${isRec ? "" : "card border-0 rounded-3 shadow-sm"}  mb-20`}
    >
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
        <p>
          {dummyData.nama_kategori_portofolio} -{" "}
          <span className="fw-bold">{dummyData.nama_user}</span>
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: slicingDescription(dummyData.deskripsi_singkat, 200),
          }}
        />
        <p>
          <span className="text-danger">❤</span> {dummyData.jumlah_like}{" "}
          menyukai postingan ini
        </p>
      </div>
    </div>
  );
};

export default PortofolioCard;
