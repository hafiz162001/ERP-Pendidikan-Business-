import React from "react";
import { serviceCode } from "../../../utils/serviceCode";

const dummyData = [
  {
    type: serviceCode.BAYARIND,
    value: "BAYARIND",
  },
  {
    type: serviceCode.DANA,
    value: "DANA",
  },
  {
    type: serviceCode.SHOPEEPAY,
    value: "SHOPEEPAY",
  },
];

const SelectPurchaseMethod = ({ label, value, selectHandler }) => {
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

export default SelectPurchaseMethod;
