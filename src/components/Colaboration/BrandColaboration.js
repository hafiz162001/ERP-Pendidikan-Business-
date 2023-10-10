import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

function BrandColaboration() {
  const Brand = (
    <SwiperSlide>
      <div className="swiper-slide">
        <div className="brand__item">
          <img src="/assets/img/brand/brand-1.png" alt="img not found" />
        </div>
      </div>
    </SwiperSlide>
  );
  return (
    <section className="brand__area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="brand__content text-center">
              <h2 className="brand__title">
                {" "}
                Mitra yang Berkolaborasi Dengan Kami{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="brand__slider swiper-container">
              <div className="swiper-wrapper text-center">
                <Swiper
                  // install Swiper modules
                  spaceBetween={30}
                  slidesPerView={2}
                  autoplaydisableoninteraction={"false"}
                  loop={true}
                  breakpoints={{
                    // when window width is >= 576px
                    450: {
                      slidesPerView: 3,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 4,
                    },
                    1200: {
                      // when window width is >= 992px
                      slidesPerView: 6,
                    },
                  }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                  {Brand}
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="brand__item">
                        <img
                          src="/assets/img/brand/brand-2.png"
                          alt="img not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="brand__item">
                        <img
                          src="/assets/img/brand/brand-3.png"
                          alt="img not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="brand__item">
                        <img
                          src="/assets/img/brand/brand-4.png"
                          alt="img not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="brand__item">
                        <img
                          src="/assets/img/brand/brand-5.png"
                          alt="img not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="brand__item">
                        <img
                          src="/assets/img/brand/brand-6.png"
                          alt="img not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="brand__more text-center">
              <Link to="/about" className="link-btn">
                Lihat semua mitra
                <i>
                  <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                </i>
                <i>
                  <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandColaboration;
