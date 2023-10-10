import { id } from "date-fns/locale";
import React from "react";
import { photoUrl } from "../../../api/baseUrl";
import useFetchDataWithAuth from "../../../hooks/useFetchDataWithAuth";
import Loading from "../../SideComponents/Loading/Loading";
import { saveAs } from "file-saver";

const DownloadCertificate = ({ id }) => {
  const { data: certificate, loading: loadingCertificate } =
    useFetchDataWithAuth("academy/get_my_sertifikat?id_customer_course=" + id);
  if (loadingCertificate) return <Loading />;

  // console.log(certificate?.data[0]);

  const dummyData = certificate?.data[0];

  const image_url =
    photoUrl.certificatePhoto +
    dummyData?.id_course +
    "/" +
    dummyData?.foto_sertifikat;

  const downloadImage = () => {
    saveAs(image_url, dummyData.foto_sertifikat);
  };

  return (
    <>
      {/* <div>{dummyData.foto_sertifikat}</div> */}
      <button onClick={downloadImage} className="btn btn-altdanger">
        Unduh Sertifikat
      </button>
    </>
  );
};

export default DownloadCertificate;
