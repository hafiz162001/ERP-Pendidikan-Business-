import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { additionalUrl, videoUrl } from "../../api/baseUrl";

function VideoIntro() {
  return (
    <section className="testimonial__area pt-145 pb-150 bg-cream-bb">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
            <div className="testimonial__slider-3">
              <h3 className="testimonial__title">
                Belajar Melalui{" "}
                <span className="link-red-bb">Bakerspice</span>
              </h3>
              <div className="testimonial__slider-wrapper swiper-container testimonial-text mb-35">
                <div className="testimonial__item-3">
                  <p>
                    Bakerspice Academy hadir sebagai solusi belajar online
                    Anda. Tersedia banyak bidang pembelajaran. Sebelum memulai,
                    simak terlebih dahulu video tutorial di samping!
                  </p>
                  <div className="d-flex">
                    {/* <li>
                              {" "}
                              <img
                                className="videointro-image"
                                src="/assets/img/homepage/appstore.png"
                              ></img>
                            </li> */}
                    <span>
                      <a href={additionalUrl.playStore}>
                        <img
                          className="videointro-image"
                          src="/assets/img/homepage/playstore.png"
                          alt="img not found"
                        />
                      </a>
                    </span>
                  </div>
                </div>
                {/* <div className="swiper-wrapper">
                  <Swiper
                    // install Swiper modules
                    modules={[
                      Navigation,
                      Pagination,
                      Scrollbar,
                      A11y,
                      Autoplay,
                    ]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplaydisableoninteraction={"false"}
                    autoplay={true}
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
                    // navigation={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial__item-3">
                          <p>
                            Bakerspice Academy hadir sebagai solusi belajar online
                            Anda. Tersedia banyak bidang pembelajaran. Sebelum
                            memulai, simak terlebih dahulu video tutorial di
                            samping!
                          </p>
                          <div className="d-flex">
                            {/* <li>
                              {" "}
                              <img
                                className="videointro-image"
                                src="/assets/img/homepage/appstore.png"
                              ></img>
                            </li> */}
                {/* <li>
                              <a href={additionalUrl.playStore}>
                                <img
                                  className="videointro-image"
                                  src="/assets/img/homepage/playstore.png"
                                  alt="img not found"
                                />
                              </a>
                            </li>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
            <div className="testimonial__video ml-70 fix">
              <div className="testimonial__thumb-3">
                <iframe
                  src={videoUrl.videoIntroHomepage}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoIntro;
