import React, { useEffect, useState } from "react";
import starIcon from "../../images/star-icon.png";
import { getProjects } from "../../utils/api";
import { API_BASE_URL } from "../../config/apiConfig"

const BASE_URL = `${API_BASE_URL}`;

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        console.log("RECENT PROJECTS 👉", data);
        setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("PROJECT LOAD ERROR ❌", err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section className="projects-area bg-color pt-100 pb-70 recent-projects-v2">
      <div className="container">
        <div className="section-title text-center rp2-title-wrap">
          <span className="sub-title rp2-subtitle">
            <img src={starIcon} alt="project" /> Our Portfolio
          </span>

          <h2 className="rp2-heading">Check Some Of Our Recent Work</h2>

          <p className="rp2-desc">
            Explore our latest projects in web design, SEO, and digital marketing—built to deliver real results.
          </p>
        </div>

        {loading && (
          <p style={{ textAlign: "center" }}>Loading projects...</p>
        )}

        <div className="row rp2-row">
          {!loading && projects.length === 0 && (
            <p style={{ textAlign: "center" }}>No projects found</p>
          )}

          {projects.map((project) => (
  <div key={project.id} className="col-lg-4 col-md-6">
    <div className="rp-card">

      <div className="rp-img-wrap">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
        ) : (
          <div className="rp-no-img">No Image</div>
        )}

        <div className="rp-gradient"></div>

        {project.website_link && (
          <a
            href={project.website_link}
            target="_blank"
            rel="noreferrer"
            className="rp-view-btn"
          >
            View Project →
          </a>
        )}
      </div>

      <div className="rp-body">
        <h3>
          {project.website_link ? (
            <a
              href={project.website_link}
              target="_blank"
              rel="noreferrer"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
      </div>

    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
