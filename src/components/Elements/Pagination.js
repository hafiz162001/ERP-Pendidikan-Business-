import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pagination = ({ page, setPage, dummyData }) => {
  return (
    <div>
      <span>Page: {page}</span>
      <button
        className="btn btn-sm btn-altwarning ml-10"
        disabled={page <= 1}
        onClick={() => setPage((p) => p - 1)}
      >
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
      </button>
      <button
        className="btn btn-sm btn-altwarning ml-10"
        disabled={dummyData.length < 10}
        onClick={() => setPage((p) => p + 1)}
      >
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
      </button>
    </div>
  );
};

export default Pagination;
