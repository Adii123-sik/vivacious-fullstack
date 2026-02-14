import React, { useEffect, useState } from "react";
import { getPartners } from "../../utils/api";

const Partner = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const data = await getPartners();
        if (Array.isArray(data)) {
          setPartners([...data, ...data]); // duplicate for smooth loop
        }
      } catch (err) {
        console.error("PARTNER LOAD ERROR ❌", err);
      }
    };

    loadPartners();
  }, []);

  if (!partners.length) return null;

  return (
    <section className="partners-section">
      <div className="container">

        <div className="partners-heading">
          <h2>Some of our Valuable Clients</h2>
          <p>Trusted by forward-thinking brands that believe in innovation and results.</p>
        </div>

        <div className="partners-marquee">
          <div className="partners-track">
            {partners.map((partner, index) => (
              <div key={index} className="partner-box">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partner;
