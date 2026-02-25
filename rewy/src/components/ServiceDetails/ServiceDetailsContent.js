import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";

const BASE_URL = `${API_BASE_URL}`;

const ServiceDetailsContent = ({ slug }) => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const loadService = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/api/services/${slug}`
        );
        setService(data);
      } catch (err) {
        console.error("SERVICE DETAILS FETCH ERROR ❌", err);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [slug]);

  /* ================= STATES ================= */

  if (!slug) {
    return (
      <section className="services-details-area ptb-100 text-center">
        <div className="container">
          <h3>Invalid Service URL</h3>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="services-details-area ptb-100">
        <div className="container">
          <p>Loading service...</p>
        </div>
      </section>
    );
  }

  if (!service) {
    return (
      <section className="services-details-area ptb-100">
        <div className="container">
          <p>Service not found</p>
        </div>
      </section>
    );
  }

  /* ================= UI ================= */

  return (
    <section className="vv-service-details">
      <div className="container">

        {/* HERO SECTION */}
        <div className="vv-service-hero">
          <div className="row vv-hero-row">

            {/* LEFT SIDE TEXT */}
            <div className="col-lg-6 vv-hero-content">
              <span className="vv-badge">
                {service.category}
              </span>

              <h1 className="vv-hero-title">
                {service.service_name}
              </h1>

              <div className="vv-hero-long-desc">
                {service.service_description}
              </div>

              <Link to="/contact" className="vv-btn-primary">
                Get Free Consultation
              </Link>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="col-lg-6 vv-hero-image-wrapper">
              <img
                src={service.service_banner_image}
                alt={service.service_name}
                className="vv-hero-img"
              />
            </div>

          </div>
        </div>


        {/* WHAT WE INCLUDE */}
        <div className="vv-section">
          <h2 className="vv-section-title">{service.include_heading}</h2>
          <p className="vv-section-subtitle">
            {service.include_content}
          </p>

          <div className="row">
            {[1, 2, 3].map((n) =>
              service[`include_card${n}_heading`] ? (
                <div key={n} className="col-lg-4 col-md-6">
                  <div className="vv-feature-card">
                    <div className="vv-feature-icon">
                      <i className={service[`include_card${n}_icon`]}></i>
                    </div>
                    <h4>{service[`include_card${n}_heading`]}</h4>
                    <p>{service[`include_card${n}_description`]}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* DELIVERABLES + PROCESS */}
        <div className="vv-section">
          <div className="row">
            <div className="col-lg-6">
              <div className="vv-panel">
                <h3>Deliverables</h3>
                <ul>
                  {service.deliverables_content
                    ?.split("\n")
                    .map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="vv-panel">
                <h3>How We Work</h3>
                {service.how_we_work_content
                  ?.split("\n")
                  .map((step, i) => (
                    <div key={i} className="vv-step">
                      <span>{i + 1}</span>
                      <p>{step}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* RESULTS CTA */}
        <div className="vv-cta-section">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>{service.result_expect_heading}</h3>
              <p>{service.result_expect_content}</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/contact" className="vv-btn-secondary">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );

};

export default ServiceDetailsContent;
