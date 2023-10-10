import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
// import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";

const MyPortofolioEditorCK = ({ handleOnChange, label }) => {
  // const editorConfiguration = {
  //   plugins: [Essentials, Paragraph, Bold, Italic],
  //   toolbar: ["bold", "italic"],
  // };
  return (
    <div className="mb-3">
      {/* <h2>Using CKEditor 5 build in React</h2> */}
      <label className="form-label">{label}</label>
      <CKEditor
        editor={ClassicEditor}
        // config={{
        //   plugins: [Base64UploadAdapter],
        //   toolbar: [],
        // }}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          // console.log("Editor is ready to use!", editor);
        }}
        onChange={handleOnChange}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
      />
    </div>
  );
};

export default MyPortofolioEditorCK;
