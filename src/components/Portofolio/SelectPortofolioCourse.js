import React from "react";
import { useFetchPortofolioCourse } from "../../api/portofolio";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../SideComponents/Loading/Loading";

const SelectPortofolioCourse = ({ label, value, selectHandler }) => {
  // const { data: coursePortofolio, loading: loadingCoursePortofolio } =
  //   useFetchData("portofolio/get_list_course_for_filtering_landing_portofolio");

  const {
    isLoading: loadingCoursePortofolio,
    isError,
    data: coursePortofolio,
    error,
    refetch,
  } = useFetchPortofolioCourse();

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
        <option value={""}>Semua Course</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.id_course}>
              {option.nama_course} - {option.jumlah_portofolio}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectPortofolioCourse;
