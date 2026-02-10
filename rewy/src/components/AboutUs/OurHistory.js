import React, { useEffect, useState } from "react";
import starIcon from "../../images/star-icon.png";
import { getHistory } from "../../utils/api";

const OurHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      const data = await getHistory();

      // year ke hisaab se ascending order (2011 → 2021)
      const sorted = data.sort(
        (a, b) => Number(a.year) - Number(b.year)
      );

      setHistory(sorted);
    };

    loadHistory();
  }, []);

  if (!history.length) return null;

  return (
    <section className="history-area ptb-100 bg-fafafb">
      <div className="container">
        {/* ===== TITLE ===== */}
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="Star Icon" />
            Our History
          </span>
          <h2>Our Journey Started in {history[0]?.year}</h2>
          <p>
            Vivacious Solutions began as a marketing-focused company
            and grew into a full-service digital partner offering
            multiple services for business growth.
          </p>
        </div>

        {/* ===== TIMELINE ===== */}
        <ol className="timeline history-timeline">
          {history.map((item) => (
            <li className="timeline-block" key={item.id}>
              {/* DATE */}
              <div className="timeline-date">
                <span>{item.year}</span>
                {item.subtitle}
              </div>

              <div className="timeline-icon">
                <span className="dot-badge"></span>
              </div>

              {/* CONTENT */}
              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default OurHistory;
