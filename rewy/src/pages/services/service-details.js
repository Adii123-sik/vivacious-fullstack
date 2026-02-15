import React from "react";
import Layout from "../../components/_App/Layout";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/ServiceDetails/ServiceDetailsContent";
import Footer from "../../components/_App/Footer";
import Seo from "../../components/_App/seo";

const ServiceDetailsPage = ({ serverData }) => {
  const service = serverData;

  if (!service) {
    return (
      <Layout>
        <Navbar />
        <div className="text-center ptb-100">
          <h3>Service Not Found</h3>
        </div>
        <Footer />
      </Layout>
    );
  }

  const pageTitle = `${service.service_name} | Vivacious Solutions`;

  return (
    <Layout>
      <Navbar />

      {/* ✅ Dynamic SEO Title */}
      <Seo title={pageTitle} />

      <PageBanner
        pageTitle={service.service_name}
        homePageText="Home"
        homePageUrl="/"
        activePageText={service.service_name}
      />

      <ServiceDetailsContent service={service} />

      <Footer />
    </Layout>
  );
};

export default ServiceDetailsPage;


/* ================= SERVER SIDE FETCH ================= */

export async function getServerData(context) {
  const slug = context.params["*"];

  if (!slug) {
    return { notFound: true };
  }

  try {
    const res = await fetch(
      `http://localhost:5000/api/services/${slug}`
    );

    if (!res.ok) {
      return { notFound: true };
    }

    const data = await res.json();

    return {
      props: data,
    };
  } catch (error) {
    console.error("Service SSR Fetch Error:", error);
    return { notFound: true };
  }
}
