import React from "react";

const dummyData = {
  title: "Portfolio Peserta Mengisi Webinar Sebagai Narasumber",
  description:
    "Mahasiswa Kampus Merdeka MSIB Bakerspice Academy mengisi webinar sebagai narasumber melalui platform TAMPIL.ID untuk berbagai topik bidang AI-Hacker, AI-Hipster dan AI-Hustler. Berikut merupakan list webinar dimana peserta MSIB Bakerspice Academy sebagai narasumber",
  webinars: [
    {
      image:
        "https://gate.bisaai.id/bisa_ai_vcon_v2/event/media/2022-04-07_052210_event.jpg",
      name: "Artificial Intelligence Ecosystem : Peluang, Tantangan Dan Masa Depan",
      offerBy: "Kampus Merdeka",
      type: "Gratis & Sertifikat",
      price: "Gratis",
    },
    {
      image:
        "https://gate.bisaai.id/bisa_ai_vcon_v2/event/media/2022-04-07_052210_event.jpg",
      name: "Artificial Intelligence Ecosystem : Peluang, Tantangan Dan Masa Depan",
      offerBy: "Kampus Merdeka",
      type: "Gratis & Sertifikat",
      price: "Gratis",
    },
  ],
};

const WebinarTampilSection = () => {
  return (
    <div className="bg-light pt-100 pb-100">
      <div className="container">
        <h4 className="fw-bold">{dummyData.title}</h4>
        <p>{dummyData.description}</p>
        <div className="row">
          {dummyData.webinars.map((webinar) => (
            <div className="col-4">
              <div className="card">
                <img src={webinar.image} alt="no image found" />
                <div className="card-body">
                  <h3 className="fw-bold">{webinar.name}</h3>
                  <h5> {webinar.offerBy} </h5>
                  <p> {webinar.type}</p>
                  <p> {webinar.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-10">
            <a href="https://tampil.id/event" className="btn btn-altdanger">
              Lihat lainnya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarTampilSection;
