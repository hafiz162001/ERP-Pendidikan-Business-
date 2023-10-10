import React from "react";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../SideComponents/Loading/Loading";

const dummyData = [
  {
    type: "desc",
    value: "Terbaru",
  },
  {
    type: "asc",
    value: "Terlama",
  },
];

const SelectLearningPathCategory = ({ label, value, selectHandler }) => {
  const options = dummyData;
  return (
    <div className="mb-3">
      <select
        value={value}
        className="form-select"
        multiple={false}
        onChange={selectHandler}
      >
        {options.map((option, index) => {
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

export default SelectLearningPathCategory;
