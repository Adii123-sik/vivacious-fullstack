import React, { useEffect, useState } from "react";
import starIcon from "../../images/star-icon.png";
import { getTeamMembers } from "../../utils/api";
import { API_BASE_URL } from "../../config/apiConfig";

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

        <div className="row team-grid">
          {team.map((m) => (
            <div key={m.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-card">

                <div className="team-img-wrap">
                  <img
                    src={m.image}
                    alt={m.name}
                  />

                  <div className="team-social">
                    {m.facebook && (
                      <a href={m.facebook} target="_blank" rel="noreferrer">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    )}
                    {m.twitter && (
                      <a href={m.twitter} target="_blank" rel="noreferrer">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    )}
                    {m.instagram && (
                      <a href={m.instagram} target="_blank" rel="noreferrer">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    )}
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noreferrer">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    )}
                  </div>
                </div>

                <div className="team-content">
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
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

