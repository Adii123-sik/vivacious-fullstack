import React from "react"
import { Link } from "gatsby"
import ServiceSidebar from "./ServiceSidebar"
import social from "../../images/services/social-media.jpg"
import email from "../../images/services/email-marketing.png"

const EmailMarketingDetailsContent = () => {
  return (
    <section className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-15 col-md-12">
            <div className="services-details-image">
              <img src={email} alt="Email Marketing" />
            </div>

            <div className="services-details-desc">
              <span className="sub-title">Email Marketing</span>
              <h3>Email Marketing Services by Vivacious Solutions</h3>

              <p>
                We build email campaigns that convert—templates, content, automation, and reporting.
                Perfect for nurturing leads, promoting offers, and increasing repeat sales.
              </p>

              <div className="vv-sm-section">
                <h3 className="vv-sm-title">What’s Included in Email Marketing</h3>
                <p className="vv-sm-subtitle">
                  We manage your email strategy, campaigns, and automation so you can stay top-of-mind and grow consistently.
                </p>

                <div className="row vv-sm-cards">
                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--blue">
                        <i className="bx bx-mail-send"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Campaigns & Copy</h4>
                      <p className="vv-sm-card__text">
                        Email templates, professional copywriting and CTA-focused campaigns for better conversions.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--purple">
                        <i className="bx bx-bolt-circle"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Automation</h4>
                      <p className="vv-sm-card__text">
                        Welcome emails, follow-ups, drip sequences and automation that saves time and increases sales.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--orange">
                        <i className="bx bx-bar-chart"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Analytics & Optimization</h4>
                      <p className="vv-sm-card__text">
                        Track opens, clicks, and conversions, then optimize campaigns for better results.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row vv-sm-grid">
                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">Deliverables</h4>
                      <ul className="vv-sm-list">
                        <li>Email strategy & plan</li>
                        <li>Template design</li>
                        <li>Copywriting + subject lines</li>
                        <li>Automation sequences</li>
                        <li>List segmentation guidance</li>
                        <li>A/B testing (optional)</li>
                        <li>Monthly reporting</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">How We Work</h4>
                      <div className="vv-sm-steps">
                        <div className="vv-sm-step"><span className="vv-sm-step__num">1</span><div><strong>Plan</strong><p>Goals + audience segmentation</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">2</span><div><strong>Create</strong><p>Templates + content writing</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">3</span><div><strong>Send</strong><p>Scheduling + automation setup</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">4</span><div><strong>Track</strong><p>Opens, clicks, conversions</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">5</span><div><strong>Optimize</strong><p>Improve for better performance</p></div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vv-sm-results">
                  <div className="vv-sm-results__left">
                    <h4>What Results You Can Expect</h4>
                    <p>
                      Better customer retention, more repeat sales, and stronger brand connection through consistent email communication.
                    </p>
                  </div>
                  <div className="vv-sm-results__right">
                    <Link to="/contact" className="vv-sm-results__btn">
                      Start Email Marketing
                    </Link>
                  </div>
                </div>
              </div>

              <h3>Industries We Serve</h3>
              <div className="row">
                {["E-commerce","Education","Healthcare","Services","Real Estate","B2B"].map((x,i)=>(
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
                {["Email Templates","Automation","Segmentation","Campaign Tracking","Analytics","Reporting"].map((x,i)=>(
                  <li key={i}><span>{x}</span></li>
                ))}
              </ul>

              <h3>Reporting & Results</h3>
              <p>
                You get regular reporting with open rate, click rate and improvement suggestions to grow results consistently.
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

export default EmailMarketingDetailsContent
