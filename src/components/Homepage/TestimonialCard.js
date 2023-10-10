import React from "react";

function TestimonialCard({ image, name, comment }) {
  return (
    <div className="testimonial__item text-center swiper-slide">
      <div className="testimonial__thumb">
        <img src={image} alt="img not found" />
      </div>
      <div className="testimonial__content mr-10 ml-10">
        <p>{comment}</p>
        <div className="testimonial__info">
          <h4>{name}</h4>
          {/* <span>UX Designer</span> */}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
