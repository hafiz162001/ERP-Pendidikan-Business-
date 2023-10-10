import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CourseCard from "../CourseCard";
import useFetchData from "../../../hooks/useFetchData";
import Loading from "../../SideComponents/Loading/Loading";

function CourseRecommendation({ idCourse }) {
  const { data: recommendedCourse, loading: loadingRecommendedCourse } =
    useFetchData(
      "course/get_course_recommendation?rec_id=" + idCourse + "&is_aktif=1"
    );
  if (loadingRecommendedCourse) return <Loading />;
  return (
    <div className="course__slider swiper-container">
      <div className="swiper-wrapper pb-10">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          slidesPerView={3}
          autoplaydisableoninteraction={"false"}
          loop={false}
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            1200: {
              // when window width is >= 992px
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // navigation={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {recommendedCourse?.data?.slice(0, 4).map((data) => {
            const freeCourseList = {
              key: data.id_course,
              nama: data.name,
              harga: data.price,
              silabus: data.number_of_syllabus,
              jml_pengguna: data.number_of_students,
              foto: data.photo,
            };
            return (
              <SwiperSlide key={freeCourseList.key}>
                <CourseCard freeCourseList={freeCourseList} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default CourseRecommendation;
