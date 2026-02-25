import React, { useEffect, useState } from "react";
import starIcon from "../../images/star-icon.png";
import shape from "../../images/shape/shape1.svg";
import "../../components/Index/Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { getTestimonials } from "../../utils/api";
import { API_BASE_URL } from "../../config/apiConfig";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const data = await getTestimonials();
      setTestimonials(data);
    } catch (err) {
      console.error("Failed to load testimonials", err);
    } finally {
      setLoading(false);
    }
  };

  const Stars = ({ rating = 5 }) => (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading testimonials...</p>;
  }

  return (
    <div className="testimonials-area pt-100 bg-f1f8fb">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="testimonial" />
            Testimonials
          </span>
          <h2>What Our Clients are Saying?</h2>
          <p>
            Our clients’ words reflect our commitment to quality, results, and reliable support.
          </p>
        </div>

        <Swiper
          navigation
          loop
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          className="testimonials-slides"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="single-testimonials-item">
                <div className="client-info-top d-flex align-items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="client-img"
                  />
                  <div className="title">
                    <h3>{t.name}</h3>
                    <span>{t.role}</span>
                  </div>
                </div>

                <Stars rating={t.rating} />

                <p className="feedback-text">{t.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="shape-img1">
        <img src={shape} alt="testimonial" />
      </div>
    </div>
  );
};

export default Testimonials;
