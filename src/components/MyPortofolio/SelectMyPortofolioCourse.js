import React from "react";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import Loading from "../SideComponents/Loading/Loading";

const SelectMyPortofolioCourse = ({ label, value, selectHandler }) => {
  const { data: coursePortofolio, loading: loadingCoursePortofolio } =
    useFetchDataWithAuth("portofolio/get_list_course_for_insert_portofolio");

  if (loadingCoursePortofolio) return <Loading />;

  const options = coursePortofolio.data;

  return (
    <div className="mb-3">
      {label ? <label className="form-label">{label}</label> : <></>}
      <select
        value={value}
        className="form-select"
        multiple={false}
        onChange={selectHandler}
      >
        <option value={""}>Pilih Course</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.id_customer_course}>
              {option.nama_course}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectMyPortofolioCourse;
