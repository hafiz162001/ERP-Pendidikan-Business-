import React from "react";
import useFetchData from "../../hooks/useFetchData";

const SelectPortofolioStatus = ({ label, value, selectHandler }) => {
  const options = [
    {
      type: "like_desc",
      name: "Terpopuler",
    },
    {
      type: "id_desc",
      name: "Terbaru",
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
        <option value={""}>Pilih Status</option>
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

export default SelectPortofolioStatus;
