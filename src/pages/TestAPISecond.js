import React, { useEffect, useState } from "react";
import Quill from "quill";

import "quill/dist/quill.snow.css";
function TestAPISecond() {
  const [quillState, setQuillState] = useState({
    quill: null,
  });
  useEffect(() => {
    const quill = new Quill("#editor-container", {
      modules: {
        toolbar: [
          ["bold", "italic"],
          ["link", "image"],
        ],
      },
      placeholder: "Copy & paste, or drag an image here...",
      readOnly: false,
      theme: "snow",
    });
    setQuillState({ quill });
  }, []);

  return (
    <div>
      {/* {console.log(quillState.editor)} */}
      TestAPI
      <div id="editor-container" style={{ height: "320px" }}></div>
    </div>
  );
}

export default TestAPISecond;
