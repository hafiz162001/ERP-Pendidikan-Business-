import React from "react";
import useFetchData from "../../hooks/useFetchData";

const SelectTestimonialStatus = ({ label, value, selectHandler }) => {
  const options = [
    {
      type: "waktu_desc",
      name: "Terbaru",
    },
    {
      type: "waktu_asc",
      name: "Terlama",
    },
  ];

  return (
    <div className="mb-3">
      {label ? <label className="form-label">{label}</label> : <></>}
      <select
        value={value}
        className="form-select"
        multiple={false}
        onChange={selectHandler}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option.type}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectTestimonialStatus;
