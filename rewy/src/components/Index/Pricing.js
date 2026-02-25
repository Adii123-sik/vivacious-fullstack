import React, { useEffect, useState } from "react";
import starIcon from "../../images/star-icon.png";
import { getPricingPlans, getSettings } from "../../utils/api";

/* ✅ GATSBY SAFE SWIPER */
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Navigation]);

const Pricing = () => {
  const [pricing, setPricing] = useState([]);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const plans = await getPricingPlans();
        setPricing(Array.isArray(plans) ? plans : []);

        const settingData = await getSettings();
        setSettings(settingData);
      } catch (err) {
        console.error("❌ ERROR:", err);
      }
    };

    loadData();
  }, []);

  // 🔥 Clean WhatsApp number (remove +, spaces, etc.)
  const formatPhone = (phone) => {
    if (!phone) return "";
    return phone.replace(/\D/g, "");
  };

  return (
    <section className="pricing-area pt-100 pb-30">
      <div className="container" style={{ position: "relative" }}>
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="pricing" />
            Pricing
          </span>
          <h2>Pricing Plans</h2>
          <p>
            Simple and transparent pricing—select a plan that matches your goals
            and start growing today.
          </p>
        </div>

        {pricing.length > 0 ? (
          <>
            <Swiper
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              spaceBetween={24}
              slidesPerGroup={3}   // 👈 ADD THIS
              centeredSlides={false}
              watchOverflow={true}
              breakpoints={{
                0: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 3, slidesPerGroup: 3 },
              }}
            >

              {pricing.map((plan, index) => (
                <SwiperSlide key={plan.id}>
                  <div className={`pricing-card theme-${index % 3}`}>

                    <div className="pricing-top">
                      <h3>{plan.plan_name}</h3>
                    </div>

                    <div className="pricing-price">
                      <div className="price-row">
                        <div className="price-circle">
                          <span>{plan.currency || "₹"}</span>
                          {plan.price}
                        </div>
                        <div className="price-pill">
                          PER PROJECT
                        </div>
                      </div>
                    </div>

                    <ul className="pricing-features">
                      {plan.features
                        ?.split("\n")
                        .filter((f) => f.trim() !== "")
                        .map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                    </ul>

                    <div className="pricing-btn">
                      {settings?.whatsapp_number ? (
                        <a
                          href={`https://wa.me/${formatPhone(
                            settings.whatsapp_number
                          )}?text=${encodeURIComponent(
                            `Hi Vivacious Team, I am interested in your ${plan.plan_name} plan priced at ₹${plan.price}. Please share more details.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Buy Now
                        </a>
                      ) : (
                        <span>Loading...</span>
                      )}
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-prev">&#10094;</div>
            <div className="custom-next">&#10095;</div>
          </>
        ) : (
          <p style={{ textAlign: "center" }}>
            No pricing plans found
          </p>
        )}
      </div>
    </section>
  );
};

export default Pricing;
