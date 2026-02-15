import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import starIcon from "../../images/star-icon.png";
import { getSettings } from "../../utils/api";

const WhyChooseUs = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings();
        setSettings(data);
      } catch (err) {
        console.error("SETTINGS FETCH ERROR:", err);
      }
    };
    fetchSettings();
  }, []);

  if (!settings) return null;

  const counters = [
    {
      top: "EXPERT TEAM",
      value: settings.value1,
      label: settings.point1,
    },
    {
      top: "BRANCHES",
      value: settings.value2,
      label: settings.point2,
    },
    {
      top: "EXPERIENCE",
      value: settings.value3,
      label: settings.point3,
    },
  ];

  return (
    <section className="why-area">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-12">
            <div className="why-img">
              <img src={settings.why_image} alt="Why Choose Us" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-12">
            <div className="why-content">

              <span className="sub-title">
                <img src={starIcon} alt="icon" />
                Choose Us
              </span>

              <h2>Why Choose Us</h2>

              <p>{settings.meta_description}</p>

              {/* FEATURES BOXES */}
              <ul className="features-list">
                {[
                  {
                    title: settings.why_point4,
                    desc: settings.why_desc4,
                  },
                  {
                    title: settings.why_point5,
                    desc: settings.why_desc5,
                  },
                  {
                    title: settings.why_point6,
                    desc: settings.why_desc6,
                  },
                  {
                    title: settings.why_point7,
                    desc: settings.why_desc7,
                  },
                  {
                    title: settings.why_point8,
                    desc: settings.why_desc8,
                  },
                  {
                    title: settings.why_point9,
                    desc: settings.why_desc9,
                  },
                ]
                  .filter(item => item.title)
                  .map((item, index) => (
                    <li key={index}>
                      <img src={starIcon} alt="icon" />
                      <div>
                        <h3>{item.title}</h3>
                        {item.desc && <p>{item.desc}</p>}
                      </div>
                    </li>
                  ))}
              </ul>



              <p>
                Partner with Vivacious for reliable service, modern solutions,
                and a dedicated team focused on measurable growth.
              </p>

              <Link to="/about-us" className="default-btn">
                Read More
              </Link>

            </div>
          </div>

        </div>

        {/* COUNTER SECTION */}
        <div className="counter-section">
          {counters.map((item, index) => (
            <div key={index} className="counter-box">

              <h3>{item.label}+</h3>
              <p>{item.value}</p>
            </div>

          ))}
          <div className="counter-box-experience">

            <h3>15+ Year</h3>
            <p>Experience</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
