import React, { useState } from "react";
import useFetchDataWithAuth from "../../../hooks/useFetchDataWithAuth";
import Searchbox from "../../Elements/Searchbox";
import Loading from "../../SideComponents/Loading/Loading";
import MyCourseCard from "../MyCourseCard";
import { useSessionStorage } from "react-use";
import Pagination from "../../Elements/Pagination";
import SelectCourseStatus from "./SelectCourseStatus";
import Search from "../../Elements/Search";

const MyCourseAcademy = ({ isFree, isOJT }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useSessionStorage("mycourseac", 1);
  const [status, setStatus] = useState("");

  const { data: myCourse, loading: loadingMyCourse } = useFetchDataWithAuth(
    "academy/get_customer_course?q=" +
      searchQuery +
      "&status=" +
      status +
      "&is_free=" +
      isFree +
      "&is_ojt=" +
      isOJT +
      "&page=" +
      page
  );
  if (loadingMyCourse) return <Loading />;

  const statusHandler = (e) => {
    setStatus(e.target.value);
    setPage(1);
  };

  const searchHandler = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <div className="row">
        <div className="col-6">
          <Search searchHandler={searchHandler} placeholder="Cari" />
          {/* <Searchbox
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            label="Cari"
          /> */}
        </div>
        <div className="col-6 mr-3">
          <SelectCourseStatus value={status} selectHandler={statusHandler} />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 me-1">
        {!loadingMyCourse ? (
          myCourse.data.map((data) => {
            return (
              <MyCourseCard key={data.id_customer_course} myCourseList={data} />
            );
          })
        ) : (
          <Loading />
        )}
      </div>
      <div className="container mt-20">
        <div className="row">
          <div className="col-6">Total {myCourse.row_count} data</div>
          <div className="col-6 text-end">
            <Pagination
              page={page}
              setPage={setPage}
              dummyData={myCourse.data}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourseAcademy;
