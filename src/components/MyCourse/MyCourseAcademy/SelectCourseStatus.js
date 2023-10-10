import React from "react";
import useFetchData from "../../../hooks/useFetchData";
import Loading from "../../SideComponents/Loading/Loading";

const dummyData = [
  {
    type: 1,
    value: "Sedang Belajar",
  },
  {
    type: 2,
    value: "Telah Selesai",
  },
];

const SelectCourseStatus = ({ label, value, selectHandler }) => {
  const { data: coursePortofolio, loading: loadingCoursePortofolio } =
    useFetchData("portofolio/get_list_course_for_filtering_landing_portofolio");

  if (loadingCoursePortofolio) return <Loading />;

  const options = dummyData;

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

export default SelectCourseStatus;
