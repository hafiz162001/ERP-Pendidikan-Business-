import React from "react";
import ReactPlayer from "react-player/youtube";

const Youtube = () => {
  return (
    <div className="bg-light pt-100 pb-100">
      <div className="container">
        <h3 className="fw-bold">Belajar Melalui BISA AI Academy</h3>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=xBMdjpWlo9w"
          playing={false}
          controls={true}
          className="w-100"
        />
      </div>
    </div>
  );
};

export default Youtube;
