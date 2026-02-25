import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import starIcon from "../../images/star-icon.png";
import { getBlogs } from "../../utils/api";

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
              
              {/* IMAGE */}
              <div className="blog-card__header">
                <Link to={`/blog/${b.slug}`}>
                  <img
                    src={b.image}
                    alt={b.title}
                    className="blog-card__image"
                    loading="lazy"
                  />
                </Link>
              </div>

              {/* BODY */}
              <div className="blog-card__body">
                <span className={`blog-tag blog-tag-${b.tag_color}`}>
                  {b.category}
                </span>

                <h4 className="blog-card__title">
                  <Link to={`/blog/${b.slug}`}>
                    {b.title}
                  </Link>
                </h4>

                <p className="blog-card__desc">
                  {b.short_desc}
                </p>

                {/* 🔥 READ MORE BUTTON */}
                <Link
                  to={`/blog/${b.slug}`}
                  className="read-more-btn"
                >
                  Read More →
                </Link>
              </div>

            </div>
          ))}

          {!blogs.length && (
            <p style={{ textAlign: "center" }}>No blogs found</p>
          )}
        </div>
      </div>

      {/* ================= INLINE CSS ================= */}
      <style jsx>{`
        .blog-card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 40px;
        }

        .blog-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .blog-card__image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .blog-card__body {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .blog-card__title a {
          color: #222;
          font-weight: 600;
          text-decoration: none;
        }

        .blog-card__title a:hover {
          color: #ff6a00;
        }

        .blog-card__desc {
          font-size: 14px;
          color: #666;
          margin: 15px 0;
          flex-grow: 1;
        }

        .read-more-btn {
          display: inline-block;
          margin-top: 10px;
          padding: 10px 20px;
          background: linear-gradient(90deg, #ff6a00, #ff3c2f);
          color: #fff;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: 0.3s ease;
        }

        .read-more-btn:hover {
          background: linear-gradient(90deg, #e65c00, #e02d20);
          transform: translateY(-2px);
          color:black
        }

        @media (max-width: 768px) {
          .blog-card__image {
            height: 180px;
          }
        }
      `}</style>

    </section>
  );
};

export default OurBlog;
