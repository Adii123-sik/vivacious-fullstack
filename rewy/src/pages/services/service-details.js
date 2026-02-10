import React from "react";
import Layout from "../../components/_App/Layout";
import Seo from "../../components/_App/seo";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/ServiceDetails/ServiceDetailsContent";
import RelatedServices from "../../components/ServiceDetails/RelatedServices";
import Footer from "../../components/_App/Footer";

const ServiceDetailsPage = ({ location }) => {
  /**
   * Handles:
   * /services/service-details/7
   * /services/service-details/7/
   */

  const pathParts = location.pathname
    .split("/")
    .filter(Boolean); // 👈 EMPTY STRINGS HATA DI

  const id = pathParts[pathParts.length - 1]; // 👈 SAFE ID

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Service Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Service Details"
      />

      {/* ✅ ID AB SAHI AA RAHI */}
      <ServiceDetailsContent id={id} />

      <RelatedServices currentServiceId={id} />

      <Footer />
    </Layout>
  );
};

export const Head = () => <Seo title="Service Details" />;

export default ServiceDetailsPage;
