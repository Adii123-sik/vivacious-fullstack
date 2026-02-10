import React, { useEffect, useState } from "react";
import starIcon from "../../images/star-icon.png";
import { getTeamMembers } from "../../utils/api";
import { API_BASE_URL} from "../../config/apiConfig";

const TeamMember = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    try {
      const data = await getTeamMembers();
      setTeam(data);
    } catch (err) {
      console.error("Failed to load team", err);
    }
  };

  return (
    <section className="scientist-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="team" />
            Team Members
          </span>
          <h2>Our Awesome Team</h2>
          <p>
            Behind every successful project is a strong team of experts.
          </p>
        </div>

        <div className="row">
          {team.map((m) => (
            <div key={m.id} className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img
                    src={m.image}
                    alt={m.name}
                  />

                  <ul className="social">
                    {m.facebook && (
                      <li>
                        <a href={m.facebook} target="_blank" rel="noreferrer">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                    )}
                    {m.twitter && (
                      <li>
                        <a href={m.twitter} target="_blank" rel="noreferrer">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                    )}
                    {m.instagram && (
                      <li>
                        <a href={m.instagram} target="_blank" rel="noreferrer">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                    )}
                    {m.linkedin && (
                      <li>
                        <a href={m.linkedin} target="_blank" rel="noreferrer">
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="content">
                  <h3>{m.name}</h3>
                  <span>{m.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;

