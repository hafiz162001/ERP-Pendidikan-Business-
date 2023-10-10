import React from "react";

const dummyData = {
  title:
    "Bakerspice Academy menjalankan Program studi Independen Bersertifikat dengan skema sebagai berikut:",
  poins: [
    {
      name: "Pembelajaran Terjadwal",
      description:
        "Peserta mengikuti kegiatan belajar melalui Course yang tersedia di MOOC Bakerspice Academy dan bertatap muka langsung secara online dengan pengajar. Pembelajaran terjadwal akan diampu oleh praktisi dan akademisi. Pembelajaran terjadwal ada yang bersifat WAJIB dan ada yang bersifat PILIHAN.",
    },
    {
      name: "Pembelajaran Mandiri",
      description:
        "Pembelajaran dilakukan di menu Free Course atau Master Class melalui platform Bakerspice Academy. Pembelajaran dibantu oleh instruktur virtual dan Penilaian dilakukan secara otomatis dari sistem platform online Bakerspice Academy. Pembelajaran mandiri juga dilakukan untuk mendukung peserta dalam mengambil Sertifikasi Kompetensi sesuai dengan acuan SKKNI di mitra LSP mitra Bakerspice Academy. Pembelajaran Mandiri dapat dilaksanakan selama pelaksanaan Studi Independen Bersertifikat.",
    },
    {
      name: "Pembelajaran Tamu",
      description:
        "Pembelajaran dilakukan dengan mengundang rekan asosiasi, industri mitra dari Bakerspice Academy. Model pembelajaran adalah kuliah umum (general lecturer) setiap 1 minggu 1 kali selama 4 bulan",
    },
    {
      name: "Proyek Independen",
      description:
        "Penyelesaian Project Independen yang dibantu oleh mentor Bakerspice. Setiap peserta akan diberikan proyek independen oleh mentor yang akan diselesaikan dalam jangka waktu 1 bulan.",
    },
    {
      name: "Sertifikasi Kompetensi",
      description:
        "Seluruh peserta didorong untuk mendapatkan Sertifikasi Kompetensi di LSP Mitra Bakerspice Academy yang berkaitan dengan okupansi/kluster dari topik yang diambil pada Studi Independen Bersertifikat. Setiap peserta akan diberikan topik persiapan sertifikasi sebelum melakukan sertifikasi.",
    },
  ],
};

const InfoSIB = () => {
  return (
    <div className="bg-cream-bb">
      <div className="container pt-30 pb-30">
        <h3 className="fw-bold mb-20">{dummyData.title}</h3>
        <ol class="list-group list-group-numbered">
          {dummyData.poins.map((poin) => (
            <li
              key={poin.name}
              class="list-group-item d-flex justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">{poin.name}</div>
                {poin.description}
              </div>
            </li>
          ))}
        </ol>
        {/* {dummyData.poins.map((poin) => (
          <>
            <p className="fw-bold">{poin.name}</p>
            <p>{poin.description}</p>
          </>
        ))} */}
      </div>
    </div>
  );
};

export default InfoSIB;
