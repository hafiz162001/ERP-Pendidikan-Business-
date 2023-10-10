import React, { useRef } from "react";
import base64Converter from "../../../utils/base64Converter";

const PurchaseHistoryPhotoHandler = ({
  myImage,
  setMyImage,
  label = "Upload Bukti Transaksi",
}) => {
  const formRef = useRef();
  const handleFileUploads = async (e) => {
    const file = e.target.files[0];
    if (!file && !file.name) {
      window.alert("Silahkan pilih file");
      return false;
    }
    if (file.size > 2e6) {
      window.alert("Besar file tidak boleh lebih dari 2MB");
      formRef.current.reset();
      return false;
    }
    if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      window.alert("File yang di upload bukan format gambar");
      formRef.current.reset();
      return false;
    }
    const base64 = await base64Converter(file);
    // console.log(file.name);

    setMyImage(base64);
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="container mb-3">
          <div className="row justify-content-center">
            <div className="col-12">
              {myImage ? (
                <img
                  src={myImage}
                  className="show_photo_transaction"
                  alt="img not found"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <form className="" ref={formRef}>
          <label className="form-label">{label}</label>
          <input
            type="file"
            className="form-control form-control-sm"
            name="myImage"
            accept=".jpeg, .png, .jpg"
            onChange={(e) => handleFileUploads(e)}
          />
        </form>

        {/* <small className="text-muted">
          Format gambar yang dizinkan hanya PNG, JPG dan JPEG dan ukuran gambar
          maksimal 2 MB{" "}
        </small> */}
      </div>
    </div>
  );
};

export default PurchaseHistoryPhotoHandler;
