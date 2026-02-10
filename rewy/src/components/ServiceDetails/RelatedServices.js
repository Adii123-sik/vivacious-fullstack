import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { getServices } from "../../utils/api";

const RelatedServices = ({ currentServiceId }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then((data) => {
      // ❌ current service hata do
      const filtered = data.filter(
        (s) => String(s.id) !== String(currentServiceId)
      );

      // 👉 sirf 3 dikhao (UI ke liye)
      setServices(filtered.slice(0, 3));
    });
  }, [currentServiceId]);

  if (!services.length) return null;

  return (
    <section className="services-area pt-100 pb-70 bg-f1f8fb">
      <div className="container">
        <div className="section-title">
          <h2>More Services You Might Like</h2>
          <p>
            Explore more digital services from Vivacious Solutions to help your
            business grow online.
          </p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6 col-sm-6"
            >
              <div className="single-services-box">
                <div className="icon">
                  {/* UI SAME rakhne ke liye static icons rotate */}
                  <img
                    src={
                      index === 0
                        ? require("../../images/services/service-icon1.png").default
                        : index === 1
                        ? require("../../images/services/service-icon2.png").default
                        : require("../../images/services/service-icon3.png").default
                    }
                    alt={service.service_name}
                  />
                </div>

                <h3>
                  <Link to={`/services/service-details/${service.id}`}>
                    {service.service_name}
                  </Link>
                </h3>

                <p>{service.service_description}</p>

                <Link
                  to={`/services/service-details/${service.id}`}
                  className="read-more-btn"
                >
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
