import React from "react"
import { Link } from "gatsby"

const PricingSEO = () => {
  return (
    <section className="pricing-area pt-100 pb-70 bg-f4f7fe">
      <div className="container">
        <div className="section-title">
          <h2>SEO Services Pricing</h2>
          <p>
            Improve your Google ranking with technical SEO, on-page SEO, and local SEO.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-pricing-box">
              <div className="pricing-header">
                <h3>SEO Package</h3>
              </div>

              <div className="price">
                <sup>₹</sup> 5,999 <sub>/ month starting</sub>
              </div>

              <ul className="pricing-features">
                <li><i className="bx bxs-badge-check"></i> SEO Audit & Fixes</li>
                <li><i className="bx bxs-badge-check"></i> Keyword Research</li>
                <li><i className="bx bxs-badge-check"></i> On-Page Optimization</li>
                <li><i className="bx bxs-badge-check"></i> Local SEO (GMB Support)</li>
                <li><i className="bx bxs-badge-check"></i> Monthly Reports</li>
                <li><i className="bx bxs-x-circle red"></i> Results Vary by Competition</li>
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

export default PricingSEO
