import React, { useEffect, useState } from "react";
import { getPartners } from "../../utils/api";

const Partner = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const data = await getPartners();
        if (Array.isArray(data)) {
          setPartners([...data, ...data]); // duplicate for infinite loop
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
      <div className="partners-container">
        <div className="partners-heading">
          <h2>Trusted by Industry Leaders</h2>
          <p>
            We collaborate with ambitious brands that push boundaries and
            believe in innovation.
          </p>
        </div>

        <div className="partners-marquee">
          <div className="partners-track">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
