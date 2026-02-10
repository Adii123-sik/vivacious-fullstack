import React from "react"
import { Link } from "gatsby"
import ServiceSidebar from "./ServiceSidebar"
import social from "../../images/services/social-media.jpg"
import webhost from "../../images/services/web-hosting.png"

const WebHostingDetailsContent = () => {
  return (
    <section className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-15 col-md-12">
            <div className="services-details-image">
              <img src={webhost} alt="Web Hosting" />
            </div>

            <div className="services-details-desc">
              <span className="sub-title">Web Hosting</span>
              <h3>Web Hosting Services by Vivacious Solutions</h3>

              <p>
                We provide fast, secure and reliable hosting with SSL, backups and performance optimization.
                Your website stays online, loads quickly, and remains protected.
              </p>

              <div className="vv-sm-section">
                <h3 className="vv-sm-title">What’s Included in Web Hosting</h3>
                <p className="vv-sm-subtitle">
                  We handle setup, security, backups, and basic maintenance so you can focus on your business.
                </p>

                <div className="row vv-sm-cards">
                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--blue">
                        <i className="bx bx-lock-alt"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Secure Setup</h4>
                      <p className="vv-sm-card__text">
                        SSL, best-practice configuration, and strong base security for your website.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--purple">
                        <i className="bx bx-tachometer"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Speed & Performance</h4>
                      <p className="vv-sm-card__text">
                        Cache, performance tuning and optimization to keep your site fast.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--orange">
                        <i className="bx bx-cloud-upload"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Backups & Monitoring</h4>
                      <p className="vv-sm-card__text">
                        Regular backups and basic monitoring to keep your website safe and stable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row vv-sm-grid">
                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">Deliverables</h4>
                      <ul className="vv-sm-list">
                        <li>Hosting setup & configuration</li>
                        <li>Domain connection support</li>
                        <li>SSL installation</li>
                        <li>Backup setup</li>
                        <li>Basic performance optimization</li>
                        <li>Email accounts (if required)</li>
                        <li>Support for basic issues</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">How We Work</h4>
                      <div className="vv-sm-steps">
                        <div className="vv-sm-step"><span className="vv-sm-step__num">1</span><div><strong>Select Plan</strong><p>Based on your website needs</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">2</span><div><strong>Setup</strong><p>Hosting + domain connection</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">3</span><div><strong>Secure</strong><p>SSL + safety configuration</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">4</span><div><strong>Optimize</strong><p>Speed + cache improvement</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">5</span><div><strong>Maintain</strong><p>Backup + support</p></div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vv-sm-results">
                  <div className="vv-sm-results__left">
                    <h4>What Results You Can Expect</h4>
                    <p>
                      Better website speed, stronger security, and peace of mind with backups and support.
                    </p>
                  </div>
                  <div className="vv-sm-results__right">
                    <Link to="/contact" className="vv-sm-results__btn">
                      Get Hosting Setup
                    </Link>
                  </div>
                </div>
              </div>

              <h3>Industries We Serve</h3>
              <div className="row">
                {["Business Websites","E-commerce","Education","Clinics","Service Providers","Startups"].map((x,i)=>(
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
                {["cPanel / Hosting Panel","SSL","Backups","Optimization","Basic Monitoring","Support"].map((x,i)=>(
                  <li key={i}><span>{x}</span></li>
                ))}
              </ul>

              <h3>Reporting & Results</h3>
              <p>
                We ensure stable hosting performance and help with basic maintenance so your site stays healthy.
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

export default WebHostingDetailsContent
