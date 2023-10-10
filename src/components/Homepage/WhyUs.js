import React from "react";

const dummyData = {
  features: [
    {
      image:
        "https://bisa.design/assets/images/Pembelajaran_berbasis_skkni.png",
      title: "Pembelajaran Berbasi SKKNI",
      description:
        "Pembelajaran mengacu pada Standar Kompetensi Kerja Nasional Indonesia (SKKNI) dilengkapi dengan silabus lengkap, kuis setiap silabus dan tugas setiap pertemuan",
    },
    {
      image: "https://bisa.design/assets/images/Portofolio.png",
      title: "Portfolio Industri",
      description:
        "Setiap pembelajaran akan terdapat project industri dimana peserta akan mendapatkan portofolio industri untuk setiap pembelajaran",
    },
    {
      image: "https://bisa.design/assets/images/certificate.png",
      title: "Sertifikat dari Lembaga Kursus Pelatihan",
      description:
        "Setiap peserta yang lulus pada program pelatihan BakerSpice akan mendapatkan Sertifikat dari Lembaga Kursus Pelatihan",
    },
    {
      image:
        "https://bisa.design/assets/images/pembelajaran_bahasa_indonesia.png",
      title: "Portfolio Industri",
      description:
        "Setiap pembelajaran akan terdapat project industri dimana peserta akan mendapatkan portofolio industri untuk setiap pembelajaran",
    },
  ],
};

const WhyUs = () => {
  return (
    <section>
      <div className="bg-light">
        <div className="container pt-100 pb-100">
          <div className="row">
            {dummyData.features.map((feature, index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card-body bg-white border-1 shadow-sm rounded-3 mb-3">
                    <img
                      src={feature.image}
                      className="img-fluid"
                      style={{ height: "4rem" }}
                    />
                    <h5 className="fw-bold">{feature.title}</h5>
                    <p> {feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
