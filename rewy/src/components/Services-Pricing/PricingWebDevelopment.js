import React, { useEffect, useState } from "react";
import { getPricingPlans } from "../../utils/api";

const PricingWebDevelopment = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const data = await getPricingPlans();

        // 🔥 ONLY WEB DEVELOPMENT PLANS
        const filtered = data.filter(
          (p) => p.service_slug === "web-development"
        );

        setPlans(filtered);
      } catch (err) {
        console.error("WEB DEV PRICING ERROR ❌", err);
      }
    };

    loadPlans();
  }, []);

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
                  <span>{plan.currency || "₹"}</span>{" "}
                  {plan.price}
                </div>

                <ul className="pricing-features">
                  {plan.features
                    ?.split("\n")
                    .map((feature, i) => (
                      <li key={i}>
                        <i className="bx bxs-badge-check"></i>{" "}
                        {feature}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}

          {!plans.length && (
            <p style={{ textAlign: "center" }}>
              No Web Development plans found
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingWebDevelopment;
