import React from "react"
import { Link } from "gatsby"
import ServiceSidebar from "./ServiceSidebar"
import social from "../../images/services/social-media.jpg"
import seo from "../../images/services/seo-optimization.png"

const SeoOptimizationDetailsContent = () => {
  return (
    <section className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-15 col-md-12">
            <div className="services-details-image">
              <img src={seo} alt="SEO Optimization" />
            </div>

            <div className="services-details-desc">
              <span className="sub-title">SEO Optimization</span>
              <h3>SEO Services by Vivacious Solutions</h3>

              <p>
                We help your business rank higher on Google with technical SEO, on-page optimization, content improvements,
                and local SEO strategies. The goal is simple: more visibility, more traffic, and more leads.
              </p>

              <div className="vv-sm-section">
                <h3 className="vv-sm-title">What’s Included in Our SEO Service</h3>
                <p className="vv-sm-subtitle">
                  SEO is not just keywords—it's technical health, content quality, and consistent improvements that generate long-term growth.
                </p>

                <div className="row vv-sm-cards">
                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--blue">
                        <i className="bx bx-cog"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Technical SEO</h4>
                      <p className="vv-sm-card__text">
                        Site speed, indexing, mobile usability, structure fixes, and error cleanup for strong SEO foundation.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--purple">
                        <i className="bx bx-edit"></i>
                      </div>
                      <h4 className="vv-sm-card__title">On-Page & Content</h4>
                      <p className="vv-sm-card__text">
                        Keyword mapping, meta tags, headings, internal linking and content improvements for higher rankings.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--orange">
                        <i className="bx bx-map-pin"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Local SEO</h4>
                      <p className="vv-sm-card__text">
                        Google Business Profile optimization, local keywords and location signals to rank in nearby searches.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row vv-sm-grid">
                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">Deliverables</h4>
                      <ul className="vv-sm-list">
                        <li>SEO audit + action plan</li>
                        <li>Keyword research + targeting</li>
                        <li>On-page optimization</li>
                        <li>Technical SEO fixes</li>
                        <li>Local SEO (GMB optimization)</li>
                        <li>Content recommendations</li>
                        <li>Monthly progress reporting</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">How We Work</h4>
                      <div className="vv-sm-steps">
                        <div className="vv-sm-step"><span className="vv-sm-step__num">1</span><div><strong>Audit</strong><p>We find issues + opportunities</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">2</span><div><strong>Strategy</strong><p>Keywords, pages & content plan</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">3</span><div><strong>Optimization</strong><p>On-page + technical improvements</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">4</span><div><strong>Local Growth</strong><p>GMB + local ranking signals</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">5</span><div><strong>Report</strong><p>Track ranking, traffic & leads</p></div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vv-sm-results">
                  <div className="vv-sm-results__left">
                    <h4>What Results You Can Expect</h4>
                    <p>
                      Higher rankings, more organic traffic, stronger trust, and consistent lead generation.
                      SEO builds long-term growth that keeps working month after month.
                    </p>
                  </div>
                  <div className="vv-sm-results__right">
                    <Link to="/contact" className="vv-sm-results__btn">
                      Start SEO Growth
                    </Link>
                  </div>
                </div>
              </div>

              <h3>Industries We Serve</h3>
              <div className="row">
                {["Local Business","Clinics & Healthcare","Education & Coaching","Real Estate","E-commerce","Service Providers"].map((x,i)=>(
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
                {["Google Search Console","Google Analytics","On-page SEO tools","Keyword research","Local SEO tools","Performance insights"].map((x,i)=>(
                  <li key={i}><span>{x}</span></li>
                ))}
              </ul>

              <h3>Reporting & Results</h3>
              <p>
                You get monthly reporting for rankings, traffic, and improvements. We continuously optimize the strategy based on performance.
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

export default SeoOptimizationDetailsContent
