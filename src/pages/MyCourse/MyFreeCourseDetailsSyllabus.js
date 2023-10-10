import React from "react";
import MyMCOJTSyllabusCard from "../../components/MyCourse/MasterClassOJT/MyMCOJTSyllabusCard";
import MyFreeCourseDetailsSyllabusCard from "../../components/MyCourse/MyFreeCourseDetailsSyllabusCard";
import Loading from "../../components/SideComponents/Loading/Loading";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";

function MyFreeCourseDetailsSyllabus({ id, isOJT }) {
  let totalCompletedSyllabus = 0;
  let statusTask = true;
  const { data: courseSyllabus, loading: loadingCourseSyllabus } =
    useFetchDataWithAuth(
      "/academy/get_customer_syllabus?is_list=2&id_customer_course=" + id
    );
  if (loadingCourseSyllabus) return <Loading />;
  return (
    <>
      {loadingCourseSyllabus ? (
        <Loading />
      ) : (
        courseSyllabus.data.map((data, index) => {
          if (data.status !== 2) {
            statusTask = false;
          } else {
            totalCompletedSyllabus = totalCompletedSyllabus + 1;
          }
          return (
            <div key={data.id_syllabus}>
              {isOJT ? (
                <MyMCOJTSyllabusCard myCourseSyllabus={data} index={index} />
              ) : (
                <MyFreeCourseDetailsSyllabusCard
                  myCourseSyllabus={data}
                  index={index}
                />
              )}
            </div>
          );
        })
      )}
    </>
  );
}

export default MyFreeCourseDetailsSyllabus;
