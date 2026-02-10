import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import starIcon from "../../images/star-icon.png";
import { getServices } from "../../utils/api";

/* CATEGORY → ICON CLASS MAP (same UI colors) */
const iconClassByCategory = (category = "") => {
  switch (category.toLowerCase()) {
    case "growth":
      return "vv-card__icon--social";
    case "design":
      return "vv-card__icon--web";
    case "seo":
      return "vv-card__icon--seo";
    default:
      return "vv-card__icon--social";
  }
};

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServices();

        // ✅ ONLY ID 1,2,3
        const filtered = data.filter(service =>
          [1, 2, 3].includes(Number(service.id))
        );

        setServices(filtered);
      } catch (err) {
        console.error("Failed to load services", err);
      }
    };

    loadServices();
  }, []);

  return (
    <section className="solutions-area pb-70 pt-100 vv-services">
      <div className="container">
        {/* TITLE */}
        <div className="section-title vv-services__title">
          <span className="sub-title">
            <img src={starIcon} alt="star" />
            Our services
          </span>

          <h2>Vivacious: Excellence in Every Service</h2>
          <p>
            Vivacious Solutions delivers end-to-end digital growth—web design,
            SEO, social media, and advertising that turns clicks into customers.
          </p>
        </div>

        {/* SERVICES */}
        <div className="row">
          {services.map(service => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6 col-sm-12"
            >
              <div className="vv-card">
                <div className="vv-card__top">
                  <div
                    className={`vv-card__icon ${iconClassByCategory(
                      service.category
                    )}`}
                  >
                    <i className={service.service_icon}></i>
                  </div>

                  <span className="vv-card__tag">
                    {service.category}
                  </span>
                </div>

                <h3 className="vv-card__title">
                  {service.service_name}
                </h3>

                <p className="vv-card__text">
                  {service.service_description}
                </p>

                <div className="vv-card__actions">
                  <Link
                    to={`/services/service-details/${service.id}/`}
                    className="vv-btn vv-btn--primary"
                  >
                    View Details
                  </Link>

                  <Link
                    to="/services/"
                    className="vv-btn vv-btn--ghost"
                  >
                    All Services
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {!services.length && (
            <div className="col-12 text-center">
              <p>No services found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
