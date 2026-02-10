import React from "react"
import { Link } from "gatsby"
import ServiceSidebar from "./ServiceSidebar"
import social from "../../images/services/social-media.jpg"
import affilate from "../../images/services/affiliate-marketing.png"
const AffiliateMarketingDetailsContent = () => {
  return (
    <section className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-15 col-md-12">
            <div className="services-details-image">
              <img src={affilate} alt="Affiliate Marketing" />
            </div>

            <div className="services-details-desc">
              <span className="sub-title">Affiliate Marketing</span>
              <h3>Affiliate Marketing by Vivacious Solutions</h3>

              <p>
                Affiliate marketing helps you scale with performance-based growth. We help you create the program,
                manage partners, track conversions, and increase revenue with measurable ROI.
              </p>

              <div className="vv-sm-section">
                <h3 className="vv-sm-title">What’s Included in Affiliate Marketing</h3>
                <p className="vv-sm-subtitle">
                  We build a structured affiliate system—commission setup, creatives, tracking, and partner management to scale sales.
                </p>

                <div className="row vv-sm-cards">
                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--blue">
                        <i className="bx bx-cog"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Program Setup</h4>
                      <p className="vv-sm-card__text">
                        Commission structure, rules, and complete affiliate program setup for smooth scaling.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--purple">
                        <i className="bx bx-user-plus"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Partner Management</h4>
                      <p className="vv-sm-card__text">
                        Recruit, onboard and manage affiliates with promotion assets and guidance.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--orange">
                        <i className="bx bx-trending-up"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Tracking & ROI</h4>
                      <p className="vv-sm-card__text">
                        Track conversions and performance to optimize campaigns and increase ROI.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row vv-sm-grid">
                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">Deliverables</h4>
                      <ul className="vv-sm-list">
                        <li>Affiliate program setup</li>
                        <li>Commission plan & tracking setup</li>
                        <li>Creative assets support</li>
                        <li>Partner onboarding process</li>
                        <li>Conversion monitoring</li>
                        <li>Optimization recommendations</li>
                        <li>Monthly performance reporting</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">How We Work</h4>
                      <div className="vv-sm-steps">
                        <div className="vv-sm-step"><span className="vv-sm-step__num">1</span><div><strong>Setup</strong><p>Program rules + commission</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">2</span><div><strong>Recruit</strong><p>Find and onboard partners</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">3</span><div><strong>Support</strong><p>Creatives + promo guidance</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">4</span><div><strong>Track</strong><p>Monitor conversions & clicks</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">5</span><div><strong>Scale</strong><p>Optimize and expand partners</p></div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vv-sm-results">
                  <div className="vv-sm-results__left">
                    <h4>What Results You Can Expect</h4>
                    <p>
                      More reach, more conversions, and scalable revenue—where you only pay for performance and track everything clearly.
                    </p>
                  </div>
                  <div className="vv-sm-results__right">
                    <Link to="/contact" className="vv-sm-results__btn">
                      Build Affiliate Program
                    </Link>
                  </div>
                </div>
              </div>

              <h3>Industries We Serve</h3>
              <div className="row">
                {["E-commerce","Digital Products","Coaching","Services","SaaS","B2B"].map((x,i)=>(
                  <div key={i} className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon"><i className="flaticon-tracking"></i></div>
                      {x}
                    </div>
                  </div>
                ))}
              </div>

              <h3>Tools & Platforms We Use</h3>
              <ul className="technologies-features">
                {["Affiliate tracking","Creative assets","Landing pages (optional)","Reporting","Conversion monitoring","ROI optimization"].map((x,i)=>(
                  <li key={i}><span>{x}</span></li>
                ))}
              </ul>

              <h3>Reporting & Results</h3>
              <p>
                We provide performance reporting for affiliates, conversions, and ROI—so you can scale confidently.
              </p>
            </div>
          </div>

          {/* Sidebar (optional)
          <div className="col-lg-4 col-md-12">
            <ServiceSidebar />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default AffiliateMarketingDetailsContent
