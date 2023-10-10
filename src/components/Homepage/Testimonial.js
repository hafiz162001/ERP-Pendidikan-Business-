import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TestimonialCard from "./TestimonialCard";
import blankProfile from "../../assets/img/blank_profile.png";

const dummyData = {
  testimonials: [
    {
      image: blankProfile,
      name: "M. Octaviano Pratama",
      comment:
        "BISA Busienss memberikan pengalaman bagi pengguna untuk membuat portofolio membangun digital startup",
    },
    {
      image: blankProfile,
      name: "Ir. Wira Satyawan",
      comment:
        " Kurikulum yang diberikan di Bakerspice Up-to-Date dan sesuai dengan trend industri saat ini",
    },
  ],
};

const Testimonial = () => {
  return (
    <section
      className="testimonial__area pt-50 pb-100 bg-light"
      style={{
        backgroundImage: `url(${"assets/img/testimonial/testimonial-bg-yellow.png"})`,
      }}
    >
      <div className="container">
        <div className="col-xxl-12">
          {/* <h1 className='text-center mb-10'>Testimonial</h1> */}
          <div className="testimonial__slider swiper-container">
            <div className="testimonial__slider-inner swiper-wrapper">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                autoplaydisableoninteraction={"false"}
                loop={true}
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
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                navigation={{ clickable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
              >
                {dummyData.testimonials.map((testimonial, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <TestimonialCard
                        image={testimonial.image}
                        name={testimonial.name}
                        comment={testimonial.comment}
                      />
                    </SwiperSlide>
                  );
                })}
                {/* <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
