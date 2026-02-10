import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { getServiceById } from "../../utils/api";
import { API_BASE_URL } from "../../config/apiConfig";
const ServiceDetailsContent = ({ id }) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    if (!id) return;
    getServiceById(id).then(setService);
  }, [id]);

  if (!id) {
    return (
      <div className="services-details-area ptb-100 text-center">
        <h3>Invalid Service</h3>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="services-details-area ptb-100 text-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <section className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-15 col-md-12">

            {/* BANNER IMAGE */}
            {service.service_banner_image && (
              <div className="services-details-image">
                <img
                  src={service.service_banner_image}
                  alt={service.service_name}
                />
              </div>
            )}

            <div className="services-details-desc">

              {/* TITLE */}
              <span className="sub-title">{service.service_name}</span>
              <h3>{service.intro_heading}</h3>
              <p>{service.intro_content}</p>

              {/* INCLUDED SECTION (EXACT SAME UI) */}
              <div className="vv-sm-section">
                <h3 className="vv-sm-title">{service.include_heading}</h3>
                <p className="vv-sm-subtitle">
                  {service.service_description}
                </p>

                {/* 3 CARDS */}
                <div className="row vv-sm-cards">
                  {[1, 2, 3].map((n) =>
                    service[`include_card${n}_heading`] ? (
                      <div key={n} className="col-lg-4 col-md-6">
                        <div className="vv-sm-card">
                          <div className={`vv-sm-card__icon vv-sm-card__icon--blue`}>
                            <i className={service[`include_card${n}_icon`]}></i>
                          </div>
                          <h4 className="vv-sm-card__title">
                            {service[`include_card${n}_heading`]}
                          </h4>
                          <p className="vv-sm-card__text">
                            {service[`include_card${n}_description`]}
                          </p>
                        </div>
                      </div>
                    ) : null
                  )}
                </div>

                {/* DELIVERABLES + HOW WE WORK (INLINE) */}
                <div className="row vv-sm-grid">
                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">
                        Deliverables
                      </h4>
                      <ul className="vv-sm-list">
                        {service.deliverables_content
                          ?.split("\n")
                          .map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">
                        How We Work
                      </h4>
                      <div className="vv-sm-steps">
                        {service.how_we_work_content
                          ?.split("\n")
                          .map((s, i) => (
                            <div key={i} className="vv-sm-step">
                              <span className="vv-sm-step__num">
                                {i + 1}
                              </span>
                              <div>
                                <p>{s}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RESULT */}
                <div className="vv-sm-results">
                  <div className="vv-sm-results__left">
                    <h4>{service.result_expect_heading}</h4>
                    <p>{service.result_expect_content}</p>
                  </div>

                  <div className="vv-sm-results__right">
                    <Link to="/contact" className="vv-sm-results__btn">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>

              {/* INDUSTRIES */}
              <h3>Industries We Serve</h3>
              <div className="row">
                {[1,2,3,4,5,6].map(i =>
                  service[`industry_${i}`] ? (
                    <div key={i} className="col-lg-4 col-sm-6 col-md-6">
                      <div className="single-industries-serve-box">
                        <div className="icon">
                          <i className="flaticon-tracking"></i>
                        </div>
                        {service[`industry_${i}`]}
                      </div>
                    </div>
                  ) : null
                )}
              </div>

              {/* TOOLS */}
              <h3>Tools & Platforms We Use</h3>
              <ul className="technologies-features">
                {[1,2,3,4,5,6].map(i =>
                  service[`tool_${i}`] ? (
                    <li key={i}>
                      <span>{service[`tool_${i}`]}</span>
                    </li>
                  ) : null
                )}
              </ul>

              {/* FINAL RESULT */}
              <h3>Reporting & Results</h3>
              <p>{service.final_result}</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsContent;
