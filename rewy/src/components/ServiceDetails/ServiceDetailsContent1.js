import React from "react"
import { Link } from "gatsby"

const ServiceDetailsContent = ({ service }) => {
  if (!service) return null

  const {
    title,
    subtitle,
    heading,
    intro_text,
    banner_image,
    include_cards = [],
    deliverables = [],
    work_steps = [],
    industries = [],
    tools = [],
    results_text,
  } = service

  return (
    <section className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-15 col-md-12">

            {/* Banner Image */}
            {banner_image && (
              <div className="services-details-image">
                <img src={banner_image} alt={title} />
              </div>
            )}

            <div className="services-details-desc">
              <span className="sub-title">{subtitle}</span>
              <h3>{heading}</h3>

              {intro_text && <p>{intro_text}</p>}

              {/* INCLUDE CARDS */}
              {include_cards.length > 0 && (
                <div className="vv-sm-section">
                  <h3 className="vv-sm-title">
                    What’s Included in Our {title}
                  </h3>

                  <div className="row vv-sm-cards">
                    {include_cards.map((card, index) => (
                      <div key={index} className="col-lg-4 col-md-6">
                        <div className="vv-sm-card">
                          <div className="vv-sm-card__icon">
                            <i className={card.icon}></i>
                          </div>
                          <h4 className="vv-sm-card__title">
                            {card.title}
                          </h4>
                          <p className="vv-sm-card__text">
                            {card.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DELIVERABLES + WORK STEPS */}
              <div className="row vv-sm-grid">
                {deliverables.length > 0 && (
                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">
                        Deliverables You Get
                      </h4>
                      <ul className="vv-sm-list">
                        {deliverables.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {work_steps.length > 0 && (
                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">
                        How We Work
                      </h4>

                      <div className="vv-sm-steps">
                        {work_steps.map((step, i) => (
                          <div key={i} className="vv-sm-step">
                            <span className="vv-sm-step__num">
                              {step.step || i + 1}
                            </span>
                            <div>
                              <strong>{step.title}</strong>
                              <p>{step.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* RESULTS */}
              {results_text && (
                <div className="vv-sm-results">
                  <div className="vv-sm-results__left">
                    <h4>What Results You Can Expect</h4>
                    <p>{results_text}</p>
                  </div>

                  <div className="vv-sm-results__right">
                    <Link to="/contact" className="vv-sm-results__btn">
                      Get a Plan
                    </Link>
                  </div>
                </div>
              )}

              {/* INDUSTRIES */}
              {industries.length > 0 && (
                <>
                  <h3>Industries We Serve</h3>
                  <div className="row">
                    {industries.map((industry, i) => (
                      <div key={i} className="col-lg-4 col-sm-6">
                        <div className="single-industries-serve-box">
                          <div className="icon">
                            <i className="flaticon-tracking"></i>
                          </div>
                          {industry}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* TOOLS */}
              {tools.length > 0 && (
                <>
                  <h3>Tools & Platforms We Use</h3>
                  <ul className="technologies-features">
                    {tools.map((tool, i) => (
                      <li key={i}>
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetailsContent
