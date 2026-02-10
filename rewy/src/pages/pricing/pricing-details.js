import React from "react";
import { Router } from "@reach/router";

import Layout from "../../components/_App/Layout";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ServicePricing from "../../components/Services-Pricing/ServicePricing";
import ProjectStartArea from "../../components/Index/ProjectStartArea";

const PricingDetailsPage = () => {
  return (
    <Layout>
      <Navbar />

      {/* ✅ client-only routing */}
      <Router basepath="/pricing">
        <PricingDetails path="/:serviceSlug" />
      </Router>

      <Footer />
    </Layout>
  );
};

const PricingDetails = ({ serviceSlug }) => {
  if (!serviceSlug) return null;

  const pageTitle =
    serviceSlug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()) + " Pricing";

  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        homePageText="Home"
        homePageUrl="/"
        activePageText={pageTitle}
      />

      {/* 🔥 DB slug directly used */}
      <ServicePricing serviceSlug={serviceSlug} />
      <ProjectStartArea />
    </>
  );
};

export default PricingDetailsPage;
