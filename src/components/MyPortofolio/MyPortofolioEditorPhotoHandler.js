import React, { useRef } from "react";
import base64Converter from "../../utils/base64Converter";

function MyPortofolioEditorPhotoHandler({
  myImage,
  setMyImage,
  label = "Tambah Foto Project (max 2MB)",
}) {
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
      <div className="row justify-content-center ms-4 me-4">
        <div className="mb-3">
          {!myImage ? (
            <></>
          ) : (
            <img
              src={myImage}
              className="img-fluid rounded mx-auto d-block"
              alt="img not found"
            />
          )}
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
}

export default MyPortofolioEditorPhotoHandler;
