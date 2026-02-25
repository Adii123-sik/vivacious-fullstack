import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { getServices } from "../../utils/api";

const RelatedServices = ({ currentSlug }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const data = await getServices();

      if (!data) return;

      // ❌ Current service slug remove karo
      const filtered = data.filter(
        (service) => service.slug !== currentSlug
      );

      // 👉 Sirf 3 services show karo
      setServices(filtered.slice(0, 3));
    };

    loadServices();
  }, [currentSlug]);

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
          {services.map((service) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6 col-sm-6"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className={service.service_icon}></i>
                </div>

                <h3>
                  <Link to={`/services/${service.slug}`}>
                    {service.service_name}
                  </Link>
                </h3>

                <p>{service.service_description}</p>

                <Link
                  to={`/services/${service.slug}`}
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
