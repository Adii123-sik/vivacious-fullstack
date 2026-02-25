import React, { useEffect, useState } from "react";
import { getPricingPlans, getSettings } from "../../utils/api";

const ServicePricing = ({ serviceSlug }) => {
  const [plans, setPlans] = useState([]);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    if (!serviceSlug) return;

    const loadData = async () => {
      try {
        const data = await getPricingPlans();
        const filtered = data.filter(
          (plan) => plan.service_slug === serviceSlug
        );
        setPlans(filtered);

        const settingData = await getSettings();
        setSettings(settingData);
      } catch (err) {
        console.error("SERVICE PRICING ERROR ❌", err);
      }
    };

    loadData();
  }, [serviceSlug]);

  // Clean WhatsApp number
  const formatPhone = (phone) => {
    if (!phone) return "";
    return phone.replace(/\D/g, "");
  };

  return (
    <section className="pricing-area pt-100 pb-70">
      <div className="container">
        <div className="row justify-content-center">

          {plans.map((plan, index) => (
            <div key={plan.id} className="col-lg-4 col-md-6 mb-4">
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
                    .map((feature, i) => (
                      <li key={i}>{feature}</li>
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
            </div>
          ))}

          {!plans.length && (
            <p style={{ textAlign: "center" }}>
              No pricing plans found
            </p>
          )}

        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
