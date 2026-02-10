import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import shape1 from "../../images/about/about-shape1.png"
import shape2 from "../../images/our-mission/our-mission-shape2.png"
import starIcon from "../../images/star-icon.png"
import { getSettings } from "../../utils/api"


const WhyChooseUs = () => {
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings()
        setSettings(data)
      } catch (err) {
        console.error("❌ SETTINGS FETCH ERROR:", err)
      }
    }
    fetchSettings()
  }, [])

  if (!settings) return null

  // WHY CHOOSE US POINTS (ADMIN CONTROLLED)
  const whyPoints = [
    { title: settings.why_point4, desc: settings.why_value4 },
    { title: settings.why_point5, desc: settings.why_value5 },
    { title: settings.why_point6, desc: settings.why_value6 },
    { title: settings.why_point7, desc: settings.why_value7 },
    { title: settings.why_point8, desc: settings.why_value8 },
    { title: settings.why_point9, desc: settings.why_value9 },
  ].filter(item => item.title) // empty remove

  return (
    <div className="about-area pb-100">
      <div className="container-fluid">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-12">
            <div className="about-img">
              <img
                src={
                  
                    settings.why_image
                   
                }
                alt="Why Choose Us"
              />
              <div className="shape">
                <img src={shape1} alt="shape" />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="content">

                <span className="sub-title">
                  <img src={starIcon} alt="icon" />
                  Choose Us
                </span>

                <h2>Why Choose Us</h2>

                <p>
                  {settings.meta_description}
                </p>

                <ul className="about-list">
                  {whyPoints.map((item, index) => (
                    <li key={index}>
                      <i className="flaticon-tick"></i>
                      {item.title}
                      <img src={shape2} alt="shape" />
                    </li>
                  ))}
                </ul>

                <p>
                  Partner with Vivacious for reliable service, modern solutions,
                  and a dedicated team focused on growing your business with
                  measurable results.
                </p>

                <Link to="/about-us" className="default-btn">
                  <i className="flaticon-right"></i>
                  More About Us <span></span>
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
