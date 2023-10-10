import React from "react";

const dummyData = [
  {
    type: "course",
    value: "Course Academy",
  },
  {
    type: "certification",
    value: "Certification",
  },
  {
    type: "learningPath",
    value: "Learning Path",
  },
];

const SelectPurchaseTypes = ({ label, value, selectHandler }) => {
  return (
    <div className="mb-3">
      {label ? <label className="form-label">{label}</label> : <></>}
      <select
        value={value}
        className="form-select"
        multiple={false}
        onChange={selectHandler}
      >
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

export default SelectPurchaseTypes;
