import React from "react";
import useFetchData from "../../hooks/useFetchData";

const SelectTestimonialRating = ({ label, value, selectHandler }) => {
  const options = [
    {
      type: 5,
      name: "Bintang 5",
    },
    {
      type: 4,
      name: "Bintang 4",
    },
    {
      type: 3,
      name: "Bintang 3",
    },
    {
      type: 2,
      name: "Bintang 2",
    },
    {
      type: 1,
      name: "Bintang 1",
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
        <option value={""}>Pilih Rating</option>
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

export default SelectTestimonialRating;
