import React, { useState } from "react";
import Search from "../../Elements/Search";
import MyCertificationPurchaseHistory from "../../MyCertification/MyCertificationPurchaseHistory";
import MyCoursePurchaseHistory from "./MyCoursePurchaseHistory";
import SelectPurchaseStatus from "./SelectPurchaseStatus";
import SelectPurchaseTypes from "./SelectPurchaseTypes";
import { useSessionStorage } from "react-use";

const PurchaseHistory = () => {
  const [type, setType] = useSessionStorage("typePH", "course");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const typeHandler = (e) => {
    setType(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <SelectPurchaseTypes
              label="Pilih Transaksi"
              value={type}
              selectHandler={typeHandler}
            />
          </div>
          <div className="col-4">
            <Search label="Cari" searchHandler={searchHandler} />
          </div>
          <div className="col-4">
            <SelectPurchaseStatus
              label="Status"
              value={status}
              selectHandler={statusHandler}
            />
          </div>
        </div>
      </div>
      {type === "course" && (
        <MyCoursePurchaseHistory
          search={search}
          status={status}
          category="course"
        />
      )}
      {type === "certification" && (
        <MyCertificationPurchaseHistory search={search} status={status} />
      )}
      {type === "learningPath" && (
        <MyCoursePurchaseHistory
          search={search}
          status={status}
          category="learningPath"
        />
      )}
    </>
  );
};

export default PurchaseHistory;
