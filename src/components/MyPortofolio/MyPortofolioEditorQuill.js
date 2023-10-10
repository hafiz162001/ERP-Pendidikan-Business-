import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize";
Quill.register("modules/ImageResize", ImageResize);

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
  ImageResize: {
    parchment: Quill.import("parchment"),
  },
};

const simpleModules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link"],
    ["clean"],
  ],
};

const MyPortofolioEditorQuill = ({ value, setValue, withPhoto = true }) => {
  // const [value, setValue] = useState("");

  return (
    <>
      {withPhoto ? (
        <div className="mb-60" style={{ height: "500px" }}>
          <ReactQuill
            modules={modules}
            theme="snow"
            value={value}
            onChange={setValue}
            style={{ height: "500px" }}
          />
        </div>
      ) : (
        <ReactQuill
          modules={simpleModules}
          theme="snow"
          value={value}
          onChange={setValue}
        />
      )}
    </>
  );
};

export default MyPortofolioEditorQuill;
