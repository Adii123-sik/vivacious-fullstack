import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"

const OurSolutions = () => {
  return (
    <>
      <section className="solutions-area pb-70 pt-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="star" />
              Our services
            </span>
            <h2>Vivacious: Excellence in Every Service</h2>
            <p>
              Vivacious Solutions delivers end-to-end digital growth—web design, SEO,
              social media, and advertising that turns clicks into customers
            </p>
          </div>

          <div className="row">
            {/* Social Media */}
            <div className="col-lg-4 col-sm-6">
              <Link to="/services/service-details/" className="card-link-wrapper">
                <div className="single-solutions-box">
                  <div className="icon">
                    <i className="bx bxl-instagram"></i>
                  </div>

                  <h3>
                    <Link to="/services/service-details">Social Media</Link>
                  </h3>

                  <p>
                    Elevate your brand with our expert social media services. We create
                    engaging content, manage platforms, and run targeted ad campaigns to
                    build your online presence. Connect with your audience, boost
                    engagement, and drive results across platforms like Facebook,
                    Instagram, Twitter, and LinkedIn. Let’s turn your social media into a
                    growth engine!
                  </p>
                  <Link to="/services/service-details" className="view-details-btn">
                    View Details
                  </Link>


                </div>
              </Link>
            </div>

            {/* Web Designing */}
            <div className="col-lg-4 col-sm-6">
              <Link to="/services/service-details/" className="card-link-wrapper">
                <div className="single-solutions-box">
                  <div className="icon">
                    <i className="bx bx-code-alt"></i>
                  </div>

                  <h3>
                    <Link to="/services/service-details">Web Designing</Link>
                  </h3>

                  <p>
                    Transform your online presence with our professional web design
                    services. We craft stunning, user-friendly, and responsive websites
                    tailored to your brand. From sleek layouts to seamless navigation, we
                    ensure your site captivates visitors and drives results. Let us create
                    a digital experience that sets you apart and boosts your business
                    growth.
                  </p>
                  <Link to="/services/service-details" className="view-details-btn">
                    View Details
                  </Link>


                </div>
              </Link>
            </div>

            {/* SEO Optimization */}
            <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
              <Link to="/services/service-details/" className="card-link-wrapper">
                <div className="single-solutions-box">
                  <div className="icon">
                    <i className="bx bx-bar-chart-alt-2"></i>
                  </div>

                  <h3>

                    <Link to="/services/service-details">SEO Optimization</Link>
                  </h3>

                  <p>
                    Boost your visibility with Vivacious Solutions’ SEO services. We
                    improve your website’s structure, speed, and content to help you rank
                    higher on Google. From keyword research to on-page optimization and
                    local SEO, we build strategies that attract the right audience. Get
                    more organic traffic, better leads, and long-term growth with results
                    you can measure.
                  </p>

                  <Link to="/services/service-details" className="view-details-btn">
                    View Details
                  </Link>


                </div>
              </Link>
            </div>
          </div>

          {/* See More button */}
          <div className="text-center mt-4">
            <Link to="/services" className="default-btn see-more-btn">
              See More <span></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurSolutions

