import React from "react";

const dummyData = {
  title: "Tata Cara Pendaftaran MSIB Bakerspice Academy",
  steps: [
    {
      description:
        "Mahasiswa semester 5 keatas dari perguruan tinggi seluruh Indonesia dibawah naungan DIKTI dapat mendaftar program Kampus Merdeka",
    },
    {
      description: "Mekanisme pendaftaran dapat melalui link sebagai berikut:",
    },
    {
      description:
        "Pendaftaran Studi Independen Bersertifikat (SIB) : https://kampusmerdeka.kemdikbud.go.id/program/studi-independen",
    },
    {
      description:
        "Pendaftaran Magang Bersertifikat (MB): https://kampusmerdeka.kemdikbud.go.id/program/magang",
    },
    { description: "Pilih mitra Bakerspice Academy pada kolom pencarian." },
    { description: "Ikuti Proses Seleksi" },
    {
      description:
        "Jika anda diterima, anda akan dihubungi oleh pihak Bakerspice Academy",
    },
  ],
};

const HowToJoin = () => {
  return (
    <div className="bg-light pt-100 pb-100">
      <div className="container">
        <h3 className="fw-bold">{dummyData.title}</h3>
        <ol className="list-group list-group-numbered">
          {dummyData.steps.map((step) => (
            <li
              key={step.description}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                {/* <div class="fw-bold">{step.name}</div> */}
                {step.description}
              </div>
            </li>
          ))}
        </ol>
        {/* <div className="card">
          <ol>
            {dummyData.steps.map((step, index) => (
              <li key={index}>{step.description}</li>
            ))}
          </ol>
        </div> */}
      </div>
    </div>
  );
};

export default HowToJoin;
