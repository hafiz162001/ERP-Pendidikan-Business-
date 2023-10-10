import React from "react";
import "./styles.css";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
