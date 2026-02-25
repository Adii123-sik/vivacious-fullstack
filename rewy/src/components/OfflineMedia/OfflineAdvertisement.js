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
                    className={`accordion-item ${activeIndex === index ? "active" : ""
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

                        {/* DESCRIPTION */}
                        <p className="service-description">
                          {item.description}
                        </p>

                        {/* IMAGES */}
                        {(item.image1 || item.image2 || item.image3) && (
                          <div className="service-images">
                            {item.image1 && (
                              <img src={item.image1} alt={item.title} />
                            )}
                            {item.image2 && (
                              <img src={item.image2} alt={item.title} />
                            )}
                            {item.image3 && (
                              <img src={item.image3} alt={item.title} />
                            )}
                          </div>
                        )}

                        <div className="service-extra">
                          {item.extra_content.split("\n").map((line, index) => {
                            if (line.trim().startsWith("-")) {
                              return (
                                <li key={index} className="extra-list">
                                  {line.replace("-", "").trim()}
                                </li>
                              );
                            }

                            if (line.includes("?") || line.includes("Include:")) {
                              return (
                                <h3 key={index} className="extra-heading">
                                  {line}
                                </h3>
                              );
                            }

                            if (line.trim() === "") {
                              return null;
                            }

                            return (
                              <p key={index} className="extra-text">
                                {line}
                              </p>
                            );
                          })}
                        </div>


                        {/* WHATSAPP BUTTON */}
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

      {/* ================= STYLE ================= */}
      <style jsx>{`
        .accordion-body {
          padding: 20px;
          background: #ffffff;
          border-radius: 8px;
          margin-top: 10px;
          animation: fadeIn 0.3s ease-in-out;
        }

        .service-description {
          font-size: 15px;
          margin-bottom: 15px;
          color: #444;
        }

        .service-images {
          display: flex;
          gap: 15px;
          margin: 15px 0;
          flex-wrap: wrap;
        }

        .service-images img {
          width: 30%;
          border-radius: 8px;
          object-fit: cover;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        .service-images img:hover {
          transform: scale(1.05);
        }

        .service-extra {
          margin-top: 10px;
          font-size: 14px;
          color: #555;
        }

        .service-cta-btn {
          display: inline-block;
          margin-top: 18px;
          padding: 10px 22px;
          background: #ff6a00;
          color: #fff;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 500;
          transition: 0.3s ease;
        }

        .service-cta-btn:hover {
          background: #e65c00;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </section>
  );
};

export default OfflineAdvertisement;
