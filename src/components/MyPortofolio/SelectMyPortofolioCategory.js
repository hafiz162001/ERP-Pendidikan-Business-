import React from "react";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../SideComponents/Loading/Loading";

const SelectMyPortofolioCategory = ({ label, value, selectHandler }) => {
  const { data: kategoriPortofolio, loading: loadingKategoriPortofolio } =
    useFetchData("portofolio/get_kategori_portofolio");

  if (loadingKategoriPortofolio) return <Loading />;

  const options = kategoriPortofolio?.data;

  return (
    <div className="mb-3">
      {label ? <label className="form-label">{label}</label> : <></>}
      <select
        value={value}
        className="form-select"
        multiple={false}
        onChange={selectHandler}
      >
        <option value={""}>Pilih Kategori</option>
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

export default SelectMyPortofolioCategory;
