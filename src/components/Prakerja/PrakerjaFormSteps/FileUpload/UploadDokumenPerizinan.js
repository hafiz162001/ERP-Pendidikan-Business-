import React, { useEffect, useState } from "react";
import "./styles.css";

import Dropzone from "react-dropzone";

function UploadDokumenPerizinan() {
  const [fileNames, setFileNames] = useState([]);
  const [file, setFile] = useState({ images: null });

  const handleDrop = (acceptedFiles) => {
    setFileNames(acceptedFiles.map((file) => file.name));
  };
  return (
    <div className="">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UploadDokumenPerizinan;
