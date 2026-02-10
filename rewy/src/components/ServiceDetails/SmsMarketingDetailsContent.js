import React from "react"
import { Link } from "gatsby"
import ServiceSidebar from "./ServiceSidebar"
import social from "../../images/services/social-media.jpg"
import sms from "../../images/services/sms-marketing.png"

const SmsMarketingDetailsContent = () => {
  return (
    <section className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-15 col-md-12">
            <div className="services-details-image">
              <img src={social} alt="SMS Marketing" />
            </div>

            <div className="services-details-desc">
              <span className="sub-title">SMS Marketing</span>
              <h3>SMS Marketing Services by Vivacious Solutions</h3>

              <p>
                SMS marketing is the fastest way to reach customers instantly. We help you plan, create and send promotional
                and transactional SMS campaigns that generate quick responses and leads.
              </p>

              <div className="vv-sm-section">
                <h3 className="vv-sm-title">What’s Included in SMS Marketing</h3>
                <p className="vv-sm-subtitle">
                  From campaign planning to template support and reporting—we handle everything so your SMS campaigns stay professional and effective.
                </p>

                <div className="row vv-sm-cards">
                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--blue">
                        <i className="bx bx-bullseye"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Campaign Strategy</h4>
                      <p className="vv-sm-card__text">
                        Message planning, CTA creation and right timing for better response rates.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--purple">
                        <i className="bx bx-shield-quarter"></i>
                      </div>
                      <h4 className="vv-sm-card__title">DLT & Compliance</h4>
                      <p className="vv-sm-card__text">
                        Template support and best practices to keep your SMS campaigns compliant.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--orange">
                        <i className="bx bx-bar-chart-alt-2"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Reports & Optimization</h4>
                      <p className="vv-sm-card__text">
                        Delivery reports and improvement suggestions to increase conversions over time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row vv-sm-grid">
                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">Deliverables</h4>
                      <ul className="vv-sm-list">
                        <li>Campaign planning & message copy</li>
                        <li>Audience segmentation guidance</li>
                        <li>DLT templates support</li>
                        <li>Scheduling & sending support</li>
                        <li>Promotional & transactional SMS</li>
                        <li>Delivery and response insights</li>
                        <li>Campaign improvement recommendations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">How We Work</h4>
                      <div className="vv-sm-steps">
                        <div className="vv-sm-step"><span className="vv-sm-step__num">1</span><div><strong>Goal</strong><p>Understand campaign objective</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">2</span><div><strong>Plan</strong><p>Message, CTA and audience</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">3</span><div><strong>Send</strong><p>Schedule and execute campaign</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">4</span><div><strong>Track</strong><p>Monitor delivery and response</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">5</span><div><strong>Optimize</strong><p>Improve for better results</p></div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vv-sm-results">
                  <div className="vv-sm-results__left">
                    <h4>What Results You Can Expect</h4>
                    <p>
                      Faster customer reach, quick responses, higher conversions for promotions, reminders and offers.
                    </p>
                  </div>
                  <div className="vv-sm-results__right">
                    <Link to="/contact" className="vv-sm-results__btn">
                      Start SMS Campaign
                    </Link>
                  </div>
                </div>
              </div>

              <h3>Industries We Serve</h3>
              <div className="row">
                {["Retail","Education","Clinics","Real Estate","Service Providers","Events"].map((x,i)=>(
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
                {["SMS Gateway","DLT Templates","Campaign Reports","Audience Segmentation","Scheduling Tools","Insights"].map((x,i)=>(
                  <li key={i}><span>{x}</span></li>
                ))}
              </ul>

              <h3>Reporting & Results</h3>
              <p>
                We provide delivery and performance insights so you can improve campaigns and increase conversions.
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

export default SmsMarketingDetailsContent
