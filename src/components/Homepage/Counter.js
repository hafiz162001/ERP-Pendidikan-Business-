import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = () => {
  const [isViewCount, setIsViewCount] = useState(false);

  const onVisibilityChange = (isVisible) => {
    // console.log("Element is now %s", isVisible ? "visible" : "hidden");
    if (isVisible) {
      setIsViewCount(!isViewCount);
    }
  };

  const counters = [
    {
      countIcon: <FontAwesomeIcon icon="fa-solid fa-people-group" />,
      countNum: 5000,
      countTitle: "Pengguna Aktif",
    },
    {
      countIcon: <FontAwesomeIcon icon="fa-solid fa-hand-point-up" />,
      countNum: 30,
      countTitle: "Course Academy",
    },
    {
      countIcon: <FontAwesomeIcon icon="fa-solid fa-certificate" />,
      countNum: 10,
      countTitle: "Sertifikasi",
    },
  ];

  return (
    <section className="counter__area pt-100 pb-100 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 offset-xl-3 col-xl-6 offset-xl-3">
            <div className="section__title-wrapper text-center mb-30">
              <h2 className="section__title">Statistik</h2>
              {/* <p>Lihat perkembangan Bakerspice</p> */}
            </div>
          </div>
        </div>
        {counters && (
          <div className="row d-flex justify-content-between">
            {counters.map((counter, num) => (
              <div key={num} className="col-xxl-2 col-xl-2">
                <div className="text-center">
                  <div className="counter__item mb-10">
                    <div className="counter__icon user mb-15 ">
                      {counter.countIcon}
                    </div>
                    <div className="counter__content">
                      <h4>
                        <span className="counter">
                          <VisibilitySensor
                            onChange={onVisibilityChange}
                            offset={{ top: 10 }}
                          >
                            <CountUp
                              start={0}
                              end={!isViewCount ? counter.countNum : 0}
                            />
                          </VisibilitySensor>
                        </span>
                        <span className="plus-icon">+</span>
                      </h4>
                      <p>{counter.countTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Counter;
