import React from "react";
import { Router } from "@reach/router";
import { Helmet } from "react-helmet";

import Layout from "../../components/_App/Layout";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/ServiceDetails/ServiceDetailsContent";
import ProjectStartArea from "../../components/Index/ProjectStartArea";
import RelatedServices from "../../components/ServiceDetails/RelatedServices";

const ServiceDetailsPage = () => {
  return (
    <Layout>
      <Navbar />

      <Router basepath="/services">
        <ServiceRoute path="/:slug" />
      </Router>

      <ProjectStartArea />
      <Footer />
    </Layout>
  );
};

const ServiceRoute = ({ slug }) => {
  if (!slug) return null;

  const pageTitle = `${slug} | Vivacious Solutions`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <PageBanner
        pageTitle={slug}
        homePageText="Home"
        homePageUrl="/"
        activePageText={slug}
      />

      <ServiceDetailsContent slug={slug} />
      <RelatedServices slug={slug}/>

    </>
  );
};

export default ServiceDetailsPage;

