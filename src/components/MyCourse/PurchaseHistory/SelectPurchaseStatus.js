import React from "react";

const dummyData = [
  {
    type: 1,
    value: "Belum Bayar",
  },
  {
    type: 2,
    value: "Sudah Bayar",
  },
  {
    type: 3,
    value: "Gagal",
  },
];

const SelectPurchaseStatus = ({ label, value, selectHandler }) => {
  return (
    <div className="mb-3">
      {label ? <label className="form-label">{label}</label> : <></>}
      <select
        value={value}
        className="form-select"
        multiple={false}
        onChange={selectHandler}
      >
        <option value={""}>Semua Status</option>
        {dummyData.map((option, index) => {
          return (
            <option key={index} value={option.type}>
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectPurchaseStatus;
