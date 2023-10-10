import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination, Navigation } from "swiper";
import { photoUrl } from "../../api/baseUrl";

const PortofolioDetailsSidebarSlideshow = ({
  carousel1,
  carousel2,
  carousel3,
}) => {
  // const dummyData = {
  //   img1: "https://www.kaorinusantara.or.id/wp-content/uploads/2022/03/spyxfamily-trailer.jpg",
  //   img2: "https://akcdn.detik.net.id/community/media/visual/2022/05/17/spy-x-family-2_169.png?w=620",
  //   img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oUbLbFc_rdPYDNJ0RrCDbt7JSGOXiyC2VChfe3vdx-3rALTxk-HpkroYKaFhzAyZ1J4&usqp=CAU",
  // };
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        autoplay={true}
        className="mySwiper"
      >
        {carousel1 && (
          <SwiperSlide>
            <img
              className="img-fluid"
              src={photoUrl.carousellPortofolioPhoto + carousel1}
              alt="img not found"
            />
          </SwiperSlide>
        )}

        {carousel2 && (
          <SwiperSlide>
            <img
              className="img-fluid"
              src={photoUrl.carousellPortofolioPhoto + carousel2}
              alt="img not found"
            />
          </SwiperSlide>
        )}

        {carousel3 && (
          <SwiperSlide>
            <img
              className="img-fluid"
              src={photoUrl.carousellPortofolioPhoto + carousel3}
              alt="img not found"
            />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default PortofolioDetailsSidebarSlideshow;
