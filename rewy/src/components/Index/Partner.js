import React, { useEffect, useState } from "react";
import AOS from "aos";
import { getPartners } from "../../utils/api";

/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import {API_BASE_URL} from "../../config/apiConfig"

import "swiper/css";

const Partner = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    AOS.init({ once: true });

    const loadPartners = async () => {
      try {
        const data = await getPartners();
        if (Array.isArray(data)) {
          // 🔥 DUPLICATE DATA (loop fix)
          setPartners([...data, ...data, ...data]);
        }
      } catch (err) {
        console.error("PARTNER LOAD ERROR ❌", err);
      }
    };

    loadPartners();
  }, []);

  if (!partners.length) return null;

  return (
    <div className="partner-area pt-100 pb-70 bg-f1f8fb">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          loopAdditionalSlides={10}
          speed={800}
          spaceBetween={30}
          autoplay={{
            delay: 1000, // ✅ 1 second
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2, // 📱 mobile
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 6, // 💻 desktop
            },
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={`${partner.id}-${index}`}>
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default Partner;
