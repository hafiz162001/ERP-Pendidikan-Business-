import React from "react";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import { Link } from "react-router-dom";
import { photoUrl } from "../../api/baseUrl";
import Loading from "../SideComponents/Loading/Loading";
import { useSessionStorage } from "react-use";
import Pagination from "../Elements/Pagination";

const dummyData = {
  foto_partner: "2021-12-01_121230_foto_partner_sertifikasi.png",
  foto_sertifikasi: "2022-01-16_223624_foto_partner_sertifikasi.png",
  foto_sertifikat: null,
  id_certification: 6,
  id_certification_category: 1,
  id_certification_partner: 1,
  id_customer: 149,
  id_customer_certification: 3,
  is_aktif: 1,
  jumlah_ujian: 0,
  kode_sertifikat: null,
  kode_ujian: null,
  nama_sertifikasi:
    "Pelatihan + International Certification Autodesk Certified User AutoCAD (ACU AutoCAD)",
  nama_user: "I Putu Ananta Wijaya",
  nilai_akhir: 0,
  status_certification: 1,
  tipe_sertifikasi: 1,
  waktu_daftar: "Tue, 14 Jun 2022 01:36:26 GMT",
  waktu_selesai: null,
};

const MyCertification = ({ type }) => {
  const [page, setPage] = useSessionStorage("mycertificationhp", 1);
  let link;
  if (type === "National") {
    link = "certification/get_customer_certification?tipe=2&is_aktif=1";
  }
  if (type === "International") {
    link = "certification/get_customer_certification?tipe=1&is_aktif=1";
  }
  if (!type) {
    link = "certification/get_customer_certification";
  }
  const { data: myCertification, loading: loadingMyCertification } =
    useFetchDataWithAuth(link);
  if (loadingMyCertification) return <Loading />;

  return (
    <div className="row g-4 me-1">
      {myCertification?.row_count === 0 ? (
        <h4 className="text-center">Tidak ada sertifikasi yang diikuti</h4>
      ) : (
        <></>
      )}
      {myCertification?.data?.map((dummyData) => (
        <Link
          key={dummyData.id_certification}
          to={"/mycertificationdetails/" + dummyData.id_certification}
        >
          <div className="card rounded-3 h-100 border-0 shadow-sm pb-2">
            <div className="row">
              <div className="col-3">
                <img
                  className="img-fluid rounded-top"
                  src={photoUrl.certificationPhoto + dummyData.foto_sertifikasi}
                  alt="img not found"
                />
              </div>
              <div className="col-9">
                <div className="ms-3 me-3 mb-2">
                  <h5 className="fw-bold mt-3">{dummyData.nama_sertifikasi}</h5>
                  <div className="row">
                    <div className="col-2">
                      <img
                        className="img-fluid rounded-top"
                        src={
                          photoUrl.certificationPartnerPhoto +
                          dummyData.foto_partner
                        }
                        alt="img not found"
                      />
                    </div>
                    <div className="col-9">
                      {/* <h6 className="fw-light">
                        <div>Offered by</div>
                        <Link
                          to="/instructor-details"
                          className="fw-bolder text-reset"
                        >
                          {dummyData.nama_partner}
                        </Link>
                      </h6> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-6 text-start">
            Total {myCertification.row_count} data
          </div>
          <div className="col-6 text-end">
            <Pagination
              page={page}
              setPage={setPage}
              dummyData={myCertification.data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCertification;
