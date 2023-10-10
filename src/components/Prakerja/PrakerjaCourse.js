import React from "react";
import CoursePrakerja from "./CoursePrakerja";
import DataStillEmpty from "../SideComponents/StillEmpty/DataStillEmpty";

const dummyData = [
  {
    address: null,
    arranged_by: "Bakerspice Academy",
    class: 1,
    client_name: "BakerSpice",
    description:
      "<p>Dalam era sekarang, semakin ketat persaingan bisnis yang ditekuni oleh tiap- tiap manusia. Oleh karena itu, dengan adanya persaingan bisnis yang semakin memanas ini&nbsp;<br>manusia diharapkan mampu dalam merencanakan, mengorganisasikan, mengarahkan, hingga mengendalikan sumber daya dalam masing- masing organisasinya. &nbsp;Dalam Modul Manajemen Kinerja ini dijelaskan didalamnya terkait bagaimana cara kita dalam mengelola kinerja dalam perusahaan, baik untuk manajer maupun untuk karyawan. Juga dijelaskan materi tentang pengaturan manajemen kinerja yang sesuai dengan kaidahnya.</p>",
    foto_sertif: "2022-05-31_233558_foto_sertifikat.png",
    id_client: 1,
    id_course: 12,
    id_course_location: null,
    id_master_sertifikat: 14,
    info: "<p><strong>Informasi Umum</strong><br>Mempelajari Manajemen Kinerja untuk mengetahui perkembangan suatu bisnis yang akan dilaksanakan. Dijelaskan juga tentang tujuan, manfaat, software, hingga bagaimana pelaporan dalam sistem Manajemen Kinerja ini.&nbsp;<br><br><strong>Target Pembelajaran</strong><br>- Peserta mampu dan menguasai dasar-dasar konsep Manajemen Kinerja<br>- Peserta mampu menyelesaikan soal-soal dasar Manajemen Kinerja<br>- Peserta mampu menyelesaikan studi kasus Manajemen Kinerja<br><br><strong>Spesifikasi</strong><br>- Komputer/laptop<br><br><strong>Fasilitas</strong><br>- Materi (7 modul materi pembelajaran)<br>- E-Certificate<br><br><strong>Kriteria Kelulusan</strong><br>Peserta diwajibkan untuk mengambil kuis dari setiap silabus yang ada di course. Tugas akhir dapat diakses jika peserta telah menyelesaikan kuis di setiap silabus dengan nilai yang memenuhi kriteria ketuntasan minimal (KKM) yaitu 70. Setelah peserta menyelesaikan kuis dan tugas akhir, maka peserta akan mendapatkan sertifikat.<br><br><strong>Skema Penilaian</strong><br>A. Kuis (80%)<br>Soal kuis di setiap silabus terdiri dari soal-soal pilihan ganda yang harus dijawab oleh peserta. Nilai kuis dapat diperoleh jika peserta dapat menyelesaikan kuis di setiap silabus dengan sempurna. Nilai kuis setiap silabus akan diakumulasikan sebanyak 10 %.<br><br>B. Tugas akhir (20%)<br>Tugas akhir terdiri dari satu soal analisis yang diambil dari silabus. Nilai tugas akhir dapat diperoleh jika peserta berhasil menyelesaikan tugas akhir dengan baik.</p>",
    is_aktif: 1,
    is_discount: 2,
    is_ojt: 2,
    lat: null,
    longt: null,
    nama_sertifikat: "Manajemen Kinerja",
    name: "Manajemen Kinerja",
    number_of_students: 27,
    number_of_syllabus: 6,
    photo: "2022-05-31_234112_course.png",
    photo_client: "2022-03-29_224313_foto_client.png",
    point: 20,
    price: 0,
    price_bisaai: 0,
    price_discount: 0,
    price_transcripts: 0,
    rating: 5,
    rating_average: "4.7143",
    task_description:
      "Jelaskan kembali bagaimana cara anda untuk mengolah manajemen kinerja dalam perusahaan yang akan anda jalankan!<br><br>Dengan format:<br>1. Format file berbentuk PDF<br>2. Maksimal ukuran file yaitu 2MB",
    task_punishment: 75,
    task_time: 24,
    template_sertifikat: "2022-05-31_233558_foto_sertifikat.png",
    total_course: 1,
  },
];

function PrakerjaCourse() {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="brand__content text-center">
              <h3 className="fw-bold"> Prakerja Bakerspice </h3>
              <span>
                Berikut beberapa program pelatihan master class on job training
                di Bakerspice Academy yang dapat diakses melalui program prakerja
              </span>
            </div>
          </div>
        </div>
        <section className="course__area pt-10 pb-20">
          <div className="container">
            {dummyData.length === 1 ? (
              <DataStillEmpty />
            ) : (
              <div className="row">
                <div className="col-xxl-9 col-xl-8 col-lg-8">
                  <CoursePrakerja dummyData={dummyData} />
                  {/* <PaginationSection /> */}
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4">
                  <div className="course__sidebar pl-30">
                    {/* <   CourseSidebarPageFilter/> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrakerjaCourse;
