import React from "react";

const SelectMyPortofolioStatusAdmin = ({ label, value, selectHandler }) => {
  const options = [
    {
      type: "",
      name: "Semua Status",
    },
    {
      type: 1,
      name: "Menunggu Approval",
    },
    {
      type: 2,
      name: "Approved",
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

export default SelectMyPortofolioStatusAdmin;
