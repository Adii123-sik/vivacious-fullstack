import React from "react"
import { Link } from "gatsby"
import ServiceSidebar from "./ServiceSidebar"
import social from "../../images/services/social-media.jpg"
import application from "../../images/services/application-design.png"
const ApplicationDesignDetailsContent = () => {
  return (
    <section className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-15 col-md-12">
            <div className="services-details-image">
              <img src={application} alt="Application Design" />
            </div>

            <div className="services-details-desc">
              <span className="sub-title">Application Design</span>
              <h3>Application UI/UX Design by Vivacious Solutions</h3>

              <p>
                We design modern, user-friendly mobile and web applications with clean UI/UX and smooth flows.
                From wireframes to high-fidelity screens and developer handoff—we deliver a premium app experience.
              </p>

              <div className="vv-sm-section">
                <h3 className="vv-sm-title">What’s Included in App Design</h3>
                <p className="vv-sm-subtitle">
                  A complete UI/UX process: user flow planning, wireframes, modern interface design, prototypes,
                  and final handoff for development.
                </p>

                <div className="row vv-sm-cards">
                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--blue">
                        <i className="bx bx-sitemap"></i>
                      </div>
                      <h4 className="vv-sm-card__title">User Flow & Wireframes</h4>
                      <p className="vv-sm-card__text">
                        We plan journeys and wireframes for smooth navigation and better user experience.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--purple">
                        <i className="bx bx-paint"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Modern UI Design</h4>
                      <p className="vv-sm-card__text">
                        Clean layouts, typography, colors and design system that matches your brand.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--orange">
                        <i className="bx bx-mouse"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Prototype & Handoff</h4>
                      <p className="vv-sm-card__text">
                        Clickable prototype + assets export and developer-ready handoff for fast development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row vv-sm-grid">
                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">Deliverables</h4>
                      <ul className="vv-sm-list">
                        <li>User flow + sitemap</li>
                        <li>Wireframes for key screens</li>
                        <li>High-fidelity UI screens</li>
                        <li>Clickable prototype</li>
                        <li>UI kit + reusable components</li>
                        <li>Design system (colors, typography)</li>
                        <li>Developer handoff files</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">How We Work</h4>
                      <div className="vv-sm-steps">
                        <div className="vv-sm-step"><span className="vv-sm-step__num">1</span><div><strong>Research</strong><p>Goals, users & competitors</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">2</span><div><strong>Wireframes</strong><p>Structure and screen planning</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">3</span><div><strong>UI Design</strong><p>Modern interface + components</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">4</span><div><strong>Prototype</strong><p>Clickable preview for feedback</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">5</span><div><strong>Handoff</strong><p>Assets & dev-ready delivery</p></div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vv-sm-results">
                  <div className="vv-sm-results__left">
                    <h4>What Results You Can Expect</h4>
                    <p>
                      A premium-looking application design, smooth user experience, and faster development
                      because everything is planned clearly.
                    </p>
                  </div>
                  <div className="vv-sm-results__right">
                    <Link to="/contact" className="vv-sm-results__btn">
                      Design My App
                    </Link>
                  </div>
                </div>
              </div>

              <h3>Industries We Serve</h3>
              <div className="row">
                {["Startups","E-commerce","Education Apps","Healthcare Apps","Booking Apps","Business Tools"].map((x,i)=>(
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
                {["Figma","Wireframing","Prototyping","UI Kit","Design System","Developer Handoff"].map((x,i)=>(
                  <li key={i}><span>{x}</span></li>
                ))}
              </ul>

              <h3>Reporting & Results</h3>
              <p>
                You’ll receive screens, prototypes, and handoff files with clear guidelines so development becomes easy and fast.
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

export default ApplicationDesignDetailsContent
