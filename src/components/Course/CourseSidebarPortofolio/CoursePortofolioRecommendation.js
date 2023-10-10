import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CourseCard from "../CourseCard";
import useFetchData from "../../../hooks/useFetchData";
import Loading from "../../SideComponents/Loading/Loading";
// import PortofolioCard from "../Portofolio/PortofolioCard";
import PortofolioRecommendationCard from "./PortofolioRecommendationCard";
import { portofoliodetails } from "../../../api/basePath";

function CoursePortofolioRecommendation({ idCourse }) {
  const { data: recommendedPortofolio, loading: loadingRecommendedPortofolio } =
    useFetchData(
      "portofolio/get_portofolio_landing?limit=4&id_course=" + idCourse
    );
  if (loadingRecommendedPortofolio) return <Loading />;
  return (
    <div className="course__slider swiper-container">
      <div className=" pb-10">
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
          {recommendedPortofolio?.data?.slice(0, 4).map((portofolio) => {
            return (
              <SwiperSlide key={portofolio.id_portofolio}>
                <Link to={portofoliodetails(portofolio.id_portofolio)}>
                  <PortofolioRecommendationCard portofolio={portofolio} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default CoursePortofolioRecommendation;
