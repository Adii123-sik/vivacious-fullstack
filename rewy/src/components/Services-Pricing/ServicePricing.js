import React, { useEffect, useState } from "react";
import { getPricingPlans } from "../../utils/api";

const ServicePricing = ({ serviceSlug }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    if (!serviceSlug) return;

    const loadPlans = async () => {
      try {
        const data = await getPricingPlans();

        const filtered = data.filter(
          (plan) => plan.service_slug === serviceSlug
        );

        setPlans(filtered);
      } catch (err) {
        console.error("SERVICE PRICING ERROR ❌", err);
      }
    };

    loadPlans();
  }, [serviceSlug]);

  return (
    <section className="pricing-area pt-100 pb-70 bg-f4f7fe">
      <div className="container">
        <div className="row justify-content-center">
          {plans.map((plan) => (
            <div key={plan.id} className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>{plan.plan_name}</h3>
                </div>

                <div className="price">
                  <span>{plan.currency || "₹"}</span> {plan.price}
                </div>

                <ul className="pricing-features">
                  {plan.features?.split("\n").map((feature, i) => (
                    <li key={i}>
                      <i className="bx bxs-badge-check"></i> {feature}
                    </li>
                  ))}
                </ul>
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
