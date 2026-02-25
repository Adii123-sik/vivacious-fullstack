import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import starIcon from "../../images/star-icon.png";
import { getServices } from "../../utils/api";

/* CATEGORY → ICON COLOR CLASS MAP */
const iconClassByCategory = (category = "") => {
  switch (category.toLowerCase()) {
    case "growth":
      return "vv-card__icon--social";
    case "design":
      return "vv-card__icon--web";
    case "seo":
      return "vv-card__icon--seo";
    case "ui/ux":
      return "vv-card__icon--app";
    case "local":
      return "vv-card__icon--local";
    case "marketing":
      return "vv-card__icon--sms";
    case "infrastructure":
      return "vv-card__icon--hosting";
    case "automation":
      return "vv-card__icon--email";
    case "roi":
      return "vv-card__icon--affiliate";
    default:
      return "vv-card__icon--default";
  }
};

const ServicesOne = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getServices();
      setServices(data || []);
    };
    load();
  }, []);

  return (
    <section className="solutions-area pb-30 pt-5 pt-100 vv-services">
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
          {services.slice(0, 6).map((service) => (
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
                    to={`/services/${service.slug}`}

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

export default ServicesOne;
