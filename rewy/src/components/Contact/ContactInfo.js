import React, { useEffect, useState } from "react"
import { getSettings } from "../../utils/api"

const ContactInfo = () => {
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings()
        setSettings(data)
      } catch (error) {
        console.error("❌ CONTACT SETTINGS ERROR:", error)
      }
    }

    fetchSettings()
  }, [])

  if (!settings) return null

  return (
    <div className="contact-info-area pt-100 pb-70">
      <div className="container">
        <div className="row">

          {/* ADDRESS */}
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className="bx bx-map"></i>
              </div>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <h3>Our Address</h3>
              <p>{settings.address}</p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className="bx bx-phone-call"></i>
              </div>
              <div className="icon">
                <i className="bx bx-phone-call"></i>
              </div>
              <h3>Contact</h3>

              {settings.contact_number && (
                <p>
                  Phone:{" "}
                  <a href={`tel:${settings.contact_number}`}>
                    {settings.contact_number}
                  </a>
                </p>
              )}

              {settings.email && (
                <p>
                  Email:{" "}
                  <a href={`mailto:${settings.email}`}>
                    {settings.email}
                  </a>
                </p>
              )}

              {/* Website (optional – static or dynamic) */}
              <p>
                Website:{" "}
                <a
                  href="https://vivacioussolutions.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  vivacioussolutions.com
                </a>
              </p>
            </div>
          </div>

          {/* HOURS */}
          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className="bx bx-time-five"></i>
              </div>
              <div className="icon">
                <i className="bx bx-time-five"></i>
              </div>
              <h3>Hours of Operation</h3>

              {settings.opening_time ? (
                <p>{settings.opening_time}</p>
              ) : (
                <>
                  <p>Monday - Saturday: 10:00 AM - 07:00 PM</p>
                  <p>Sunday: Closed</p>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactInfo
