import React from "react";
import { useFetchPortofolioCategory } from "../../api/portofolio";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../SideComponents/Loading/Loading";

const SelectPortofolioCategory = ({ label, value, selectHandler }) => {
  // const { data: kategoriPortofolio, loading: loadingKategoriPortofolio } =
  //   useFetchData("portofolio/get_kategori_portofolio");

  const {
    isLoading: loadingKategoriPortofolio,
    isError,
    data: kategoriPortofolio,
    error,
    refetch,
  } = useFetchPortofolioCategory();

  if (loadingKategoriPortofolio) return <Loading />;

  const options = kategoriPortofolio.data;

  return (
    <div className="mb-3">
      {label ? <label className="form-label">{label}</label> : <></>}
      <select
        value={value}
        className="form-select"
        multiple={false}
        onChange={selectHandler}
      >
        <option value={""}>Semua Kategori</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.id_kategori_portofolio}>
              {option.nama_kategori_portofolio}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectPortofolioCategory;
