import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import aboutImage from "../../images/about/about-img5.png"
import starIcon from "../../images/star-icon.png"
import icon4 from "../../images/icons/icon4.png"
import icon5 from "../../images/icons/icon5.png"
import icon6 from "../../images/icons/icon6.png"
import icon7 from "../../images/icons/icon7.png"
import shape1 from "../../images/shape/circle-shape1.png"
import { getSettings } from "../../utils/api"

const AboutUsContent = () => {
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings()
        setSettings(data)
      } catch (error) {
        console.error("SETTINGS ERROR:", error)
      }
    }

    fetchSettings()
  }, [])

  return (
    <section className="about-area ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">

          {/* LEFT IMAGE — ALWAYS LOADS */}
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img 
                src={aboutImage} 
                alt="About Vivacious Solutions"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="content">

                <span className="sub-title">
                  <img src={starIcon} alt="Star Icon" />
                  {settings?.about_subtitle || "About Our Company"}
                </span>

                <h2>
                  {settings?.about_heading || "We Deliver Creative Digital Solutions"}
                </h2>

                <p>
                  {settings?.about_description_top ||
                    "We help businesses grow with innovative digital strategies tailored for real results."}
                </p>

                {/* FEATURES LIST */}
                <ul className="features-list">
                  <li>
                    <img src={icon4} alt="Trusted" />
                    <h3>{settings?.about_feature1_title || "Trusted Partner"}</h3>
                    <p>{settings?.about_feature1_desc || "We build long-term relationships based on trust."}</p>
                  </li>

                  <li>
                    <img src={icon5} alt="Creative" />
                    <h3>{settings?.about_feature2_title || "Creative Solutions"}</h3>
                    <p>{settings?.about_feature2_desc || "Innovative strategies designed for impact."}</p>
                  </li>

                  <li>
                    <img src={icon6} alt="Results" />
                    <h3>{settings?.about_feature3_title || "Proven Results"}</h3>
                    <p>{settings?.about_feature3_desc || "Delivering measurable business growth."}</p>
                  </li>

                  <li>
                    <img src={icon7} alt="Support" />
                    <h3>{settings?.about_feature4_title || "Dedicated Support"}</h3>
                    <p>{settings?.about_feature4_desc || "Our team is always here to help."}</p>
                  </li>
                </ul>

                <p>
                  {settings?.about_description_bottom ||
                    "Our mission is to empower brands through digital excellence and innovation."}
                </p>

                <Link to="/about-us" className="default-btn">
                  <i className="flaticon-right"></i>
                  More About Us<span></span>
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SHAPE */}
      <div className="circle-shape1">
        <img src={shape1} alt="Shape" loading="lazy" />
      </div>
    </section>
  )
}

export default AboutUsContent