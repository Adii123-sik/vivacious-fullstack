import React, { useEffect, useState, useRef } from "react";
import starIcon from "../../images/star-icon.png";
import { getProjects } from "../../utils/api";

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [showButtons, setShowButtons] = useState(false);

  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  /* ================= Responsive Visible Count ================= */

  const updateVisibleCount = () => {
    if (window.innerWidth <= 576) {
      setVisibleCount(1);
    } else if (window.innerWidth <= 992) {
      setVisibleCount(2);
    } else {
      setVisibleCount(3);
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  /* ================= Scroll Animation (0.5s Delay) ================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowButtons(true);
          }, 500); // 0.5 second delay
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  /* ================= Load Projects ================= */

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("PROJECT LOAD ERROR ❌", err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  /* ================= Slider Logic ================= */

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 > projects.length - visibleCount ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? projects.length - visibleCount : prev - 1
    );
  };

  const startAutoSlide = () => {
    if (projects.length <= visibleCount) return;
    intervalRef.current = setInterval(nextSlide, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [projects, visibleCount]);

  /* ================= Render ================= */

  return (
    <section
      ref={sectionRef}
      className="projects-area bg-color pt-100 pb-70 recent-projects-v2"
    >
      <div className="container">
        <div className="section-title text-center rp2-title-wrap">
          <span className="sub-title rp2-subtitle">
            <img src={starIcon} alt="project" /> Our Portfolio
          </span>

          <h2 className="rp2-heading">
            Check Some Of Our Recent Work
          </h2>
        </div>

        {loading && (
          <p style={{ textAlign: "center" }}>Loading projects...</p>
        )}

        <div
          className="slider-wrapper"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <button className="slider-btn left" onClick={prevSlide}>
            ‹
          </button>

          <div className="slider-container">
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCount)
                }%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="slide-item"
                  style={{
                    flex: `0 0 ${100 / visibleCount}%`,
                  }}
                >
                  <div className="rp-card">
                    <div className="rp-img-wrap">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                        />
                      )}

                      {project.website_link && (
                        <a
                          href={project.website_link}
                          target="_blank"
                          rel="noreferrer"
                          className= {`rp-hover-btn ${
                            showButtons ? "animate-in" : "" 
                          } button-view`}
                        >
                          View Project →
                        </a>
                      )}
                    </div>

                    <div className="rp-body">
                      <h3>{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn right" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </section>  
  );
};

export default RecentProjects;
