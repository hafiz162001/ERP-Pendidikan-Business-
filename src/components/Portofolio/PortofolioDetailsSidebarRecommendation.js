import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFetchPortofolioRecommendation } from "../../api/portofolio";
import Loading from "../SideComponents/Loading/Loading";
import PortofolioCard from "./PortofolioCard";

const PortofolioDetailsSidebarRecommendation = ({ id }) => {
  const {
    isLoading: loadingPortofoliosRec,
    isError,
    data: portofoliosRec,
    error,
    refetch,
  } = useFetchPortofolioRecommendation({ id });

  if (isError) return <h1>{error.message}</h1>;
  if (loadingPortofoliosRec) return <Loading />;
  console.log(portofoliosRec);
  return (
    <>
      <div className="card-body bg-white shadow-sm border-0 rounded-3 mt-3">
        <h5 className="fw-bold">Rekomendasi Portofolio</h5>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          slidesPerView={1}
          // autoplaydisableoninteraction={"false"}
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
            },
            1200: {
              // when window width is >= 992px
              slidesPerView: 1,
            },
          }}
          pagination={{ clickable: true }}

          // scrollbar={{ draggable: true }}
          // navigation={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {portofoliosRec.data.slice(0, 3).map((portofolioRec) => {
            return (
              <SwiperSlide key={portofolioRec.id_portofolio}>
                <PortofolioCard
                  key={portofolioRec.id_portofolio}
                  portofolio={portofolioRec}
                  isRec={true}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default PortofolioDetailsSidebarRecommendation;
