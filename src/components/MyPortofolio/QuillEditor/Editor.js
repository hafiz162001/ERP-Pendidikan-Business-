import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import SimpleEditorToolbar, {
  simpleFormats,
  simpleModules,
} from "./SimpleEditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

export const Editor = ({ value, setValue, withPhoto = true }) => {
  // const [value, setValue] = React.useState({ value: null });
  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div className="text-editor">
      {withPhoto ? (
        <>
          <EditorToolbar />
          <ReactQuill
            theme="snow"
            value={value}
            onChange={handleChange}
            placeholder={"Write something awesome..."}
            modules={modules}
            formats={formats}
          />
        </>
      ) : (
        <>
          <SimpleEditorToolbar />
          <ReactQuill
            theme="snow"
            value={value}
            onChange={handleChange}
            placeholder={"Write something awesome..."}
            modules={simpleModules}
            formats={simpleFormats}
          />
        </>
      )}
    </div>
  );
};

export default Editor;
