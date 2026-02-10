import React from "react";
import { Router } from "@reach/router";

import Layout from "../../components/_App/Layout";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContent from "../../components/BlogContent/BlogDetailsContent";
import BlogSidebar from "../../components/BlogContent/BlogSidebar";
import Contact from "../../components/Index/ProjectStartArea"

const BlogDetailsPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Blog Details"
      />

      {/* ✅ ROUTER HERE */}
      <Router basepath="/blog/blog-details">
        <BlogDetailsContent path="/:id" />
      </Router>
      
      <Contact/>


      <Footer />
    </Layout>
  );
};

export default BlogDetailsPage;
