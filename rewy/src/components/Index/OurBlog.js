import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import starIcon from "../../images/star-icon.png";
import { getBlogs } from "../../utils/api";
import {API_BASE_URL} from "../../config/apiConfig"

const BASE_URL = `${API_BASE_URL}`;

const OurBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await getBlogs();
      setBlogs(Array.isArray(data) ? data : []);
    };
    loadBlogs();
  }, []);

  return (
    <section className="blog-area pt-100 pb-70 bg-fffbf5 blog-cards-v1">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title">
            <img src={starIcon} alt="blog" /> Our Blog
          </span>
          <h2>Latest Valuable Insights</h2>
          <p>
            Stay updated with the latest tips, trends, and strategies in web design, SEO, and digital marketing.
          </p>
        </div>

        <div className="blog-card-container">
          {blogs.map((b) => (
            <div key={b.id} className="blog-card">
              <div className="blog-card__header">
                <Link to={`/blog/blog-details/${b.id}`}>
                  <img
                    src={b.image}
                    alt={b.title}
                    className="blog-card__image"
                    loading="lazy"
                  />
                </Link>
              </div>

              <div className="blog-card__body">
                <span className={`blog-tag blog-tag-${b.tag_color}`}>
                  {b.category}
                </span>

                <h4 className="blog-card__title">
                  <Link to={`/blog/blog-details/${b.id}`}>{b.title}</Link>
                </h4>

                <p className="blog-card__desc">
                  {b.short_desc}
                </p>
              </div>

              <div className="blog-card__footer">
                <div className="blog-user">
                  
                  <div className="blog-user__info">
                    <h5>{b.author}</h5>
                    <small>{b.published_date}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {!blogs.length && (
            <p style={{ textAlign: "center" }}>No blogs found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
