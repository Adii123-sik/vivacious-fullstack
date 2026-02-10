import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import footerMap from "../../images/footer-map.png"
import { getSettings } from "../../utils/api"
import {API_BASE_URL} from "../../config/apiConfig"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings()
        setSettings(data)
      } catch (err) {
        console.error("❌ FOOTER SETTINGS ERROR:", err)
      }
    }

    fetchSettings()
  }, [])

  if (!settings) return null

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">

          {/* LOGO + STATIC DESCRIPTION */}
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <Link to="/" className="logo">
                <img
                  src=
                    {settings.logo_image}
                    
                  
                  alt="logo"
                />
              </Link>

              {/* ✅ STATIC DESCRIPTION (AS YOU WANTED) */}
              <p>
                Our journey began with a vision to simplify the complexities of online
                marketing for businesses of all sizes. With a focus on innovation,
                creativity, and performance, we quickly gained recognition for our
                ability to adapt to the dynamic needs of our clients. From SEO and
                social media management to content marketing, PPC campaigns, and
                advanced analytics, we’ve built a comprehensive suite of services
                designed to maximize ROI.
              </p>

              {/* SOCIAL LINKS (DYNAMIC) */}
              <ul className="social-link">
                {settings.facebook_link && (
                  <li>
                    <a href={settings.facebook_link} target="_blank" rel="noreferrer">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                )}
                {settings.instagram_link && (
                  <li>
                    <a href={settings.instagram_link} target="_blank" rel="noreferrer">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                )}
                {settings.twitter_link && (
                  <li>
                    <a href={settings.twitter_link} target="_blank" rel="noreferrer">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                )}
                {settings.linkedin_link && (
                  <li>
                    <a href={settings.linkedin_link} target="_blank" rel="noreferrer">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                )}
                {settings.youtube_link && (
                  <li>
                    <a href={settings.youtube_link} target="_blank" rel="noreferrer">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>
              <ul className="footer-links-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
              </ul>
            </div>
          </div>

          {/* SERVICES (STATIC) */}
          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget">
              <h3>Services</h3>
              <ul className="footer-links-list">
                <li><Link to="/services">Application Design</Link></li>
                <li><Link to="/services">Web Designing</Link></li>
                <li><Link to="/services">Social Media Marketing</Link></li>
                <li><Link to="/services">SEO Optimization</Link></li>
                <li><Link to="/services">Google My Profile</Link></li>
              </ul>
            </div>
          </div>

          {/* CONTACT INFO (DYNAMIC) */}
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>Address</h3>

              <ul className="footer-contact-info">
                {settings.address && (
                  <li>
                    <i className="bx bx-map"></i>
                    {settings.address}
                  </li>
                )}

                {settings.contact_number && (
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <a href={`tel:${settings.contact_number}`}>
                      {settings.contact_number}
                    </a>
                  </li>
                )}

                {settings.email && (
                  <li>
                    <i className="bx bx-envelope"></i>
                    <a href={`mailto:${settings.email}`}>
                      {settings.email}
                    </a>
                  </li>
                )}

                {settings.whatsapp_number && (
                  <li>
                    <i className="bx bxl-whatsapp"></i>
                    <a
                      href={`https://wa.me/${settings.whatsapp_number.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {settings.whatsapp_number}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>&copy; {currentYear} Vivacious Solutions. All rights reserved.</p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="map" />
      </div>
    </footer>
  )
}

export default Footer
