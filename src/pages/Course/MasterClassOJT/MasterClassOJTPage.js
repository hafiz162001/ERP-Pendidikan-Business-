import React, { useState, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import CourseSidebar from "../../../components/Course/CourseSidebar";
import Wrapper from "../../../components/Layout/Wrapper";
import CourseSidebarPageFilter from "../../../components/Course/CourseSidebarPageFilter";
import useFetchData from "../../../hooks/useFetchData";
import Searchbox from "../../../components/Elements/Searchbox";
import Loading from "../../../components/SideComponents/Loading/Loading";
import useLocalStorageState from "../../../hooks/useLocalStorageState";
import { baseUrl } from "../../../api/baseUrl";
import axios from "axios";
import { useQuery } from "react-query";
import { useSessionStorage } from "react-use";

function MasterClassOJTPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filtering, setFiltering] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const [page, setPage] = useSessionStorage("mcojt", 1);

  const getData = async () => {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      baseUrl.baseUrl +
        "/course/get_course?is_aktif=1&q=" +
        searchQuery +
        "&tingkat=" +
        filterLevel +
        "&order_by_number_of_student=" +
        filtering +
        "&is_ojt=1&page=" +
        page,
      header
    );
    // assertIsCharacterResponse(data);
    return data;
  };

  const {
    isLoading: loadingFreeCourse,
    isError,
    data: dataFreeCourse,
    error,
    refetch,
  } = useQuery(
    ["masterclassojt", searchQuery, filtering, filterLevel, page],
    getData
  );

  if (isError) {
    return <h1>{error}</h1>;
  }

  const breadcrumbContent = {
    title: "Master Class + On Job Training",
    desc: "",
  };

  return (
    <Wrapper>
      <Breadcrumb content={breadcrumbContent} />
      <section className="course__area pt-20 pb-20 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8 col-lg-8">
              {loadingFreeCourse ? (
                <Loading />
              ) : (
                <CourseSidebar
                  page={page}
                  setPage={setPage}
                  totalData={dataFreeCourse.row_count}
                  freeCourseList={dataFreeCourse.data}
                />
              )}
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4">
              <div className="course__sidebar pl-30">
                <div className="course__sidebar-course bg-light">
                  <Searchbox
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    label="Cari Course"
                  />
                  <CourseSidebarPageFilter
                    setFilterLevel={setFilterLevel}
                    filterLevel={filterLevel}
                    filtering={filtering}
                    setFiltering={setFiltering}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default MasterClassOJTPage;
