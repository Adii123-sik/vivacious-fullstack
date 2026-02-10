import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import starIcon from "../../images/star-icon.png";
import "./Pricing.css";
import { getPricingPlans } from "../../utils/api";

/* ✅ GATSBY SAFE SWIPER */
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Navigation]);

const Pricing = () => {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    const loadPricing = async () => {
      try {
        const data = await getPricingPlans();
        setPricing(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("PRICING LOAD ERROR ❌", err);
      }
    };

    loadPricing();
  }, []);

  return (
    <section
      style={{ backgroundColor: "#fff" }}
      className="pricing-area pt-100 pb-70 bg-f4f7fe"
    >
      <div className="container">
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
          <Swiper
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {pricing.map((plan) => (
              <SwiperSlide key={plan.id}>
                <div className="single-pricing-box">
                  <div className="pricing-header">
                    <h3>{plan.plan_name}</h3>
                  </div>

                  <div className="price">
                    <span>{plan.currency || "₹"}</span> {plan.price}
                  </div>

                  <ul className="pricing-features">
                    {plan.features
                      ?.split("\n")
                      .map((f, i) => (
                        <li key={i}>
                          <i className="bx bxs-badge-check"></i> {f}
                        </li>
                      ))}
                  </ul>

                  <div className="btn-box">
                    <Link
                      to={`/pricing/${plan.service_slug}`}
                      className="default-btn"
                    >
                      <i className="flaticon-tick"></i>
                      Select the Plan
                      <span></span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
