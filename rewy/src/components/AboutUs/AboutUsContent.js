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
    getSettings().then(setSettings)
  }, [])

  if (!settings) return null

  return (
    <>
      <section className="about-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">

            {/* IMAGE — SAME */}
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={aboutImage} alt="About Vivacious Solutions" />
              </div>
            </div>

            {/* CONTENT — SAME */}
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">

                  <span className="sub-title">
                    <img src={starIcon} alt="Star Icon" />
                    {settings.about_subtitle}
                  </span>

                  <h2>{settings.about_heading}</h2>

                  <p>{settings.about_description_top}</p>

                  {/* ✅ FEATURES LIST — SAME HTML + DYNAMIC TEXT */}
                  <ul className="features-list">
                    <li>
                      <img src={icon4} alt="Trusted" />
                      <h3>{settings.about_feature1_title}</h3>
                      <p>{settings.about_feature1_desc}</p>
                    </li>

                    <li>
                      <img src={icon5} alt="Creative" />
                      <h3>{settings.about_feature2_title}</h3>
                      <p>{settings.about_feature2_desc}</p>
                    </li>

                    <li>
                      <img src={icon6} alt="Results" />
                      <h3>{settings.about_feature3_title}</h3>
                      <p>{settings.about_feature3_desc}</p>
                    </li>

                    <li>
                      <img src={icon7} alt="Support" />
                      <h3>{settings.about_feature4_title}</h3>
                      <p>{settings.about_feature4_desc}</p>
                    </li>
                  </ul>

                  <p>{settings.about_description_bottom}</p>

                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    More About Us<span></span>
                  </Link>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SHAPE — SAME */}
        <div className="circle-shape1">
          <img src={shape1} alt="Shape" />
        </div>
      </section>
    </>
  )
}

export default AboutUsContent
