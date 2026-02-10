import React from "react"
import { Link } from "gatsby"
import ServiceSidebar from "./ServiceSidebar"
import social from "../../images/services/social-media.jpg"
import web from "../../images/services/web-designing.png"

const WebDesigningDetailsContent = () => {
  return (
    <section className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-15 col-md-12">
            <div className="services-details-image">
              <img src={web} alt="Web Designing" />
            </div>

            <div className="services-details-desc">
              <span className="sub-title">Web Designing</span>
              <h3>Web Designing Services by Vivacious Solutions</h3>

              <p>
                We design and build modern, responsive websites that look premium and convert visitors into customers.
                From landing pages to full business websites, we focus on UI/UX, speed, and clear call-to-actions.
              </p>

              <div className="vv-sm-section">
                <h3 className="vv-sm-title">What’s Included in Our Web Designing Service</h3>
                <p className="vv-sm-subtitle">
                  A complete website solution—design, development, responsiveness, performance, and a clean user experience
                  that matches your brand.
                </p>

                <div className="row vv-sm-cards">
                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--blue">
                        <i className="bx bx-layout"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Modern UI/UX Design</h4>
                      <p className="vv-sm-card__text">
                        Clean layout, easy navigation, clear sections and strong branding for trust and professionalism.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--purple">
                        <i className="bx bx-devices"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Fully Responsive</h4>
                      <p className="vv-sm-card__text">
                        Perfect on mobile, tablet, and desktop with consistent spacing, typography, and design quality.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--orange">
                        <i className="bx bx-rocket"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Fast & Conversion Ready</h4>
                      <p className="vv-sm-card__text">
                        Speed optimization, SEO-friendly structure, and CTA-driven sections to generate more leads.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row vv-sm-grid">
                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">Deliverables You Get</h4>
                      <ul className="vv-sm-list">
                        <li>Custom design based on your brand</li>
                        <li>Responsive development (mobile-first)</li>
                        <li>Contact form + WhatsApp integration</li>
                        <li>Speed optimization + basic security setup</li>
                        <li>Basic on-page SEO structure</li>
                        <li>Browser & device testing</li>
                        <li>Launch support</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">How We Work</h4>

                      <div className="vv-sm-steps">
                        <div className="vv-sm-step"><span className="vv-sm-step__num">1</span><div><strong>Requirement</strong><p>We understand goals, pages & audience</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">2</span><div><strong>Design</strong><p>We design a modern UI/UX layout</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">3</span><div><strong>Development</strong><p>We build responsive, fast pages</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">4</span><div><strong>Testing</strong><p>Cross-device testing + performance</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">5</span><div><strong>Launch</strong><p>Deploy + post-launch support</p></div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vv-sm-results">
                  <div className="vv-sm-results__left">
                    <h4>What Results You Can Expect</h4>
                    <p>
                      A premium-looking website, better user experience, higher trust, and improved conversions.
                      Your website will be built to grow your business—not just to look good.
                    </p>
                  </div>
                  <div className="vv-sm-results__right">
                    <Link to="/contact" className="vv-sm-results__btn">
                      Get a Website Quote
                    </Link>
                  </div>
                </div>
              </div>

              <h3>Industries We Serve</h3>
              <div className="row">
                {["Business Services","Healthcare","Education","Real Estate","E-commerce","Local Services"].map((x,i)=>(
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
                {["Gatsby / React","HTML / CSS","Bootstrap","WordPress (optional)","SEO-ready structure","Google Analytics"].map((x,i)=>(
                  <li key={i}><span>{x}</span></li>
                ))}
              </ul>

              <h3>Reporting & Results</h3>
              <p>
                We ensure performance, responsiveness, and a clean UI. If required, we can also track leads and visitor behavior
                using Analytics to improve conversions.
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

export default WebDesigningDetailsContent
