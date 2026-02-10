import React from "react"
import { Link } from "gatsby"
import ServiceSidebar from "./ServiceSidebar"
import social from "../../images/services/social-media.jpg"
import google from "../../images/services/google-my-profile.png"

const GoogleMyProfileDetailsContent = () => {
  return (
    <section className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-15 col-md-12">
            <div className="services-details-image">
              <img src={google} alt="Google My Profile Listing" />
            </div>

            <div className="services-details-desc">
              <span className="sub-title">Google My Profile Listing</span>
              <h3>Google Business Profile Services by Vivacious Solutions</h3>

              <p>
                Get found locally on Google Search and Maps with an optimized Google Business Profile.
                We set up, optimize and manage your profile to increase calls, visits and local leads.
              </p>

              <div className="vv-sm-section">
                <h3 className="vv-sm-title">What’s Included in Google Business Profile Service</h3>
                <p className="vv-sm-subtitle">
                  We help you rank locally by optimizing categories, services, keywords, posts, photos and reviews.
                  Perfect for businesses that want more local enquiries.
                </p>

                <div className="row vv-sm-cards">
                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--blue">
                        <i className="bx bx-check-shield"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Setup & Verification</h4>
                      <p className="vv-sm-card__text">
                        Profile setup, correct information, categories and verification support for a trusted listing.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--purple">
                        <i className="bx bx-news"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Optimization & Posts</h4>
                      <p className="vv-sm-card__text">
                        Add services, keywords, photos and regular posts to improve visibility and engagement.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="vv-sm-card">
                      <div className="vv-sm-card__icon vv-sm-card__icon--orange">
                        <i className="bx bx-star"></i>
                      </div>
                      <h4 className="vv-sm-card__title">Reviews & Local Ranking</h4>
                      <p className="vv-sm-card__text">
                        Review strategy, Q&A, and local signals to rank higher and build trust for customers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row vv-sm-grid">
                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">Deliverables</h4>
                      <ul className="vv-sm-list">
                        <li>Profile setup + verification support</li>
                        <li>Category & service optimization</li>
                        <li>Keyword-rich business description</li>
                        <li>Photo uploads & branding</li>
                        <li>Weekly/Monthly posts (offers, updates)</li>
                        <li>Review guidance + response support</li>
                        <li>Insights & lead reporting</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="vv-sm-panel">
                      <h4 className="vv-sm-panel__title">How We Work</h4>
                      <div className="vv-sm-steps">
                        <div className="vv-sm-step"><span className="vv-sm-step__num">1</span><div><strong>Claim & Verify</strong><p>Secure and verify the listing</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">2</span><div><strong>Optimize</strong><p>Services, categories, keywords</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">3</span><div><strong>Content</strong><p>Posts, photos, offers updates</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">4</span><div><strong>Reviews</strong><p>Build trust with reviews</p></div></div>
                        <div className="vv-sm-step"><span className="vv-sm-step__num">5</span><div><strong>Track</strong><p>Insights + improvement cycle</p></div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vv-sm-results">
                  <div className="vv-sm-results__left">
                    <h4>What Results You Can Expect</h4>
                    <p>
                      Better map ranking, more calls, more website visits and more local enquiries from nearby customers.
                    </p>
                  </div>
                  <div className="vv-sm-results__right">
                    <Link to="/contact" className="vv-sm-results__btn">
                      Optimize My Listing
                    </Link>
                  </div>
                </div>
              </div>

              <h3>Industries We Serve</h3>
              <div className="row">
                {["Clinics","Restaurants","Coaching","Real Estate","Local Services","Showrooms"].map((x,i)=>(
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
                {["Google Business Profile","Google Maps","Local SEO","Posts & Updates","Insights","Review Management"].map((x,i)=>(
                  <li key={i}><span>{x}</span></li>
                ))}
              </ul>

              <h3>Reporting & Results</h3>
              <p>
                We track profile views, calls, direction requests and website clicks to improve results consistently.
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

export default GoogleMyProfileDetailsContent
