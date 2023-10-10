import React, { useState, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import CourseSidebar from "../../../components/Course/CourseSidebar";
import Wrapper from "../../../components/Layout/Wrapper";
import CourseSidebarPageFilter from "../../../components/Course/CourseSidebarPageFilter";
import useFetchData from "../../../hooks/useFetchData";
import Searchbox from "../../../components/Elements/Searchbox";
import Loading from "../../../components/SideComponents/Loading/Loading";
import { baseUrl } from "../../../api/baseUrl";
import axios from "axios";
import { useQuery } from "react-query";
import useLocalStorageState from "../../../hooks/useLocalStorageState";
import { useSessionStorage } from "react-use";
import { useFetchFreeCourses } from "../../../api/course";

function FreeCoursePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filtering, setFiltering] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const [page, setPage] = useSessionStorage("freecoursepage", 1);

  const {
    isLoading: loadingFreeCourse,
    isError,
    data: dataFreeCourse,
    error,
    refetch,
  } = useFetchFreeCourses({ searchQuery, filtering, filterLevel, page });

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const breadcrumbContent = {
    title: "Free Course",
    desc: "50+ Course Gratis untuk Memulai Belajar",
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
                <>
                  <CourseSidebar
                    page={page}
                    setPage={setPage}
                    totalData={dataFreeCourse.row_count}
                    freeCourseList={dataFreeCourse.data}
                  />
                </>
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

export default FreeCoursePage;
