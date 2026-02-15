import React, { useState, useEffect } from "react";
import offlineImg from "../../images/offline-ads/offline-advertising-01.png";
import { getOfflineServices, getSettings } from "../../utils/api";

const OfflineAdvertisement = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [services, setServices] = useState([]);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const loadData = async () => {
      try {
        const servicesData = await getOfflineServices();
        const settingsData = await getSettings();

        setServices(servicesData);
        setSettings(settingsData);
      } catch (err) {
        console.error("Data load error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  /* ================= WHATSAPP LINK ================= */
  const getWhatsappLink = () => {
    if (!settings?.whatsapp_number) return "#";

    // remove spaces and special chars
    const number = settings.whatsapp_number.replace(/\D/g, "");

    const message = encodeURIComponent(
      "Hello Vivacious Solutions, I am interested in your Offline Advertising services."
    );

    return `https://wa.me/${number}?text=${message}`;
  };

  return (
    <section className="offline-area">
      <div className="container">

        {/* INTRO */}
        <div className="offline-intro">
          <p>
            At <strong>Vivacious Solutions</strong>, we help brands expand
            their reach through powerful and result-driven offline advertising
            strategies. Our expertise spans across traditional media channels,
            ensuring maximum visibility, brand recall, and measurable impact.
          </p>
        </div>

        <h2 className="section-title">Our Services:</h2>

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-5 col-md-12">
            <div className="offline-img">
              <img
                src={offlineImg}
                alt="Offline Advertising Services by Vivacious Solutions"
              />
            </div>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="col-lg-7 col-md-12">
            <div className="accordion-wrapper">

              {loading ? (
                <p>Loading services...</p>
              ) : services.length === 0 ? (
                <p>No services available</p>
              ) : (
                services.map((item, index) => (
                  <div
                    key={item.id}
                    className={`accordion-item ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <div
                      className="accordion-header"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span>{item.title}</span>
                      <span className="accordion-icon">
                        {activeIndex === index ? "▴" : "▾"}
                      </span>
                    </div>

                    {activeIndex === index && (
                      <div className="accordion-body">
                        <p>{item.description}</p>

                        {/* 🔥 WHATSAPP BUTTON */}
                        <a
                          href={getWhatsappLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="service-cta-btn"
                        >
                           Join & Grow Your Business →
                        </a>
                      </div>
                    )}
                  </div>
                ))
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfflineAdvertisement;
