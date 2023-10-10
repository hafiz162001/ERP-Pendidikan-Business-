import React, { useEffect, useRef, useState } from "react";
import base64Converter from "../../../../utils/base64Converter";
import "./styles.css";

const UploadDokumen = ({ file, fileHandler }) => {
  const formRef = useRef();
  const handleFileUploads = async (e) => {
    const file = e.target.files[0];
    if (!file && !file.name) {
      window.alert("Silahkan pilih file");
      return false;
    }
    if (file.size > 10e6) {
      window.alert("Besar file tidak boleh lebih dari 10MB");
      formRef.current.reset();
      return false;
    }
    if (
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    ) {
      window.alert("Format file yang diperbolehkan adalah pdf/doc/docx");
      formRef.current.reset();
      return false;
    }
    const base64 = await base64Converter(file);
    // console.log(file.name);

    fileHandler(base64);
  };

  return (
    <div>
      <div className="row justify-content-center mt-10 mb-20 ">
        {/* <div className="mb-3">
          <img src={myImage} className="img-fluid rounded mx-auto d-block" />
        </div> */}
        <form className="" ref={formRef}>
          {/* <label className="form-label">{label}</label> */}
          <input
            type="file"
            className="form-control"
            name="myFile"
            accept=".pdf, .docx, .doc"
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

export default UploadDokumen;
