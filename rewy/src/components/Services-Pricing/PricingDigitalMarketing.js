import React from "react"
import { Link } from "gatsby"

const PricingDigitalMarketing = () => {
  return (
    <section className="pricing-area pt-100 pb-70 bg-f4f7fe">
      <div className="container">
        <div className="section-title">
          <h2>Digital Marketing Pricing</h2>
          <p>
            Monthly marketing plans to build brand awareness, leads, and sales.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-pricing-box">
              <div className="pricing-header">
                <h3>Marketing Package</h3>
              </div>

              <div className="price">
                <sup>₹</sup> 7,999 <sub>/ month starting</sub>
              </div>

              <ul className="pricing-features">
                <li><i className="bx bxs-badge-check"></i> Social Media Management</li>
                <li><i className="bx bxs-badge-check"></i> Content Calendar & Creatives</li>
                <li><i className="bx bxs-badge-check"></i> Basic Lead Campaign Setup</li>
                <li><i className="bx bxs-badge-check"></i> Monthly Reporting</li>
                <li><i className="bx bxs-badge-check"></i> Profile Optimization</li>
                <li><i className="bx bxs-x-circle red"></i> Ad Budget Separate</li>
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

export default PricingDigitalMarketing
