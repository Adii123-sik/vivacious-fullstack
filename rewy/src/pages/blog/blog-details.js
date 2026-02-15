import React from "react";
import { Router } from "@reach/router";
import { Helmet } from "react-helmet";

import Layout from "../../components/_App/Layout";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContent from "../../components/BlogContent/BlogDetailsContent";
import Contact from "../../components/Index/ProjectStartArea";

const BlogDetailsPage = () => {
  return (
    <Layout>
      <Navbar />

      <Router basepath="/blog">
        <BlogDetails path="/:slug" />
      </Router>

      <Contact />
      <Footer />
    </Layout>
  );
};

const BlogDetails = ({ slug }) => {
  if (!slug) return null;

  const pageTitle = `${slug} | Vivacious Solutions`;

  return (
    <>
      {/* ✅ Slug directly in tab */}
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <PageBanner
        pageTitle={slug}
        homePageText="Home"
        homePageUrl="/"
        activePageText={slug}
      />

      <BlogDetailsContent slug={slug} />
    </>
  );
};

export default BlogDetailsPage;
