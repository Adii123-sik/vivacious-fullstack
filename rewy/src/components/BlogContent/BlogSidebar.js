import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import axios from "axios";
import {API_BASE_URL} from "../../config/apiConfig"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";



const BASE_URL = `${API_BASE_URL}`;

const BlogSidebar = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/blogs`);
      setBlogs(data);

      // category count
      const map = {};
      data.forEach((b) => {
        if (b.category) {
          map[b.category] = (map[b.category] || 0) + 1;
        }
      });

      setCategories(
        Object.entries(map).map(([name, count]) => ({
          name,
          count,
        }))
      );
    } catch (err) {
      console.error("SIDEBAR LOAD ERROR ❌", err);
    }
  };

  return (
    <div className="widget-area">
      {/* ================= POPULAR POSTS ================= */}
      <div className="widget widget_tracer_posts_thumb">
        <h3 className="widget-title">Popular Posts</h3>

        {/* ===== MOBILE: SLIDER ===== */}
        <div className="d-block d-md-none">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={15}
            slidesPerView={1}
            loop
          >
            {blogs.map((b) => (
              <SwiperSlide key={b.id}>
                <article className="item">
                  <Link
                    to={`/blog/blog-details/${b.id}`}
                    className="thumb"
                  >
                    <img
                      src={b.image}
                      alt={b.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Link>

                  <div className="info">
                    <span>
                      {new Date(b.created_at).toLocaleDateString()}
                    </span>
                    <h4 className="title usmall">
                      <Link to={`/blog/blog-details/${b.id}`}>
                        {b.title}
                      </Link>
                    </h4>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ===== DESKTOP: SCROLLABLE LIST ===== */}
        <div
          className="d-none d-md-block"
          style={{
            maxHeight: "380px",
            overflowY: "auto",
            paddingRight: "6px",
          }}
        >
          {blogs.map((b) => (
            <article className="item" key={b.id}>
              <Link
                to={`/blog/blog-details/${b.id}`}
                className="thumb"
              >
                <img
                  src={b.image}
                  alt={b.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
              </Link>

              <div className="info">
                <span>
                  {new Date(b.created_at).toLocaleDateString()}
                </span>

                <h4 className="title usmall">
                  <Link to={`/blog/blog-details/${b.id}`}>
                    {b.title}
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>
          ))}
        </div>
      </div>

      {/* ================= CATEGORIES ================= */}
      <div className="widget widget_categories">
        <h3 className="widget-title">Categories</h3>

        <ul>
          {categories.map((c) => (
            <li key={c.name}>
              <Link to="/blog">
                {c.name}{" "}
                <span className="post-count">
                  ({c.count})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
