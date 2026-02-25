import React from "react";
import { Router } from "@reach/router";
import Layout from "../../components/_App/Layout";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ServicePricing from "../../components/Services-Pricing/ServicePricing";
import ProjectStartArea from "../../components/Index/ProjectStartArea";
import Seo from "../../components/_App/seo";

const PricingDetailsPage = () => {
  return (
    <Layout>
      <Navbar />

      {/* Client-only routing */}
      <Router basepath="/pricing">
        <PricingDetails path="/:serviceSlug" />
      </Router>

      <Footer />
    </Layout>
  );
};

const PricingDetails = ({ serviceSlug }) => {
  if (!serviceSlug) return null;

  const formattedTitle = serviceSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const pageTitle = `${formattedTitle} Pricing`;

  return (
    <>
      {/* ✅ SEO TITLE FIX */}
      <Seo title={pageTitle} />

      <PageBanner
        pageTitle={pageTitle}
        homePageText="Home"
        homePageUrl="/"
        activePageText={pageTitle}
      />

      <ServicePricing serviceSlug={serviceSlug} />
      <ProjectStartArea />
    </>
  );
};

export default PricingDetailsPage;
