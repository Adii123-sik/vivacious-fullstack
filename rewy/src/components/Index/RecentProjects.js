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
              <div className="single-projects-box rp2-card">
                <div className="image rp2-image">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="rp2-no-image">No Image</div>
                  )}

                  <div className="rp2-overlay" aria-hidden="true" />

                  {project.website_link && (
                    <a
                      className="link-btn rp2-btn"
                      href={project.website_link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} website`}
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                  )}

                  <div className="rp2-pill">
                    {project.category}
                  </div>
                </div>

                <div className="content rp2-content">
                  <h3 className="rp2-h3">
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

                  <span className="rp2-span">
                    {project.category}
                  </span>
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
