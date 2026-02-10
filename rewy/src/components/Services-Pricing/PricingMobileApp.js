import React from "react"
import { Link } from "gatsby"


const PricingMobileApp = () => {
  return (
    <section className="pricing-area pt-100 pb-70 bg-f4f7fe">
      <div className="container">
        <div className="section-title">
          <h2>Mobile Application Development Pricing</h2>
          <p>
            Custom mobile apps designed for performance, user experience, and business growth.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-pricing-box">
              <div className="pricing-header">
                <h3>Mobile App Package</h3>
              </div>

              <div className="price">
                <sup>₹</sup> 50,000 <sub>/ starting</sub>
              </div>

              <ul className="pricing-features">
                <li><i className="bx bxs-badge-check"></i> UI/UX Design</li>
                <li><i className="bx bxs-badge-check"></i> Android / iOS (as per scope)</li>
                <li><i className="bx bxs-badge-check"></i> API & Database Integration</li>
                <li><i className="bx bxs-badge-check"></i> Testing & Bug Fixes</li>
                <li><i className="bx bxs-badge-check"></i> Basic Support</li>
                <li><i className="bx bxs-x-circle red"></i> Hosting/Server Charges Separate</li>
              </ul>

              <div className="btn-box">
                <Link to="/contact" className="default-btn">
                  <i className="flaticon-tick"></i>
                  Start Now
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingMobileApp
