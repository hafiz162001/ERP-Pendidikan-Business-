import React, { useState } from "react";
import useFetchDataWithAuth from "../../../hooks/useFetchDataWithAuth";
import Search from "../../Elements/Search";
import Loading from "../../SideComponents/Loading/Loading";
import MyCourseCertificateCard from "./MyCourseCertificateCard";
import SelectCertificateTypes from "./SelectPurchaseTypes";
import { useSessionStorage } from "react-use";
import Pagination from "../../Elements/Pagination";

function MyCourseCertificate() {
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useSessionStorage("mycertificate", 1);

  const { data: myCourse, loading: loadingMyCourse } = useFetchDataWithAuth(
    "academy/get_customer_course?status=2?q=" + search + "&page=" + page
  );
  if (loadingMyCourse) return <Loading />;

  const typeHandler = (e) => {
    setType(e.target.value);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <SelectCertificateTypes
              label="Pilih Sertifikat"
              value={type}
              selectHandler={typeHandler}
            />
          </div>
          {/* <div className="col-4">
            <Search label="Cari" searchHandler={searchHandler} />
          </div> */}
        </div>
      </div>
      {!loadingMyCourse ? (
        myCourse.data.map((data) => {
          return (
            <MyCourseCertificateCard
              key={data.id_customer_course}
              myCourseList={data}
            />
          );
        })
      ) : (
        <Loading />
      )}
      <div className="container">
        <div className="col-12 text-end">
          <Pagination page={page} setPage={setPage} dummyData={myCourse.data} />
        </div>
      </div>
    </>
  );
}

export default MyCourseCertificate;
