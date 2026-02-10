import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import axios from "axios";
import BlogSidebar from "./BlogSidebar";
import {API_BASE_URL} from "../../config/apiConfig"

const BASE_URL = `${API_BASE_URL}`;

const BlogDetailsContent = ({ id }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const loadBlog = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/api/blogs/${id}`
        );
        setBlog(data);
      } catch (err) {
        console.error("BLOG DETAILS FETCH ERROR ❌", err);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [id]);

  /* ================= STATES ================= */

  if (!id) {
    return (
      <section className="blog-details-area ptb-100 text-center">
        <div className="container">
          <h3>Invalid Blog URL</h3>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="blog-details-area ptb-100">
        <div className="container">
          <p>Loading blog...</p>
        </div>
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="blog-details-area ptb-100">
        <div className="container">
          <p>Blog not found</p>
        </div>
      </section>
    );
  }

  /* ================= UI ================= */

  return (
    <section className="blog-details-area ptb-100">
      <div className="container">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              {/* IMAGE */}
              {blog.image && (
                <div className="article-image">
                  <img
                    src={blog.image}
                    alt={blog.title}
                  />
                </div>
              )}

              <div className="article-content">
                {/* META */}
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="bx bx-folder-open"></i>
                      <span>Category</span>
                      <Link to="/blog">
                        {blog.category}
                      </Link>
                    </li>

                    <li>
                      <i className="bx bx-calendar"></i>
                      <span>Published</span>
                      <span>
                        {blog.created_at
                          ? new Date(blog.created_at).toLocaleDateString()
                          : ""}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* TITLE */}
                <h3>{blog.title}</h3>

                {/* CONTENT */}
                <div
                  className="article-text"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {blog.content}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4 col-md-12">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsContent;
